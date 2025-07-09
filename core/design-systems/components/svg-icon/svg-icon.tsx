'use client';

import { forwardRef } from 'react';
import { SvgIcon as MuiSvgIcon } from '@mui/material';
import { SvgIconComponent, SvgIconProps } from '@/core/design-systems/components/svg-icon';

// do: ref, children
// do-not: component
const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiSvgIcon ref={ref} {...restProps}>
      {children}
    </MuiSvgIcon>
  );
});

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon as SvgIconComponent;
