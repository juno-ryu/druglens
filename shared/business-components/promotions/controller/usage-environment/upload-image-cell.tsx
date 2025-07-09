'use client';

import React, { Fragment, useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { GridRenderEditCellParams } from '@mui/x-data-grid-pro';
import { Button, LinearProgress, Stack, Typography } from '@/core/design-systems';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import useThumbnailUpload from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload';
import {
  EnumThumbnailUploadStatus,
  TypeThumbnailUploadOptions,
  TypeThumbnailUploadStructure,
} from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.type';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import { DeviceType } from '@/core/shared/service/enum/device-type';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { ImageInput } from '@/core/shared/service/input/promotion-input/image-input';
import { ThumbnailUploadProps } from '@/core/shared/components/upload/thumbnail-upload/thumbnail-upload.type';
import UploadImageDialog from '@/shared/business-components/promotions/dialog/upload-image.dialog';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

interface UploadThumbnailCellProps<T extends FieldValues = object> extends React.HTMLProps<HTMLInputElement> {
  name: FieldPath<T>;
  uploadOptions: TypeThumbnailUploadOptions & {
    onModify?: () => void;
  };
  disabled?: boolean;
}

const UploadThumbnaleCell = <T extends FieldValues = FieldValues>(props: UploadThumbnailCellProps<T>) => {
  const { name, required = false, multiple = false, draggable = true, disabled = false, uploadOptions, ...restProps } = props;

  const { inputRef, config, onUploadReset, onUploadDrop, onUploadDragOver, onUploadChange } = useThumbnailUpload(uploadOptions);

  const handleOnModifyDialog = () => {
    uploadOptions.onModify?.();
  };
  return (
    <Stack width="100%" height="100%" alignItems="center" justifyContent="center">
      {config.clientname && (
        <Stack direction="column" gap="20px">
          <Stack direction="column" gap="8px" justifyContent="center" alignItems="center">
            <Typography variant="body/body5" fontWeight={400}>
              {config.clientname}
            </Typography>
            <Stack direction="row" gap="8px">
              <Button
                variant="contained"
                size="medium"
                color="augment/gray/200"
                sx={{ px: '12px' }}
                onClick={() => {
                  // inputRef.current?.click();
                  handleOnModifyDialog();
                }}
              >
                수정
              </Button>
              <Button variant="contained" size="medium" color="augment/red/600" sx={{ px: '12px' }} onClick={onUploadReset}>
                삭제
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
      <Stack
        component="label"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="30px"
        padding="25px 25px"
        border="2px dashed"
        borderColor="gray/dim/400"
        borderRadius="8px"
        display={config.clientname ? 'none' : 'flex'}
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
        <Stack direction="column" gap="10px">
          <Typography variant="body/body6" fontWeight={500} textAlign="center" color="gray/500">
            업로드 가능 조건은 jpg, png, jpeg, webp 확장자 입니다.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UploadThumbnaleCell;
