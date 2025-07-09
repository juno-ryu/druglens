'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel, Stack, Typography } from '@/core/design-systems';

const IndustryClient = () => {
  const { control } = useFormContext();

  return (
    <Stack direction="column" gap="20px">
      <Stack direction="column" gap="8px">
        <Typography variant="body/body3" fontWeight={700} color="gray/800">
          사용 분야 설정
        </Typography>
        <Typography variant="body/body5" fontWeight={500} color="gray/600">
          사용 분야는 작업 시 목적에 맞는 사용처 뿐 아니라 기대되는 사용처도 선택 할 수 있습니다. 중복 선택 가능합니다.
        </Typography>
      </Stack>
      {/* <Stack direction="row" gap="16px">
        <FormControlLabel
          label="웹툰"
          control={<ControlledCheckbox name="industry" control={control} inputProps={{ 'aria-label': 'industry toon' }} size="small" value="toon" />}
          sx={{ paddingLeft: '10px' }}
          slotProps={{
            typography: {
              marginLeft: '4px',
            },
          }}
        />
        <FormControlLabel
          label="게임"
          control={<ControlledCheckbox name="industry" control={control} inputProps={{ 'aria-label': 'industry game' }} size="small" value="game" />}
          sx={{ paddingLeft: '10px' }}
          slotProps={{
            typography: {
              marginLeft: '4px',
            },
          }}
        />
      </Stack> */}
    </Stack>
  );
};

export default IndustryClient;
