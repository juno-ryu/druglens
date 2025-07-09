'use client';

import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Paper from '@mui/material/Paper/Paper';
import { FormControlLabel, InputAdornment, Radio, RadioGroup, Stack, TextField, Typography } from '@/core/design-systems';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

export const ADULT_OPTIONS = [
  { value: false, label: '불필요' },
  { value: true, label: '필요' },
] as const;

type AdultClientProps = {
  disabled: boolean;
};
const AdultClient = (props: AdultClientProps) => {
  const { disabled } = props;
  const { control, setValue } = useFormContext<FormValues>();
  const watchedIsAdult = useWatch({ control, name: 'isAdult' });

  const hnadleOnChangeAdult = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isAdult = event.target.value === 'true' ? true : false;
    setValue('isAdult', isAdult);
  };

  return (
    <Stack direction="column" gap="12px">
      <Typography variant="body/body5" color="gray/600" fontWeight={600}>
        성인 인증
      </Typography>
      <RadioGroup value={watchedIsAdult} sx={{ ml: '10px', gap: '12px' }} onChange={hnadleOnChangeAdult}>
        {ADULT_OPTIONS.map((option, idx) => {
          return (
            <FormControlLabel
              key={`adult-${option.label}_${idx}`}
              value={option.value}
              control={<Radio color="augment/purple/600" />}
              disabled={disabled}
              label={
                <Typography variant="body/body3" color="gray/800" fontWeight={400}>
                  {option.label}
                </Typography>
              }
            />
          );
        })}
      </RadioGroup>
    </Stack>
  );
};

export default AdultClient;
