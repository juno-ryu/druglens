import React from 'react';
import { Paper } from '@mui/material';
import { DesignLabel, Stack, Typography } from '@/core/design-systems';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { getExposureStatusLabel, getPublishStatusLabel, getRevisionStatusLabel } from '@/shared/business-components/product/product.const';

type HeaderClientProps = Pick<AssetProductOutput, 'id' | 'title' | 'status' | 'brand' | 'suspendedAt' | 'publishedAt' | 'exposedAt'>;

const HeaderServer = (props: HeaderClientProps) => {
  const { id, title, status, brand, suspendedAt, publishedAt, exposedAt } = props;

  const publishedStatus = getPublishStatusLabel(suspendedAt, publishedAt);
  const exposureStatus = getExposureStatusLabel(suspendedAt, exposedAt);
  const statusLabel = getRevisionStatusLabel(status, suspendedAt, publishedAt);

  return (
    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" gap="48px">
      <Stack direction="row" gap="8px">
        <Typography variant="title/title3" fontWeight={800}>
          {title}
        </Typography>
        <Typography variant="title/title3" fontWeight={800}>
          /
        </Typography>
        <Typography variant="title/title3" fontWeight={500} color="gray/500">
          {id}
        </Typography>
      </Stack>
      <Paper elevation={4} sx={{ width: '100%', padding: '30px 20px' }}>
        <Stack width="100%" direction="column" gap="20px">
          <Typography variant="body/body3" fontWeight={700}>
            상품 정보
          </Typography>
          <Stack direction="row" gap="20px" justifyContent="flex-start" alignItems="center">
            <Typography variant="body/body5" fontWeight={600} width="100px">
              등록 여부
            </Typography>
            <DesignLabel variant={'filled'} color={exposureStatus.color}>
              {publishedStatus.label}
            </DesignLabel>
          </Stack>
          <Stack direction="row" gap="20px" justifyContent="flex-start" alignItems="center">
            <Typography variant="body/body5" fontWeight={600} width="100px">
              상품 상태
            </Typography>
            <DesignLabel variant={'filled'} color={statusLabel.color}>
              {statusLabel.label}
            </DesignLabel>
          </Stack>
          <Stack direction="row" gap="20px" justifyContent="flex-start" alignItems="center">
            <Typography variant="body/body5" fontWeight={600} width="100px">
              노출 여부
            </Typography>
            <DesignLabel variant={'filled'} color={exposureStatus.color}>
              {exposureStatus.label}
            </DesignLabel>
          </Stack>
          <Stack direction="row" gap="20px" justifyContent="flex-start" alignItems="center">
            <Typography variant="body/body5" fontWeight={600} width="100px">
              브랜드
            </Typography>
            <Typography variant="body/body5" fontWeight={500}>
              {brand?.name}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default HeaderServer;
