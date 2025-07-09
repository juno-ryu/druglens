'use client';

import { forwardRef } from 'react';
import { InputLabel as MuiInputLabel } from '@mui/material';
import { InputLabelComponent, InputLabelProps } from '@/core/design-systems/components/input-label';

// do: ref, component, children
// do-not: (empty)
const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiInputLabel ref={ref} {...restProps}>
      {children}
    </MuiInputLabel>
  );
});

InputLabel.displayName = 'InputLabel';

export default InputLabel as InputLabelComponent;
