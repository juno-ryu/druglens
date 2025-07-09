'use client';

import { Fragment } from 'react';
import { FieldValues } from 'react-hook-form';
import { Box, Button, DesignIcon, IconButton, LinearProgress, Stack, Typography } from '@/core/design-systems';
import { formatFileSize } from '@/core/utils/helpers/file';
import useThumbnailUpload from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload';
import { EnumThumbnailUploadStatus } from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.type';
import { ThumbnailUploadProps } from '@/core/shared/components/upload/thumbnail-upload/thumbnail-upload.type';

const ThumbnailUpload = <T extends FieldValues = FieldValues>(props: ThumbnailUploadProps<T>) => {
  const { name, required = false, multiple = false, draggable = true, disabled = false, uploadOptions, ...restProps } = props;

  const { inputRef, status, config, percentage, preview, onUploadReset, onUploadChange, onUploadDragOver, onUploadDrop } = useThumbnailUpload(uploadOptions);

  return (
    <Fragment>
      {config.clientname || config.id ? (
        <Stack direction="column" gap="20px">
          <LinearProgress color={status === EnumThumbnailUploadStatus.FAIL ? 'augment/red/500' : 'augment/primary/600'} variant="determinate" value={percentage} />
          {preview && (
            <Stack direction="column" gap="8px">
              <img
                src={preview.toString()}
                alt="preview"
                style={{
                  aspectRatio: '780 / 480',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
              />
              <Button variant="outlined" size="large" onClick={onUploadReset} disabled={disabled}>
                다시 등록하기
              </Button>
            </Stack>
          )}
        </Stack>
      ) : (
        <Stack
          component="label"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="400px"
          padding="25px 25px"
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
          <Stack direction="column" gap="10px">
            <DesignIcon variant="Upload" />
            <Typography component={Stack} flexDirection="row" flexWrap="wrap" gap="4px" variant="body/body3" fontWeight={500} color="gray/800">
              <Box color="primary/600" sx={{ textDecoration: 'underline' }}>
                여기를 클릭하거나
              </Box>
              <Box>파일을 드래그 앤 드랍하세요.</Box>
            </Typography>
            <Typography variant="body/body6" fontWeight={500} textAlign="center" color="gray/500" mt="8px">
              업로드 가능 조건은 jpg, png, jpeg 확장자,
              <br />
              1280*790 사이즈, 10MB 이하입니다.
            </Typography>
          </Stack>
        </Stack>
      )}
    </Fragment>
  );
};

export default ThumbnailUpload;
