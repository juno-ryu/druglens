'use client';

import { forwardRef } from 'react';
import { Tab as MuiTab } from '@mui/material';
import { TabComponent, TabProps } from '@/core/design-systems/components/tab';

// do: ref, component, children
// do-not: (empty)
const Tab = forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiTab tabIndex={0} ref={ref} {...restProps}>
      {children}
    </MuiTab>
  );
});

Tab.displayName = 'Tab';

export default Tab as TabComponent;
