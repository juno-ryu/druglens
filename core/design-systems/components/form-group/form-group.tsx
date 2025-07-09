'use client';

import { forwardRef } from 'react';
import { FormGroup as MuiFormGroup } from '@mui/material';
import { FormGroupComponent, FormGroupProps } from '@/core/design-systems/components/form-group';

// do: ref, children
// do-not: component
const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiFormGroup ref={ref} {...restProps}>
      {children}
    </MuiFormGroup>
  );
});

FormGroup.displayName = 'FormGroup';

export default FormGroup as FormGroupComponent;
