'use client';

import { forwardRef } from 'react';
import { FormControlLabel as MuiFormControlLabel } from '@mui/material';
import { FormControlLabelComponent, FormControlLabelProps } from '@/core/design-systems/components/form-control-label';

// do: ref
// do-not: component, children
const FormControlLabel = forwardRef<HTMLLabelElement, FormControlLabelProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiFormControlLabel ref={ref} {...restProps} />;
});

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel as FormControlLabelComponent;
