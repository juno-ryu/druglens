'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Stack, Typography, FormControlLabel } from '@/core/design-systems';
import ControlledSwitch from '@/core/shared/components/hook-form/controlled-switch/controlled-switch';
import ControlledCheckbox from '@/core/shared/components/hook-form/controlled-checkbox/controlled-checkbox';
import SectionTitleClient from '@/shared/business-components/examples/layout/section-title.client';

type SwitchesAndCheckboxesExampleProps = {};

const SwitchesAndCheckboxesExample = (props: SwitchesAndCheckboxesExampleProps) => {
  const {} = props;
  const { control } = useFormContext();

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient title="Switches and Checkboxes Example" description="Demonstrates ControlledSwitch and ControlledCheckbox" />
      <Stack direction="column" gap="12px">
        <FormControlLabel
          control={<ControlledSwitch name="enableFeature" control={control} size="small" color="primary/600" />}
          label={
            <Typography variant="body/body5" color="gray/800">
              Enable Feature
            </Typography>
          }
        />
        <FormControlLabel
          control={<ControlledCheckbox name="agreeTerms" control={control} size="small" color="primary/600" />}
          label={
            <Typography variant="body/body5" color="gray/800">
              Agree to Terms and Conditions
            </Typography>
          }
        />
        <FormControlLabel
          control={<ControlledCheckbox name="subscribeNewsletter" control={control} size="small" color="primary/600" />}
          label={
            <Typography variant="body/body5" color="gray/800">
              Subscribe to Newsletter
            </Typography>
          }
        />
      </Stack>
    </Stack>
  );
};

export default SwitchesAndCheckboxesExample;
