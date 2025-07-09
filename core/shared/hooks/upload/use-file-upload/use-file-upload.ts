import { useEffect, useRef, useState } from 'react';
import { isEqual } from 'lodash';
import { INITIAL_FILE_UPLOAD_CONFIG, INITIAL_FILE_UPLOAD_STRUCTURE } from '@/core/shared/hooks/upload/use-file-upload/use-file-upload.const';
import { EnumFileUploadStatus, TypeFileUploadOptions, TypeFileUploadStructure } from '@/core/shared/hooks/upload/use-file-upload/use-file-upload.type';

const useFileUpload = (options: TypeFileUploadOptions) => {
  const { initialStructure, accept = [], uploadApi, downloadApi, onFinally, onReset } = options;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputKey = useRef<number>(0);

  const [structure, setStructure] = useState<TypeFileUploadStructure>({
    ...INITIAL_FILE_UPLOAD_STRUCTURE,
    ...initialStructure,
  });

  const onUploadChange = async () => {
    if (!inputRef.current) return;
    if (inputRef.current.disabled) return;
    if (!inputRef.current?.files?.length) return;
    inputRef.current.disabled = true;
    const inputFile = inputRef.current.files[0];
    const fileSize = inputFile.size;
    const clientname = inputFile.name;
    const config = { ...INITIAL_FILE_UPLOAD_CONFIG, clientname, size: fileSize, mime: inputFile.type };
    setStructure((prev) => ({
      ...prev,
      config,
      status: EnumFileUploadStatus.INPROGRESS,
      percentage: 0,
    }));
    try {
      const formData = new FormData();
      formData.append('file', inputFile);
      if (accept.length && !accept.includes(inputFile.type)) throw new Error('Failed Type');
      const response = await uploadApi(formData);
      setStructure((prev) => ({
        ...prev,
        config: { ...config, id: response.data, assetId: response.data },
        status: EnumFileUploadStatus.SUCCESS,
        percentage: 100,
      }));
    } catch (error) {
      setStructure((prev) => ({
        ...prev,
        status: EnumFileUploadStatus.FAIL,
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

  const onUploadDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!inputRef.current) return;
    if (inputRef.current.disabled) return;
    const files = event && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files;
    if (!files) return;
    inputRef.current.files = files;
    await onUploadChange();
  };

  const onUploadDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onUploadReset = () => {
    if (!inputRef.current) return;
    if (inputRef.current.disabled) return;
    inputKey.current += 1;
    setStructure((prev) => ({
      ...INITIAL_FILE_UPLOAD_STRUCTURE,
    }));
    onReset?.({
      ...INITIAL_FILE_UPLOAD_STRUCTURE,
    });
    if (inputRef.current) inputRef.current.value = '';
  };

  const onUploadDownload = async (fileId: string) => {
    try {
      const response = await downloadApi(fileId);
      window.open(response.data, '_blank');
    } catch (error) {
      throw new Error(`Failed file download - ${error}`);
    }
  };

  useEffect(() => {
    if (structure.percentage < 100) return;
    if (isEqual(structure, initialStructure)) return;
    onFinally?.({ ...structure });
  }, [structure.percentage]);

  return {
    ...structure,
    inputRef,
    inputKey,
    onUploadReset,
    onUploadChange,
    onUploadDragOver,
    onUploadDrop,
    onUploadDownload,
  };
};

export default useFileUpload;
