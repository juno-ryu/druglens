import { useEffect, useRef, useState } from 'react';
import { readImageBlob, readImageSize } from '@/core/utils/helpers/file';
import { Uploader } from '@/core/utils/helpers/uploader';
import { INITIAL_THUMBNAIL_UPLOAD_CONFIG, INITIAL_THUMBNAIL_UPLOAD_STRUCTURE } from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.const';
import {
  EnumThumbnailUploadStatus,
  TypeThumbnailUploadConfig,
  TypeThumbnailUploadOptions,
  TypeThumbnailUploadStructure,
} from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.type';
import COMMON_APIS from '@/core/shared/service/common/common.service';

const useThumbnailUpload = (options: TypeThumbnailUploadOptions) => {
  const { initialStructure, image, accept = [], onStart, onFinally, onReset } = options;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputKey = useRef<number>(0);
  const uploaderRef = useRef<Uploader | null>(null);
  const percentageRef = useRef<number>(0);

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [structure, setStructure] = useState<TypeThumbnailUploadStructure>({
    ...INITIAL_THUMBNAIL_UPLOAD_STRUCTURE,
    ...initialStructure,
  });

  const onUploadChange = async () => {
    if (inputRef.current) inputRef.current.disabled = true;
    if (!inputRef.current?.files?.length) return;
    const inputFile = inputRef.current.files[0];
    const fileSize = inputFile.size;
    const clientname = inputFile.name;
    const isMultipart = Boolean(fileSize / (1024 * 1024) >= 5);
    const config = { ...INITIAL_THUMBNAIL_UPLOAD_CONFIG, clientname, size: fileSize, mime: inputFile.type };
    setStructure((prev) => ({
      ...prev,
      config,
      status: EnumThumbnailUploadStatus.INPROGRESS,
      percentage: 0,
    }));
    try {
      if (accept.length && !accept.includes(inputFile.type)) throw new Error('Failed Type');
      const imageBlob = await readImageBlob(inputFile);
      const imageSize = await readImageSize(imageBlob);
      const fileKey = await (isMultipart ? onUploadMulti : onUploadSingle)({ inputFile });

      await onUploadComplete({
        config: { ...config, fileKey },
        width: imageSize.width,
        height: imageSize.height,
        blob: imageBlob,
      });
    } catch (error) {
      setStructure((prev) => ({
        ...prev,
        status: EnumThumbnailUploadStatus.FAIL,
      }));
      throw new Error(`Failed file upload - ${error}`);
    } finally {
      if (inputRef.current) inputRef.current.disabled = false;
      setStructure((prev) => ({
        ...prev,
        percentage: prev.config.clientname ? 100 : 0,
      }));
    }
  };

  const onUploadComplete = async (options: { config: TypeThumbnailUploadConfig; width: number; height: number; blob: string | ArrayBuffer | null }) => {
    const { config, width, height, blob } = options;
    // todo. valridation image width, height
    if (!config.clientname || !config.fileKey) return;
    setPreview(blob);
    setStructure((prev) => ({
      ...prev,
      config: { ...config },
      status: EnumThumbnailUploadStatus.SUCCESS,
      percentage: 100,
    }));
  };

  const onUploadMulti = async (options: { inputFile: File }): Promise<string> => {
    const { inputFile } = options;
    return new Promise((resolve, reject) => {
      uploaderRef.current = new Uploader({
        file: inputFile,
        initializeUploadFn: COMMON_APIS['multipart-upload/init'].post,
        completeUploadFn: COMMON_APIS['multipart-upload/complete'].post,
      });
      uploaderRef.current
        .onProgress(({ percentage }) => {
          if (Math.abs(percentage - percentageRef.current) >= 5) {
            percentageRef.current = percentage;
            setStructure((prev) => ({
              ...prev,
              percentage: percentage,
            }));
          }
        })
        .onError((error) => {
          return reject(new Error(`Failed multipart upload - ${error}`));
        })
        .onComplete(() => {
          setStructure((prev) => ({
            ...prev,
            percentage: 100,
          }));
          if (!uploaderRef.current?.fileKey) return reject(new Error('File key is null'));
          return resolve(uploaderRef.current.fileKey);
        });
      uploaderRef.current.start();
    });
  };

  const onUploadSingle = async (options: { inputFile: File }): Promise<string> => {
    const { inputFile } = options;
    const clientname = inputFile.name;
    const response = await COMMON_APIS['upload/presigned'].post(clientname);
    await COMMON_APIS['upload/presigned'].put(response.data.signedUrl, inputFile);
    if (!response.data.fileKey) throw new Error('File key is undefined');
    return response.data.fileKey;
  };

  const onUploadDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files;
    if (files && inputRef && inputRef.current) {
      inputRef.current.files = files;
      await onUploadChange();
    }
  };

  const onUploadDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onUploadReset = () => {
    if (inputRef.current?.disabled) return;

    inputKey.current += 1;
    setStructure((prev) => ({
      ...INITIAL_THUMBNAIL_UPLOAD_STRUCTURE,
    }));
    setPreview(null);
    onReset?.({
      ...INITIAL_THUMBNAIL_UPLOAD_STRUCTURE,
    });

    if (inputRef.current) inputRef.current.value = '';
    if (uploaderRef.current) uploaderRef.current = null;
  };

  useEffect(() => {
    if (structure.percentage < 100) return;
    onFinally?.({ ...structure });
  }, [structure.percentage]);

  useEffect(() => {
    if (structure.status !== EnumThumbnailUploadStatus.INPROGRESS) return;
    onStart?.({ ...structure });
  }, [structure.status]);

  useEffect(() => {
    if (!image) return;
    setPreview(image?.url?.toString());
    setStructure((prev) => ({
      ...prev,
      config: {
        id: image?.id,
        size: image.size || 0,
        mime: image.mime,
        isMain: image?.isMain,
        clientname: image?.clientname || null,
        fileKey: null,
      },
      status: EnumThumbnailUploadStatus.SUCCESS,
      percentage: 100,
    }));
  }, [image]);

  return {
    ...structure,
    inputRef,
    inputKey,
    uploaderRef,
    preview,
    onUploadReset,
    onUploadChange,
    onUploadDragOver,
    onUploadDrop,
    onUploadMulti,
    onUploadSingle,
  };
};

export default useThumbnailUpload;
