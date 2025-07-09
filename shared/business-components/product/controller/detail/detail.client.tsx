'use client';

import React from 'react';
import { Alert, DesignIcon, Stack, Typography } from '@/core/design-systems';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import DetailEditor from '@/shared/business-components/product/controller/detail/detail-editor';
import SectionTitleClient from '@/shared/business-components/product/layout/section-title.client';

interface DetailClientProps {
  lang: EnumLanguageCode;
  isOrigin: boolean;
}

const DetailClient = (props: DetailClientProps) => {
  const { lang, isOrigin } = props;

  return (
    <Stack direction="column" gap="20px">
      <Stack direction="column" gap="12px">
        <SectionTitleClient title="상품 상세 설명" />
        <Alert color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%', borderRadius: '8px' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              본문 내 개인 연락처 및 외부 페이지 URL노출, 텀블벅 관련 용어 사용이 불가합니다. 해당 내용이 포함된 경우, 검토 중 임의 변경・삭제 및 반려될 수 있습니다.
            </Typography>
          </Stack>
        </Alert>
      </Stack>
      <Stack direction="column" gap="32px">
        <DetailEditor title="상품소개" isHeader lang={lang} isOrigin={isOrigin} />
        <DetailEditor title="상품 내용" lang={lang} isOrigin={isOrigin} />
      </Stack>
    </Stack>
  );
};

export default DetailClient;
