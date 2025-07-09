'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Alert, AlertTitle, DesignIcon, FormControlLabel, Stack, Typography } from '@/core/design-systems';
import ControlledSwitch from '@/core/shared/components/hook-form/controlled-switch/controlled-switch';
import SectionTitleClient from '@/shared/business-components/product/layout/section-title.client';

type AdultClientProps = {};

const AdultClient = (props: AdultClientProps) => {
  const {} = props;
  const { control } = useFormContext();

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient title="성인상품 설정" />
      <Stack direction="column" gap="20px">
        <Alert key="red/500" color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%' }} size="large">
          <AlertTitle>에이콘 성인 상품 가이드라인을 참고해 주세요. 가이드라인에 어긋날 경우 반려될 수 있습니다.</AlertTitle>
        </Alert>
        <Stack display="block">
          <FormControlLabel
            control={<ControlledSwitch name="isAdult" control={control} size="small" sx={{ marginLeft: '10px' }} color="primary/600" />}
            label={
              <Typography variant="body/body5" color="gray/800">
                19+
              </Typography>
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AdultClient;
