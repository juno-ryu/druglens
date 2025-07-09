export type Part = {
  partNumber: number;
  signedUrl: string;
};

export type InitOutputData = {
  fileKey: string;
  uploadId: string;
  parts: Part[];
};

export type UploadedPart = {
  partNumber: number;
  eTag: string;
};

export type ProgressParam = {
  sent: number;
  total: number;
  percentage: number;
};

export class Uploader {
  chunkSize: number;
  threadsQuantity: number;
  file: File;
  aborted: boolean;
  uploadedSize: number;
  progressCache: { [k: number]: number };
  activeConnections: { [k: number]: XMLHttpRequest };
  parts: Part[];
  uploadedParts: UploadedPart[];
  uploadId: string | null;
  fileKey: string | null;
  onProgressFn: (param: ProgressParam) => void;
  onErrorFn: (e?: Error) => void;
  onCompleteFn: () => void = () => {};
  initializeUploadFn: (fileName: string, partCount: number) => Promise<{ data: InitOutputData }>;
  completeUploadFn: (fileKey: string, uploadId: string, parts: UploadedPart[]) => Promise<void>;

  constructor(options: {
    file: File;
    chunkSize?: number;
    initializeUploadFn: (
      fileName: string,
      partCount: number,
    ) => Promise<{
      data: InitOutputData;
    }>;
    completeUploadFn: (fileKey: string, uploadId: string, parts: UploadedPart[]) => Promise<void>;
  }) {
    // this must be bigger than or equal to 5MB,
    // otherwise AWS will respond with:
    // "Your proposed upload is smaller than the minimum allowed size"
    this.chunkSize = options.chunkSize || 1024 * 1024 * 5;
    // number of parallel uploads
    this.threadsQuantity = 5;
    this.file = options.file;
    this.aborted = false;
    this.uploadedSize = 0;
    this.progressCache = {};
    this.activeConnections = {};
    this.parts = [];
    this.uploadedParts = [];
    this.uploadId = null;
    this.fileKey = null;
    this.onProgressFn = () => {};
    this.onErrorFn = () => {};
    this.onCompleteFn = () => {};
    this.initializeUploadFn = options.initializeUploadFn;
    this.completeUploadFn = options.completeUploadFn;
  }

  // starting the multipart upload request
  start() {
    this.initialize();
  }

  async initialize() {
    try {
      const partCount = Math.ceil(this.file.size / this.chunkSize);
      const { data } = await this.initializeUploadFn(this.file.name, partCount);

      const AWSFileDataOutput = data;

      this.uploadId = AWSFileDataOutput.uploadId;
      this.fileKey = AWSFileDataOutput.fileKey;

      this.parts.push(...AWSFileDataOutput.parts);

      this.sendNext();
    } catch (error: any) {
      await this.complete(error);
    }
  }

  sendNext() {
    const activeConnections = Object.keys(this.activeConnections).length;

    if (activeConnections >= this.threadsQuantity) {
      return;
    }

    if (!this.parts.length) {
      if (!activeConnections) {
        this.complete();
      }

      return;
    }

    //   const part = this.parts.pop()
    const part = this.parts.shift();
    if (this.file && part) {
      const sentSize = (part.partNumber - 1) * this.chunkSize;
      const chunk = this.file.slice(sentSize, sentSize + this.chunkSize);

      const sendChunkStarted = () => {
        this.sendNext();
      };

      this.sendChunk(chunk, part, sendChunkStarted)
        .then(() => {
          this.sendNext();
        })
        .catch((error) => {
          this.parts.push(part);

          this.complete(error);
        });
    }
  }

  // terminating the multipart upload request on success or failure
  async complete(error: Error | undefined = undefined) {
    if (error && !this.aborted) {
      this.onErrorFn(error);
      return;
    }

    if (error) {
      this.onErrorFn(error);
      return;
    }

    try {
      await this.sendCompleteRequest();
      this.onCompleteFn();
    } catch (error: any) {
      this.onErrorFn(error);
    }
  }

  // finalizing the multipart upload request on success by calling
  // the finalization API
  async sendCompleteRequest() {
    if (this.uploadId && this.fileKey) {
      await this.completeUploadFn(this.fileKey, this.uploadId, this.uploadedParts);
    }
  }

  sendChunk(chunk: Blob, part: Part, sendChunkStarted: () => void) {
    return new Promise((resolve, reject) => {
      this.upload(chunk, part, sendChunkStarted)
        .then((status) => {
          if (status !== 200) {
            reject(new Error('Failed chunk upload'));
            return;
          }

          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // calculating the current progress of the multipart upload request
  handleProgress(part: number, event: any) {
    if (this.file) {
      if (event.type === 'progress' || event.type === 'error' || event.type === 'abort') {
        this.progressCache[part] = event.loaded;
      }

      if (event.type === 'uploaded') {
        this.uploadedSize += this.progressCache[part] || 0;
        delete this.progressCache[part];
      }

      const inProgress = Object.keys(this.progressCache)
        .map(Number)
        .reduce((memo, id) => (memo += this.progressCache[id]), 0);

      const sent = Math.min(this.uploadedSize + inProgress, this.file.size);

      const total = this.file.size;

      const percentage = Math.round((sent / total) * 100);

      this.onProgressFn({
        sent: sent,
        total: total,
        percentage: percentage,
      });
    }
  }

  // uploading a part through its pre-signed URL
  upload(file: Blob, part: Part, sendChunkStarted: () => void) {
    // uploading each part with its pre-signed URL
    return new Promise((resolve, reject) => {
      if (this.uploadId && this.fileKey) {
        // - 1 because PartNumber is an index starting from 1 and not 0
        const xhr = (this.activeConnections[part.partNumber - 1] = new XMLHttpRequest());

        sendChunkStarted();

        const progressListener = this.handleProgress.bind(this, part.partNumber - 1);

        xhr.upload.addEventListener('progress', progressListener);

        xhr.addEventListener('error', progressListener);
        xhr.addEventListener('abort', progressListener);
        xhr.addEventListener('loadend', progressListener);

        xhr.open('PUT', part.signedUrl);

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // retrieving the ETag parameter from the HTTP headers
            const ETag = xhr.getResponseHeader('ETag');

            if (ETag) {
              const uploadedPart: UploadedPart = {
                partNumber: part.partNumber,
                // removing the " enclosing carachters from
                // the raw ETag
                eTag: ETag.replaceAll('"', ''),
              };

              this.uploadedParts.push(uploadedPart);

              resolve(xhr.status);
              delete this.activeConnections[part.partNumber - 1];
            }
          }
        };

        xhr.onerror = (error) => {
          reject(error);
          delete this.activeConnections[part.partNumber - 1];
        };

        xhr.onabort = () => {
          reject(new Error('Upload canceled by user'));
          delete this.activeConnections[part.partNumber - 1];
        };

        xhr.send(file);
      }
    });
  }

  onProgress(onProgress: (p: ProgressParam) => void) {
    this.onProgressFn = onProgress;
    return this;
  }

  onError(onError: (e?: Error) => void) {
    this.onErrorFn = onError;
    return this;
  }

  onComplete(callback: () => void) {
    this.onCompleteFn = callback;
    return this;
  }

  abort() {
    Object.keys(this.activeConnections)
      .map(Number)
      .forEach((id) => {
        this.activeConnections[id].abort();
      });

    // call api: /common/s3/multipart-upload/abort (body: { fileKey: string, uploadId: string })

    this.aborted = true;
  }
}
