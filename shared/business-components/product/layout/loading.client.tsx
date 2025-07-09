'use client';

import React from 'react';
import { Box, Loader, Stack } from '@/core/design-systems';
import { useStatusState } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.hook';

const LoadingClient = () => {
  const { loadingStatus } = useStatusState();
  if (loadingStatus) {
    return (
      <Stack
        sx={(theme) => ({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette['gray/dim/600'],
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Loader variant="circle" size={80} color="augment/purple/600" />
      </Stack>
    );
  }
  return null;
};

export default LoadingClient;
