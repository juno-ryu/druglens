'use client';

import { forwardRef } from 'react';
import { Menu as MuiMenu } from '@mui/material';
import { MenuComponent, MenuProps } from '@/core/design-systems/components/menu';

// do: ref, children
// do-not: component
const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiMenu ref={ref} {...restProps}>
      {children}
    </MuiMenu>
  );
});

Menu.displayName = 'Menu';

export default Menu as MenuComponent;
