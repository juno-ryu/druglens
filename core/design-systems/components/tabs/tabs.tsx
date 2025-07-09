'use client';

import { forwardRef } from 'react';
import { Tabs as MuiTabs } from '@mui/material';
import { TabsComponent, TabsProps } from '@/core/design-systems/components/tabs/tabs.type';

// do: ref, component, children
// do-not: (empty)
const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiTabs ref={ref} {...restProps}>
      {children}
    </MuiTabs>
  );
});

Tabs.displayName = 'Tab';

export default Tabs as TabsComponent;
