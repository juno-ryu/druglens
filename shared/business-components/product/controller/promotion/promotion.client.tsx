'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Stack, Typography } from '@/core/design-systems';

const PromotionClient = () => {
  const { control } = useFormContext();

  return (
    <Stack direction="column" gap="20px">
      <Stack direction="column" gap="8px">
        <Typography variant="body/body3" fontWeight={700} color="gray/800">
          오픈런 프로모션
        </Typography>
        <Typography variant="body/body5" fontWeight={500} color="gray/600">
          신규 오픈 후 7일간 진행되는 프로모션입니다. 할인율은 1-2일 차 30%, 3-4일 차 20%, 5-7일 차 10%로 적용됩니다.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap="8px"
        sx={(theme) => ({
          background: theme.palette['primary/50'],
        })}
      >
        <div>ㅋ</div>
        <div>b</div>
      </Stack>
    </Stack>
  );
};

export default PromotionClient;
