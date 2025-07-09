'use client';

import { forwardRef } from 'react';
import { MenuList as MuiMenuList } from '@mui/material';
import { MenuListComponent, MenuListProps } from '@/core/design-systems/components/menu-list';

// do: ref, component, children
// do-not: (empty)
const MenuList = forwardRef<HTMLUListElement, MenuListProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiMenuList ref={ref} {...restProps}>
      {children}
    </MuiMenuList>
  );
});

MenuList.displayName = 'MenuList';

export default MenuList as MenuListComponent;
