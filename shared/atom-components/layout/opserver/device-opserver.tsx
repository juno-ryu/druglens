'use client';

import { Fragment, useEffect } from 'react';
import useResponsive from '@/core/shared/hooks/device/use-responsive/use-responsive';
import { useDeviceActions } from '@/shared/stores/layout/use-viewport/use-viewport.hook';

const LayoutDeviceOpserver = () => {
  const { currentDevice } = useResponsive();
  const deviceActions = useDeviceActions();

  useEffect(() => {
    deviceActions.initialize();
  }, []);

  useEffect(() => {
    if (!currentDevice) return;
    deviceActions.setDevice(currentDevice);
  }, [currentDevice]);

  return <Fragment />;
};

export default LayoutDeviceOpserver;
