'use client';

import React, { forwardRef } from 'react';
import { BottomNavigation as MuiBottomNavigation } from '@mui/material';
import { BottomNavigationComponent, BottomNavigationProps } from '@/core/design-systems/components/bottom-navigation/bottom-navigation.type';

const BottomNavigation = forwardRef<HTMLDivElement, BottomNavigationProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiBottomNavigation ref={ref} {...restProps} />;
});

BottomNavigation.displayName = 'BottomNavigation';

export default BottomNavigation as BottomNavigationComponent;
