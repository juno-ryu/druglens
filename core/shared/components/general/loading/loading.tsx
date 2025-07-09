'use client';

import React from 'react';
import { Box, Loader, Stack } from '@/core/design-systems';

type LoadingProps = {
  isLoading: boolean;
};

const Loading = (props: LoadingProps) => {
  const { isLoading } = props;
  if (isLoading) {
    return (
      <Stack
        sx={(theme) => ({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette['gray/dim/600'],
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Loader variant="circle" size={80} color="augment/primary/600" />
      </Stack>
    );
  }
  return null;
};

export default Loading;
