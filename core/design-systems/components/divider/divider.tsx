'use client';

import { forwardRef } from 'react';
import { Divider as MuiDivider } from '@mui/material';
import { DividerComponent, DividerProps } from '@/core/design-systems/components/divider';

// do: ref, component, children
// do-not: (empty)
const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiDivider ref={ref} {...restProps}>
      {children}
    </MuiDivider>
  );
});

Divider.displayName = 'Divider';

export default Divider as DividerComponent;
