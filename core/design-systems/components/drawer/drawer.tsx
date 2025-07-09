'use client';

import { forwardRef } from 'react';
import { Drawer as MuiDrawer } from '@mui/material';
import { DrawerComponent, DrawerProps } from '@/core/design-systems/components/drawer/drawer.type';

// do: ref
// do-not: component, children
const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiDrawer ref={ref} {...restProps} />;
});

Drawer.displayName = 'Drawer';

export default Drawer as DrawerComponent;
