'use client';

import { forwardRef } from 'react';
import { Switch as MuiSwitch } from '@mui/material';
import { SwitchComponent, SwitchProps } from '@/core/design-systems/components/switch';

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiSwitch ref={ref} {...restProps} />;
});

Switch.displayName = 'Switch';

export default Switch as SwitchComponent;
