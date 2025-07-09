'use client';

import { forwardRef } from 'react';
import { InputAdornment as MuiInputAdornment } from '@mui/material';
import { InputAdornmentComponent, InputAdornmentProps } from '@/core/design-systems/components/input-adornment';

// do: ref, component, children
// do-not: (empty)
const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiInputAdornment ref={ref} {...restProps}>
      {children}
    </MuiInputAdornment>
  );
});

InputAdornment.displayName = 'InputAdornment';

export default InputAdornment as InputAdornmentComponent;
