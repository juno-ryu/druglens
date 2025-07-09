'use client';

import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Stack, Typography, TextField, MenuItem } from '@/core/design-systems';
import SectionTitleClient from '@/shared/business-components/examples/layout/section-title.client';

type SelectExampleProps = {};

const SelectExample = (props: SelectExampleProps) => {
  const {} = props;
  const { control, setValue } = useFormContext();
  const selectedOption = useWatch({ control, name: 'selectOption' });

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient title="Select Example" description="Demonstrates TextField with select and MenuItem" />
      <Stack direction="column" gap="12px">
        <TextField
          select
          variant="outlined"
          size="medium"
          label="Choose an Option"
          value={selectedOption || ''}
          onChange={(e) => setValue('selectOption', e.target.value)}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </TextField>
      </Stack>
    </Stack>
  );
};

export default SelectExample;
