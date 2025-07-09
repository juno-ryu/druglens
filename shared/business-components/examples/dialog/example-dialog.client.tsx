'use client';

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Typography, Stack } from '@/core/design-systems';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

type ExampleDialogClientProps = {
  actionType: string;
  selectedIds: UUIDAsString[];
  onClose: () => void;
};

const ExampleDialogClient = (props: ExampleDialogClientProps) => {
  const { actionType, selectedIds, onClose } = props;

  const handleConfirm = () => {
    console.log(`Action: ${actionType}, Selected IDs: ${selectedIds}`);
    // 여기에 실제 비즈니스 로직 (예: API 호출)을 추가합니다.
    onClose();
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle>
        <Typography variant="title/title4" fontWeight={700}>
          예시 다이얼로그 - {actionType}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <Typography variant="body/body5">
            선택된 항목 {selectedIds.length}개에 대해 '{actionType}' 작업을 수행하시겠습니까?
          </Typography>
          {/* 추가적인 다이얼로그 내용이나 폼을 여기에 추가할 수 있습니다. */}
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: '20px 24px' }}>
        <Button variant="outlined" color="augment/gray/600" onClick={onClose}>
          취소
        </Button>
        <Button variant="contained" color="augment/purple/600" onClick={handleConfirm}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExampleDialogClient;
