'use client';

import { forwardRef } from 'react';
import { Typography as MuiTypography } from '@mui/material';
import { TypographyComponent, TypographyProps } from '@/core/design-systems/components/typography';

// do: ref, component, children
// do-not: (empty)
const Typography = forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiTypography ref={ref} {...restProps}>
      {children}
    </MuiTypography>
  );
});

Typography.displayName = 'Typography';

export default Typography as TypographyComponent;
