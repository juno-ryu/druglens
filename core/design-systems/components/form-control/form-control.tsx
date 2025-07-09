'use client';

import { forwardRef } from 'react';
import { FormControl as MuiFormControl } from '@mui/material';
import { FormControlComponent, FormControlProps } from '@/core/design-systems/components/form-control';

// do: ref, component, children
// do-not: (empty)
const FormControl = forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiFormControl ref={ref} {...restProps}>
      {children}
    </MuiFormControl>
  );
});

FormControl.displayName = 'FormControl';

export default FormControl as FormControlComponent;
