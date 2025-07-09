'use client';

import React, { forwardRef } from 'react';
import { BottomNavigationAction as MuiBottomNavigationAction } from '@mui/material';
import { BottomNavigationActionComponent, BottomNavigationActionProps } from '@/core/design-systems/components/bottom-navigation-action/bottom-navigation-action.type';

const BottomNavigationAction = forwardRef<HTMLButtonElement, BottomNavigationActionProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiBottomNavigationAction ref={ref} {...restProps} />;
});

BottomNavigationAction.displayName = 'BottomNavigationAction';

export default BottomNavigationAction as BottomNavigationActionComponent;
