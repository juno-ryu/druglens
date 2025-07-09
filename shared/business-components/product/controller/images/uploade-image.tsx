import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button, DesignIcon, Stack, Typography } from '@/core/design-systems';
import { Uploader } from '@/core/utils/helpers/uploader';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import { defaultFileConfig } from '@/shared/business-components/product/controller/assets/assets.const';
import { FileConfig, FileStatus } from '@/shared/business-components/product/controller/assets/assets.type';
import { ProductFormValues, ProductImageCombined } from '@/shared/business-components/product/product.type';

type UploadeImageProps = {
  isMain: boolean;
  url?: string;
};

const UploadeImage = (props: UploadeImageProps) => {
  const { isMain } = props;
  const { getValues, setValue } = useFormContext<ProductFormValues>();
  const fileRef = useRef<HTMLInputElement>(null);
  const uploaderRef = useRef<Uploader | null>(null);

  const [fileInputKey, setFileInputKey] = useState(0);

  const [preview, setPreview] = useState<string | null>(null);
  const [fileConfig, setFileConfig] = useState<FileConfig>(defaultFileConfig);
  const [fileStatus, setFileStatus] = useState<FileStatus>(null);

  const getFileResult = async (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        resolve(fr.result);
      };
    });
  };

  const getFileSize = async (blob: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const imgTag = document.createElement('img');
      imgTag.src = blob;
      imgTag.onload = function () {
        resolve({
          width: imgTag.width,
          height: imgTag.height,
        });
      };
    });
  };

  const handleOnChangeFile = async () => {
    if (!fileRef.current?.files?.length) return;

    const inputFile = fileRef.current.files[0];
    const fileSize = inputFile.size;
    const clientname = inputFile.name;
    const isMultipart = Boolean(fileSize / (1024 * 1024) >= 5);

    setFileStatus('inprogress');

    try {
      let fileKey;
      const result = (await getFileResult(inputFile)) as string;
      // todo. check file size
      const { width, height } = await getFileSize(result as string);

      if (isMultipart) {
        fileKey = await handleMultipartUpload(inputFile);
      } else {
        fileKey = await handleSingleUpload(inputFile);
      }

      await handleOnCompleteUpload({ clientname, size: fileSize, fileKey, id: null, mime: null });

      setPreview(result);
    } catch (e) {
      setFileConfig(defaultFileConfig);
      setFileStatus('fail');
      setPreview(null);
      throw new Error(`Failed file upload - ${e}`);
    }
  };

  const handleMultipartUpload = async (inputFile: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      uploaderRef.current = new Uploader({
        file: inputFile,
        initializeUploadFn: COMMON_APIS['multipart-upload/init'].post,
        completeUploadFn: COMMON_APIS['multipart-upload/complete'].post,
      });

      uploaderRef.current
        .onError((error) => reject(new Error(`Failed multipart upload - ${error}`)))
        .onComplete(() => {
          if (!uploaderRef.current?.fileKey) {
            reject(new Error('File key is null'));
          } else {
            resolve(uploaderRef.current.fileKey);
          }
        });

      uploaderRef.current.start();
    });
  };

  const handleSingleUpload = async (inputFile: File): Promise<string> => {
    const clientname = inputFile.name;
    const { data: presigned } = await COMMON_APIS['upload/presigned'].post(clientname);
    await COMMON_APIS['upload/presigned'].put(presigned.signedUrl, inputFile);
    if (!presigned.fileKey) {
      throw new Error('File key is undefined');
    }
    return presigned.fileKey;
  };

  const handleOnCompleteUpload = async (fileConfig: FileConfig) => {
    const { clientname, size: fileSize, fileKey } = fileConfig;
    if (!fileKey || !clientname) {
      throw new Error('File key or clientname is undefined');
    }

    setFileConfig(fileConfig);
    setFileStatus('success');

    // form update!!
    const existingImages = getValues('images') || [];
    // upload 및 update가 실행되는 시점엔 신규등록으로 보기에 mime, size, url, id는 null이다.
    const updateImage = { uploaded: { fileKey, clientname }, isMain, mime: null, size: null, url: null, id: null };

    let mainImage = existingImages.find((image) => image.isMain);
    let subImage = existingImages.find((image) => !image.isMain);

    if (isMain) {
      mainImage = updateImage;
    } else {
      subImage = updateImage;
    }
    const filtered = [mainImage, subImage].filter((image): image is ProductImageCombined => image !== undefined);
    setValue('images', filtered);
  };

  const handleOnResetFile = () => {
    // reset file state
    setFileConfig(defaultFileConfig);
    setFileStatus(null);
    setPreview(null);
    setFileInputKey((prev) => prev + 1);

    const existingImages = getValues('images') || [];
    const updatedImages = existingImages.filter((image) => image.isMain !== isMain);
    setValue('images', updatedImages);

    if (fileRef.current) fileRef.current.value = '';
    if (uploaderRef.current) uploaderRef.current = null;
  };

  const handleOnClickFile = () => {
    fileRef.current?.click();
  };

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e && e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files;
    if (files && fileRef && fileRef.current) {
      fileRef.current.files = files;
      handleOnChangeFile();
    }
  };

  useEffect(() => {
    const images = getValues('images');
    images.forEach((image) => {
      if (image.isMain === isMain) setPreview((image.url ?? '').toString());
    });
  }, []);

  return (
    <Fragment>
      {preview ? (
        <Stack direction="column" gap="8px">
          <img
            src={preview}
            alt="preview"
            style={{
              aspectRatio: '780 / 480',
              borderRadius: '8px',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
          <Button variant="outlined" size="large" onClick={handleOnResetFile}>
            다시 등록하기
          </Button>
        </Stack>
      ) : (
        <Stack
          onClick={handleOnClickFile}
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
          sx={(theme) => ({
            cursor: 'pointer',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            border: `2px dashed ${theme.palette['gray/dim/400']}`,
            width: '100%',
            height: '407px',
          })}
        >
          <input key={fileInputKey} ref={fileRef} draggable type="file" onChange={handleOnChangeFile} className="hidden" />
          <DesignIcon variant="Upload" mb="10px" />
          <Typography variant="body/body3" fontWeight={500} color="gray/800">
            <Typography variant="body/body3" fontWeight={500} color="purple/600" sx={{ textDecoration: 'underline', mr: '4px' }}>
              여기를 클릭하거나
            </Typography>
            파일을 드래그 앤 드랍하세요.
          </Typography>
          <Typography variant="body/body6" fontWeight={500} textAlign="center" color="gray/500" mt="8px">
            업로드 가능 조건은 jpg, png, jpeg 확장자,
            <br />
            1280*790 사이즈, 10MB 이하입니다.
          </Typography>
        </Stack>
      )}
    </Fragment>
  );
};

export default UploadeImage;
