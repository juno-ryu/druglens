import React from 'react';
import { useFormContext } from 'react-hook-form';
import { get } from 'lodash';
import { FormControlLabel, FormHelperText, Stack, Typography } from '@/core/design-systems';
import ControlledCheckbox from '@/core/shared/components/hook-form/controlled-checkbox/controlled-checkbox';
import { REGION_OPTIONS } from '@/shared/business-components/promotions/promotions.const';

type ExposureMallProps = {
  disabled: boolean;
};
const ExposureMallClient = (props: ExposureMallProps) => {
  const { disabled } = props;
  const formContext = useFormContext();
  return (
    <Stack direction="column" gap="12px">
      <Typography variant="body/body5" color="gray/600" fontWeight={600}>
        노출 몰
      </Typography>
      <Stack direction="row" gap="16px">
        {REGION_OPTIONS.map((region) => {
          return (
            <FormControlLabel
              label={region.label}
              key={`exposure-mall-${region.value}`}
              disabled={disabled}
              control={<ControlledCheckbox name="regions" color="augment/purple/600" control={formContext.control} value={region.value} />}
              slotProps={{ typography: { marginLeft: '4px' } }}
            />
          );
        })}
      </Stack>
      <FormHelperText error={true} sx={{ width: 240 }}>
        {(get(formContext?.formState?.errors, 'regions')?.message as string) ?? ''}
      </FormHelperText>
    </Stack>
  );
};

export default ExposureMallClient;
