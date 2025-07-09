'use client';

import { forwardRef } from 'react';
import { AlertTitle as MuiAlertTitle } from '@mui/material';
import { AlertTitleComponent, AlertTitleProps } from '@/core/design-systems/components/alert-title';

// do: ref, component, children
// do-not: (empty)
const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiAlertTitle ref={ref} {...restProps}>
      {children}
    </MuiAlertTitle>
  );
});

AlertTitle.displayName = 'AlertTitle';

export default AlertTitle as AlertTitleComponent;
