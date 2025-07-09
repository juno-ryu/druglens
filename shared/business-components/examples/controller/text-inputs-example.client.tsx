'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Stack, Typography } from '@/core/design-systems';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import SectionTitleClient from '@/shared/business-components/examples/layout/section-title.client';

type TextInputsExampleProps = {};

const TextInputsExample = (props: TextInputsExampleProps) => {
  const {} = props;
  const { control } = useFormContext();

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient title="Text Inputs Example" description="Demonstrates ControlledTextField" />
      <Stack direction="column" gap="12px">
        <ControlledTextField
          name="textField1"
          control={control}
          variant="outlined"
          size="medium"
          label="Text Field 1"
          placeholder="Enter text here"
        />
        <ControlledTextField
          name="textField2"
          control={control}
          variant="filled"
          size="small"
          label="Text Field 2 (Optional)"
          placeholder="Optional text"
        />
      </Stack>
    </Stack>
  );
};

export default TextInputsExample;
