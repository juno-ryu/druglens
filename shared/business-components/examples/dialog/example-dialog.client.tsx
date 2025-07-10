'use client';

import React from 'react';

import { Button, Stack, Typography } from '@/core/design-systems';
import SnackbarError from '@/core/shared/components/overlay/snackbar-error/snackbar-error';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useSnackbar } from 'notistack';

type ExampleDialogClientProps = {
  actionType: string;
  selectedIds: UUIDAsString[];
  onClose: () => void;
};

const ExampleDialogClient = (props: ExampleDialogClientProps) => {
  const { actionType, selectedIds, onClose } = props;

  const { enqueueSnackbar } = useSnackbar();

  const handleConfirm = async () => {
    try {
      enqueueSnackbar(`Action: ${actionType}, Selected IDs: ${selectedIds}`, {
        variant: 'success',
        mode: 'dark',
      });
    } catch (error) {
      enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
    } finally {
      onClose();
    }
  };
  return (
    <Stack p="24px" minWidth="368px">
      <Typography variant="body/body1" fontWeight={700}>
        예시 다이얼로그 - {actionType}
      </Typography>
      <Stack gap={2}>
        <Typography variant="body/body5">
          선택된 항목 {selectedIds.length}개에 대해 '{actionType}' 작업을 수행하시겠습니까?
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} mt="24px">
        <Button variant="outlined" color="augment/gray/800" size="extraLarge" fullWidth onClick={onClose}>
          돌아가기
        </Button>
        <Button variant="contained" color="augment/purple/600" size="extraLarge" fullWidth onClick={handleConfirm}>
          완료
        </Button>
      </Stack>
    </Stack>
  );
};

export default ExampleDialogClient;
