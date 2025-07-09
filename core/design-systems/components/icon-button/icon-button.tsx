'use client';

import { forwardRef } from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import { IconButtonComponent, IconButtonProps } from '@/core/design-systems/components/icon-button';

// do: ref, component, children
// do-not: (empty)
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiIconButton ref={ref} {...restProps}>
      {children}
    </MuiIconButton>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton as IconButtonComponent;
