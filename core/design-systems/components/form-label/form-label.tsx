'use client';

import { forwardRef } from 'react';
import { FormLabel as MuiFormLabel } from '@mui/material';
import { FormLabelComponent, FormLabelProps } from '@/core/design-systems/components/form-label';

// do: ref, component, children
// do-not: (empty)
const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiFormLabel ref={ref} {...restProps}>
      {children}
    </MuiFormLabel>
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel as FormLabelComponent;
