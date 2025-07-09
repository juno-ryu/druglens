import { useEffect, useRef, useState } from 'react';
import { isEqual } from 'lodash';
import { INITIAL_CSV_UPLOAD_STRUCTURE } from '@/core/shared/hooks/upload/use-csv-upload/use-csv-upload.const';
import { EnumCsvUploadStatus, TypeCsvUploadOptions, TypeCsvUploadStructure } from '@/core/shared/hooks/upload/use-csv-upload/use-csv-upload.type';

const useCsvUpload = (options: TypeCsvUploadOptions) => {
  const { id, initialStructure, accept = [], uploadApi, onFinally, onReset } = options;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputKey = useRef<number>(0);

  const [structure, setStructure] = useState<TypeCsvUploadStructure>({
    ...INITIAL_CSV_UPLOAD_STRUCTURE,
    ...initialStructure,
  });

  const onUploadChange = async () => {
    if (!inputRef.current) return;
    if (inputRef.current.disabled) return;
    if (!inputRef.current?.files?.length) return;
    inputRef.current.disabled = true;

    const inputFile = inputRef.current.files[0];

    setStructure((prev) => ({
      ...prev,
      status: EnumCsvUploadStatus.INPROGRESS,
      percentage: 0,
    }));
    try {
      const formData = new FormData();
      formData.append('file', inputFile);
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      if (accept.length && !accept.includes(inputFile.type)) throw new Error('Failed Type');

      const response = await uploadApi(id, formData);
      console.log(response);
      setStructure((prev) => ({
        ...prev,
        status: EnumCsvUploadStatus.SUCCESS,
        percentage: 100,
      }));
    } catch (error) {
      setStructure((prev) => ({
        ...prev,
        status: EnumCsvUploadStatus.FAIL,
      }));
      throw new Error(`Failed file upload - ${error}`);
    } finally {
      if (inputRef.current) inputRef.current.disabled = false;
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
      ...INITIAL_CSV_UPLOAD_STRUCTURE,
    }));
    onReset?.({
      ...INITIAL_CSV_UPLOAD_STRUCTURE,
    });
    if (inputRef.current) inputRef.current.value = '';
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
  };
};

export default useCsvUpload;
