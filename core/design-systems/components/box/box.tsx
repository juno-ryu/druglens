'use client';

import { forwardRef } from 'react';
import { Box as MuiBox } from '@mui/material';
import { BoxComponent, BoxProps } from '@/core/design-systems/components/box';

// do: ref, component, children
// do-not: (empty)
const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, classes, className = '', ...restProps } = props;

  return (
    <MuiBox ref={ref} className={`${classes?.root ?? ''} ${className}`} {...restProps}>
      {children}
    </MuiBox>
  );
});

Box.displayName = 'Box';

export default Box as BoxComponent;
