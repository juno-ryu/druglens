'use client';

import React, { useEffect } from 'react';
import { ISODateString } from 'next-auth';
import { Paper } from '@mui/material';
import { Box, Button, DesignIcon, Stack, Typography } from '@/core/design-systems';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { TypeDialogStructure } from '@/shared/stores/layout/use-overlay/use-overlay.type';
import { useAlignSectionActions } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.hook';
import { ButtonProps } from '@/core/design-systems/components/button';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';
import ConditionalDialogClient from '@/shared/business-components/product/dialog/conditional-dialog.client';
import { ChangeProductStatus } from '@/shared/business-components/product/product.type';

type FooterClientProps = {
  status: ProductRevisionStatus;
  version?: number;
  suspendedAt?: Nullable<ISODateString>;
};

const FooterClient = (props: FooterClientProps) => {
  const { status, version, suspendedAt } = props;
  const { onOpen, onClose } = useDialog();
  const { alignSectionActions } = useAlignSectionActions();
  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; productId: string; comparisonId: string }>();
  const { comparisonId } = params;

  const handleOnChangeStatus = (type: ChangeProductStatus) => {
    const dialogKey = `dialog-${type}` as TypeDialogStructure['key'];
    onOpen({
      key: dialogKey,
      onClose: () => onClose(dialogKey),
      slotProps: { paper: { sx: { borderRadius: '8px' } } },
      children: <ConditionalDialogClient type={type} onClose={() => onClose(dialogKey)} />,
    });
  };

  const hadndleOnAlign = () => {
    alignSectionActions.applyMaxHeight();
  };

  const renderActionButtons = () => {
    const buttons: React.ReactNode[] = [];

    const pushButton = (label: string, variant: ButtonProps['variant'], color: TypeAugmentColorPalette, onClick: () => void) => {
      buttons.push(
        <Button key={label} size="extraLarge" variant={variant} color={color} sx={{ '&&': { minWidth: '120px' }, px: '16px' }} onClick={onClick}>
          {label}
        </Button>,
      );
    };

    if ([ProductRevisionStatus.REQUEST].includes(status)) {
      pushButton('반려', 'outlined', 'augment/red/500', () => handleOnChangeStatus(ChangeProductStatus.REJECT_REVIEW));
      if (version === 1) {
        pushButton('거절', 'outlined', 'augment/red/500', () => handleOnChangeStatus(ChangeProductStatus.DENIED_REVIEW));
      }
      pushButton('검토 시작', 'contained', 'augment/purple/600', () => handleOnChangeStatus(ChangeProductStatus.START_REVIEW));
    } else if ([ProductRevisionStatus.IN_PROGRESS].includes(status)) {
      pushButton('반려', 'outlined', 'augment/red/500', () => handleOnChangeStatus(ChangeProductStatus.REJECT_REVIEW));
      if (version === 1) {
        pushButton('거절', 'outlined', 'augment/red/500', () => handleOnChangeStatus(ChangeProductStatus.DENIED_REVIEW));
      }
      pushButton('검토 완료', 'contained', 'augment/purple/600', () => handleOnChangeStatus(ChangeProductStatus.APPROVE_REVIEW));
    } else if ([ProductRevisionStatus.APPROVE].includes(status)) {
      pushButton(suspendedAt ? '판매 재개' : '판매 중지', 'outlined', 'augment/purple/600', () =>
        handleOnChangeStatus(suspendedAt ? ChangeProductStatus.RESUME : ChangeProductStatus.SUSPEND),
      );
    }

    return (
      <Stack direction="row" gap="10px">
        {buttons}
      </Stack>
    );
  };

  useEffect(() => {
    /** @use 버전비교 페이지 로드 시 정렬 시킨다. */
    if (comparisonId) hadndleOnAlign();
  }, [comparisonId]);

  return (
    <Box sx={{ display: status === ProductRevisionStatus.APPROVE ? 'block' : 'block' }}>
      <Paper sx={{ position: 'fixed', bottom: '0', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2 }} elevation={16}>
        <Stack direction="row" justifyContent="space-between" gap="10px" sx={{ background: 'white', width: '100%', p: '12px var(--layout-guard-workspace-content-side)' }}>
          <Button
            variant="outlined"
            color="augment/purple/600"
            size="extraLarge"
            sx={{ px: '16px' }}
            startIcon={<DesignIcon variant="CaretSortingDown" />}
            onClick={hadndleOnAlign}
          >
            <Typography variant="body/body4" fontWeight={700} color="inherit">
              정렬
            </Typography>
          </Button>
          <Stack direction="row" gap="10px">
            {renderActionButtons()}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default FooterClient;
