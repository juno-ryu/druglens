'use client';

import { forwardRef } from 'react';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { CheckboxComponent, CheckboxProps } from '@/core/design-systems/components/checkbox';

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiCheckbox ref={ref} {...restProps} />;
});

Checkbox.displayName = 'Checkbox';

export default Checkbox as CheckboxComponent;
