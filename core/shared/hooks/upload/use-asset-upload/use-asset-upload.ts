import { useEffect, useRef, useState } from 'react';
import { unpackFile, unpackZip } from '@/core/utils/helpers/file';
import { Uploader } from '@/core/utils/helpers/uploader';
import { INITIAL_ASSET_UPLOAD_CONFIG, INITIAL_ASSET_UPLOAD_STRUCTURE } from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload.const';
import {
  EnumAssetUploadStatus,
  TypeAssetUploadConfig,
  TypeAssetUploadOptions,
  TypeAssetUploadStructure,
} from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload.type';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import HUB_APIS from '@/core/shared/service/hub/hub.service';
import { PresignedUploadedComponent } from '@/core/shared/service/input/presigned-input/presigned-uploaded-component';

const useAssetUpload = (options: TypeAssetUploadOptions) => {
  const { initialStructure, applications, extensions, asset, accept = [], onStart, onFinally, onReset } = options;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputKey = useRef<number>(0);
  const uploaderRef = useRef<Uploader | null>(null);
  const percentageRef = useRef<number>(0);

  const [structure, setStructure] = useState<TypeAssetUploadStructure>({
    ...INITIAL_ASSET_UPLOAD_STRUCTURE,
    ...initialStructure,
  });

  const onUploadChange = async () => {
    if (inputRef.current) inputRef.current.disabled = true;
    if (!inputRef.current?.files?.length) return;
    const inputFile = inputRef.current.files[0];
    const fileSize = inputFile.size;
    const clientname = inputFile.name;
    const isMultipart = Boolean(fileSize / (1024 * 1024) >= 5);
    const config = { ...INITIAL_ASSET_UPLOAD_CONFIG, clientname, size: fileSize, mime: inputFile.type };
    setStructure((prev) => ({
      ...prev,
      config,
      status: EnumAssetUploadStatus.INPROGRESS,
      percentage: 0,
    }));
    try {
      if (accept.length && !accept.includes(inputFile.type)) throw new Error('Failed Type');
      const unpack = await (accept.includes(inputFile.type) ? unpackZip : unpackFile)({ inputFile, extensions, applications });
      if (!unpack) throw new Error('Failed Unpack');
      const fileKey = await (isMultipart ? onUploadMulti : onUploadSingle)({ inputFile });

      await onUploadComplete({
        config: { ...config, fileKey },
        newFileNames: unpack.newFileNames,
        newFileComponents: unpack.newFileComponents || [],
        newExtensions: unpack.newExtensions,
        newApplications: unpack.newApplications,
      });
    } catch (error) {
      setStructure((prev) => ({
        ...prev,
        status: EnumAssetUploadStatus.FAIL,
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

  const onUploadComplete = async (options: {
    config: TypeAssetUploadConfig;
    newFileNames: string[];
    newFileComponents: PresignedUploadedComponent[];
    newExtensions: number[];
    newApplications: number[];
  }) => {
    const { config, newFileComponents, newExtensions, newApplications } = options;
    if (!config.clientname || !config.fileKey) return;

    const response = await HUB_APIS['assets'].post({
      name: config.clientname,
      files: [{ clientname: config.clientname, fileKey: config.fileKey, components: newFileComponents }],
      extensionIds: newExtensions,
      applicationIds: newApplications,
    });

    setStructure((prev) => ({
      ...prev,
      config: { ...config, id: response.data.id, assetId: response.data.id },
      status: EnumAssetUploadStatus.SUCCESS,
      extensionIds: newExtensions,
      applicationIds: newApplications,
      fileComponents: newFileComponents,
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
      ...INITIAL_ASSET_UPLOAD_STRUCTURE,
    }));
    onReset?.({
      ...INITIAL_ASSET_UPLOAD_STRUCTURE,
    });

    if (inputRef.current) inputRef.current.value = '';
    if (uploaderRef.current) uploaderRef.current = null;
  };

  const onUploadDownload = async (assetId: string) => {
    if (!assetId) return;
    const response = await COMMON_APIS['assets/:assetId/download-url'].post(assetId);
    for (const [downloadId, url] of Object.entries(response.data)) {
      window.open(url, '_blank');
    }
  };

  useEffect(() => {
    if (structure.percentage < 100) return;
    onFinally?.({ ...structure });
  }, [structure.percentage]);

  useEffect(() => {
    if (structure.status !== EnumAssetUploadStatus.INPROGRESS) return;
    onStart?.({ ...structure });
  }, [structure.status]);

  // ::TODO:: Multiple file upload
  useEffect(() => {
    if (!asset?.files) return;
    const upaloadedFile = asset?.files[0] || null;
    const fileComponents = asset.fileComponents || [];
    if (!upaloadedFile) return;
    setStructure((prev) => ({
      ...prev,
      config: {
        clientname: upaloadedFile.clientname,
        size: upaloadedFile.size || 0,
        mime: upaloadedFile.mime,
        id: upaloadedFile.id,
        assetId: asset.id,
        fileKey: null,
      },
      applicationIds: applications.map((application) => application.id),
      extensionIds: extensions.map((extension) => extension.id),
      fileComponents: fileComponents,
      status: EnumAssetUploadStatus.SUCCESS,
      percentage: 100,
    }));
  }, [asset]);

  return {
    ...structure,
    inputRef,
    inputKey,
    uploaderRef,
    onUploadReset,
    onUploadChange,
    onUploadDragOver,
    onUploadDrop,
    onUploadMulti,
    onUploadSingle,
    onUploadDownload,
  };
};

export default useAssetUpload;
