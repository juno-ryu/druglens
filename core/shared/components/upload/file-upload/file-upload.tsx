'use client';

import { Fragment } from 'react';
import { FieldValues } from 'react-hook-form';
import { Box, DesignIcon, IconButton, LinearProgress, Stack, Typography } from '@/core/design-systems';
import { formatFileSize } from '@/core/utils/helpers/file';
import useFileUpload from '@/core/shared/hooks/upload/use-file-upload/use-file-upload';
import { EnumFileUploadStatus } from '@/core/shared/hooks/upload/use-file-upload/use-file-upload.type';
import { FileUploadProps } from '@/core/shared/components/upload/file-upload/file-upload.type';

const FileUpload = <T extends FieldValues = FieldValues>(props: FileUploadProps<T>) => {
  const { name, required = false, disabled = false, multiple = false, draggable = true, uploadOptions, ...restProps } = props;

  const { inputRef, status, config, percentage, onUploadReset, onUploadChange, onUploadDragOver, onUploadDrop, onUploadDownload } = useFileUpload(uploadOptions);

  const onDownload = () => {
    if (!config.id) return;
    onUploadDownload(config.id);
  };

  return (
    <Fragment>
      <input
        ref={inputRef}
        type="file"
        id={`${name}File`}
        name={`${name}File`}
        required={required}
        disabled={disabled}
        multiple={multiple}
        accept={uploadOptions?.accept ? uploadOptions.accept.join(', ') : undefined}
        draggable={draggable}
        onChange={onUploadChange}
        className="sr-only"
        {...restProps}
      />
      {config.clientname ? (
        <Stack direction="column" gap="24px" padding="16px 0">
          <Stack direction="row" justifyContent="space-between" alignItems="center" gap="4px">
            <Stack component="button" type="button" flex="1 1 0px" direction="column" gap="4px" textAlign="left" onClick={onDownload}>
              <Typography variant="body/body3" fontWeight={400} color={!disabled ? 'gray/800' : 'gray/200'}>
                {config.clientname}
              </Typography>
              <Typography variant="body/body5" fontWeight={400} color={!disabled ? 'gray/600' : 'gray/200'}>
                {[formatFileSize(config.size), status === EnumFileUploadStatus.FAIL ? 'FAIL' : percentage === 100 ? 'SUCCESS' : ''].filter(Boolean).join(' • ')}
              </Typography>
            </Stack>
            <IconButton disabled={disabled} onClick={onUploadReset} sx={{ width: '48px', height: '48px' }}>
              <DesignIcon variant="CloseBold" sx={{ '&&': { width: '24px', height: '24px' } }} />
            </IconButton>
          </Stack>
          <LinearProgress
            color={status === EnumFileUploadStatus.FAIL ? 'augment/red/500' : 'augment/purple/600'}
            variant="determinate"
            value={percentage}
            sx={{ opacity: percentage <= 0 ? 0 : disabled ? 0.2 : '' }}
          />
        </Stack>
      ) : (
        <Stack
          component="label"
          htmlFor={`${name}File`}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          padding="25px 25px"
          border="2px dashed"
          borderColor={!disabled ? 'gray/dim/400' : 'gray/dim/200'}
          borderRadius="8px"
          onDragOver={onUploadDragOver}
          onDrop={onUploadDrop}
        >
          <Stack direction="column" gap="10px">
            <DesignIcon variant="Upload" color={!disabled ? 'gray/800' : 'gray/200'} />
            <Typography
              component={Stack}
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              gap="4px"
              variant="body/body3"
              fontWeight={500}
              color={!disabled ? 'gray/800' : 'gray/200'}
            >
              <Box color={!disabled ? 'primary/600' : 'gray/200'} sx={{ textDecoration: 'underline' }}>
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

export default FileUpload;
