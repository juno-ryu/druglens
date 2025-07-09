'use client';

import { Fragment } from 'react';
import { FieldValues } from 'react-hook-form';
import { Box, Button, DesignIcon, IconButton, LinearProgress, Loader, Stack, Typography } from '@/core/design-systems';
import { formatFileSize } from '@/core/utils/helpers/file';
import useAssetUpload from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload';
import { EnumAssetUploadStatus } from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload.type';
import { AssetUploadProps } from '@/core/shared/components/upload/asset-upload/asset-upload.type';

const AssetUpload = <T extends FieldValues = FieldValues>(props: AssetUploadProps<T>) => {
  const { name, required = false, multiple = false, draggable = true, disabled = false, uploadOptions, ...restProps } = props;

  const { inputRef, status, config, percentage, onUploadReset, onUploadChange, onUploadDownload, onUploadDragOver, onUploadDrop } = useAssetUpload(uploadOptions);

  return (
    <Fragment>
      {config.clientname ? (
        <Stack direction="column" gap="24px" padding="16px 0">
          <Stack direction="row" justifyContent="space-between" alignItems="center" gap="4px">
            <Stack flex="1 1 0px" direction="column" gap="4px">
              <Typography variant="body/body3" fontWeight={400} color="gray/800">
                {config.clientname}
              </Typography>
              <Typography variant="body/body5" fontWeight={400} color="gray/600">
                {[formatFileSize(config.size), status === EnumAssetUploadStatus.FAIL ? 'FAIL' : percentage === 100 ? 'SUCCESS' : ''].filter(Boolean).join(' • ')}
              </Typography>
              {status === EnumAssetUploadStatus.SUCCESS && (
                <Button
                  variant="contained"
                  size="small"
                  disabled={disabled}
                  sx={{ width: 'fit-content' }}
                  onClick={() => {
                    if (!config.assetId) return;
                    onUploadDownload(config.assetId);
                  }}
                >
                  다운로드
                </Button>
              )}
            </Stack>
            <IconButton disabled={disabled} onClick={onUploadReset} sx={{ width: '48px', height: '48px' }}>
              <DesignIcon variant="CloseBold" sx={{ '&&': { width: '24px', height: '24px' } }} />
            </IconButton>
          </Stack>
          <LinearProgress
            color={status === EnumAssetUploadStatus.FAIL ? 'augment/red/500' : 'augment/primary/600'}
            variant="determinate"
            value={percentage}
            // sx={{ opacity: percentage <= 0 ? '0' : '' }}
          />
        </Stack>
      ) : (
        <Stack
          component="label"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
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
          </Stack>
        </Stack>
      )}
    </Fragment>
  );
};

export default AssetUpload;
