'use client';

import React, { Fragment } from 'react';
import { FieldValues } from 'react-hook-form';
import { Button, customColorPalette, DesignIcon, Stack } from '@/core/design-systems';
import usePhotoReviewUpload from '@/core/shared/hooks/upload/use-photo-review-upload/use-photo-review-upload';
import { EnumPhotoReviewUploadStatus } from '@/core/shared/hooks/upload/use-photo-review-upload/use-photo-review-upload.type';
import { PhotoReviewUploadProps } from '@/core/shared/components/upload/photo-review-upload/photo-review-upload.type';

const PhotoReviewUpload = <T extends FieldValues = FieldValues>(props: PhotoReviewUploadProps<T>) => {
  const { name, required = false, multiple = false, draggable = true, disabled = false, uploadOptions, ...restProps } = props;

  const photoReviewUploadStatus = usePhotoReviewUpload(uploadOptions);

  const { inputRef, status, config, preview, onUploadReset, onUploadChange, onUploadDragOver, onUploadDrop } = photoReviewUploadStatus;

  return (
    <Fragment>
      {status === EnumPhotoReviewUploadStatus.INPROGRESS ? (
        <Stack direction="column" width={'72px'} height={'72px'} borderRadius="8px" position={'relative'}>
          <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Button variant={'text'} loading={true} disabled={true} />
          </Stack>
        </Stack>
      ) : !config ? (
        <Stack
          component="label"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={'72px'}
          height={'72px'}
          border="2px dashed"
          borderColor="gray/dim/400"
          borderRadius="8px"
          onDragOver={onUploadDragOver}
          onDrop={onUploadDrop}
        >
          <input
            ref={inputRef}
            type="file"
            id={`${name}File`}
            name={`${name}File`}
            required={required}
            multiple={multiple}
            accept={uploadOptions?.accept ? uploadOptions.accept.join(', ') : undefined}
            draggable={draggable}
            onChange={onUploadChange}
            className="sr-only"
            {...restProps}
          />
          <Button
            variant={'text'}
            sx={{
              pointerEvents: 'none',
            }}
          >
            <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
              <DesignIcon variant={'Camera'} color={'gray/600'} />
            </Stack>
          </Button>
        </Stack>
      ) : (
        <Stack direction="column" width={'72px'} height={'72px'} borderRadius="8px" position={'relative'}>
          {preview && !uploadOptions.isUploadOnly ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview.toString()}
                alt="preview"
                style={{
                  aspectRatio: '1',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
              />
              <Stack
                position={'absolute'}
                bottom={0}
                right={0}
                width={'24px'}
                height={'24px'}
                borderRadius={'12px'}
                sx={{
                  backgroundColor: customColorPalette['gray/dim/500'],
                }}
              >
                <Button variant={'text'} onClick={onUploadReset}>
                  <DesignIcon variant={'CloseBold'} color={'white'} />
                </Button>
              </Stack>
            </>
          ) : (
            <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
              <Button variant={'text'} loading={true} disabled={true} />
            </Stack>
          )}
        </Stack>
      )}
    </Fragment>
  );
};

export default PhotoReviewUpload;
