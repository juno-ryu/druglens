'use client';

import React from 'react';
import { Alert, DesignIcon, Stack, Typography } from '@/core/design-systems';
import UploadeImage from '@/shared/business-components/product/controller/images/uploade-image';

type ThumbnailClientProps = {};

const ThumbnailClient = (props: ThumbnailClientProps) => {
  const {} = props;
  return (
    <Stack direction="column" gap="20px">
      <Stack direction="column" gap="12px">
        <Stack direction="column" gap="8px">
          <Typography variant="body/body3" fontWeight={700} color="gray/800">
            썸네일
          </Typography>
          <Typography variant="body/body5" fontWeight={500} color="gray/600">
            구매 작가의 눈에 띌 수 있도록, 상품의 매력적인 이미지를 등록해 주세요. 보정 혹은 채색 이미지의 업로드를 추천 드립니다.
          </Typography>
        </Stack>
        <Alert color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%', borderRadius: '8px' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              썸네일 내 글자가 새겨져 있을 시 반려될 수 있습니다.
            </Typography>
          </Stack>
        </Alert>
      </Stack>

      <Stack direction="column" mt="28px" gap="24px">
        {/* left */}
        <Stack direction="column" gap="20px" width="100%">
          <Stack direction="column" gap="4px">
            <Typography variant="body/body4" fontWeight={600} color="gray/800">
              대표 이미지
            </Typography>
            <Typography variant="body/body5" fontWeight={500} color="gray/500">
              상품 리스트의 썸네일과 상세 페이지의 대표 이미지로 사용됩니다.
            </Typography>
          </Stack>
          <UploadeImage isMain={true} />
        </Stack>
        {/* right */}
        <Stack direction="column" gap="20px" width="100%">
          <Stack direction="column" gap="4px">
            <Typography variant="body/body4" fontWeight={600} color="gray/800">
              보조 이미지
            </Typography>
            <Typography variant="body/body5" fontWeight={500} color="gray/500">
              상품 리스트의 썸네일에 마우스 오버 시 보여집니다.
            </Typography>
          </Stack>
          <UploadeImage isMain={false} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ThumbnailClient;
