'use client';

import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { MenuItem, Stack, TextField, Typography } from '@/core/design-systems';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

export const BURDEN_OPTIONS = [
  { value: 0, label: '0%' },
  { value: 0.1, label: '10%' },
  { value: 0.2, label: '20%' },
  { value: 0.3, label: '30%' },
  { value: 0.4, label: '40%' },
  { value: 0.5, label: '50%' },
  { value: 0.6, label: '60%' },
  { value: 0.7, label: '70%' },
  { value: 0.8, label: '80%' },
  { value: 0.9, label: '90%' },
  { value: 1, label: '100%' },
] as const;

type SellerCostBurdenProps = {
  disabled: boolean;
};
const SellerCostBurdenClient = (props: SellerCostBurdenProps) => {
  const { disabled } = props;
  const { control, setValue } = useFormContext<FormValues>();
  const watchedBurden = useWatch({ control, name: 'burdenRate' });

  const handleOnChangeBurden = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('burdenRate', Number(value));
  };

  return (
    <Stack direction="column" gap="12px">
      <Typography variant="body/body5" color="gray/600" fontWeight={600}>
        판매자 비용 부담
      </Typography>
      <TextField select disabled={disabled} variant="outlined" size="small" sx={{ width: '100px' }} hiddenLabel value={watchedBurden} onChange={handleOnChangeBurden}>
        {BURDEN_OPTIONS.map((option) => (
          <MenuItem key={`promotion-berden-${option.label}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};

export default SellerCostBurdenClient;
