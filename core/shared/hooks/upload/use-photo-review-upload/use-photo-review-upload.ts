import { useEffect, useRef, useState } from 'react';
import { readImageBlob } from '@/core/utils/helpers/file';
import { Uploader } from '@/core/utils/helpers/uploader';
import { INITIAL_PHOTO_REVIEW_UPLOAD_STRUCTURE } from '@/core/shared/hooks/upload/use-photo-review-upload/use-photo-review-upload.const';
import {
  EnumPhotoReviewUploadStatus,
  TypePhotoReviewUploadOptions,
  TypePhotoReviewUploadStructure,
} from '@/core/shared/hooks/upload/use-photo-review-upload/use-photo-review-upload.type';
import ACON_APIS from '@/core/shared/service/acon/acon.service';
import { ImageOutput } from '@/core/shared/service/output/image-output';

const usePhotoReviewUpload = (options: TypePhotoReviewUploadOptions) => {
  const { initialStructure, image, accept = [], isUploadOnly, onStart, onFinally, onReset } = options;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputKey = useRef<number>(0);
  const uploaderRef = useRef<Uploader | null>(null);

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [structure, setStructure] = useState<TypePhotoReviewUploadStructure>({
    ...INITIAL_PHOTO_REVIEW_UPLOAD_STRUCTURE,
    ...initialStructure,
  });

  const onUploadChange = async () => {
    if (inputRef.current) inputRef.current.disabled = true;
    if (!inputRef.current?.files?.length) return;
    const inputFile = inputRef.current.files[0];

    setStructure((prev) => ({ ...prev, status: EnumPhotoReviewUploadStatus.INPROGRESS, percentage: 0 }));
    onStart?.({ ...structure, status: EnumPhotoReviewUploadStatus.INPROGRESS, percentage: 0 });
    try {
      if (accept.length && !accept.includes(inputFile.type)) throw new Error('Failed Type');
      const imageBlob = await readImageBlob(inputFile);
      const _config = await onUploadSingle({ inputFile });

      if (!imageBlob) {
        throw new Error('Failed to read image blob');
      }
      const config = {
        ..._config,
        url: new URL(imageBlob.toString()),
      };

      setPreview(imageBlob);
      setStructure({
        config,
        percentage: 100,
        status: EnumPhotoReviewUploadStatus.SUCCESS,
      });
      onFinally?.({ ...structure, config, percentage: 100, status: EnumPhotoReviewUploadStatus.SUCCESS });
      if (isUploadOnly) {
        setStructure(INITIAL_PHOTO_REVIEW_UPLOAD_STRUCTURE);
      }
    } catch (error) {
      setStructure((prev) => ({
        ...prev,
        status: EnumPhotoReviewUploadStatus.FAIL,
      }));
      throw new Error(`Failed file upload - ${error}`);
    } finally {
      if (inputRef.current) inputRef.current.disabled = false;
    }
  };

  const onUploadSingle = async (options: { inputFile: File }): Promise<ImageOutput> => {
    const { inputFile } = options;
    const { data: imageOutput } = await ACON_APIS['products/review/upload-image'].post({ file: inputFile });

    if (!imageOutput) throw new Error('Failed to upload image');

    return imageOutput;
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
      ...INITIAL_PHOTO_REVIEW_UPLOAD_STRUCTURE,
    }));
    setPreview(null);
    onReset?.({
      ...INITIAL_PHOTO_REVIEW_UPLOAD_STRUCTURE,
    });

    if (inputRef.current) inputRef.current.value = '';
    if (uploaderRef.current) uploaderRef.current = null;
  };

  useEffect(() => {
    if (!image) return;
    setPreview(image.url.toString());
    setStructure((prev) => ({
      ...prev,
      config: {
        ...image,
        clientname: undefined,
      },
      status: EnumPhotoReviewUploadStatus.SUCCESS,
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
  };
};

export default usePhotoReviewUpload;
