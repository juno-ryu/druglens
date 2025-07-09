'use client';

import React, { forwardRef } from 'react';
import { Snackbar as MuiSnackbar } from '@mui/material';
import Box from '@/core/design-systems/components/box/box';
import { SnackbarComponent, SnackbarProps } from '@/core/design-systems/components/snackbar/snackbar.type';

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  const { iconVariant, message, key, persist, hideIconVariant, ...other } = props;
  const iconElement = (iconVariant[other?.variant || 'default'] || null) as React.ReactElement;
  return (
    <div ref={ref} key={key}>
      <MuiSnackbar
        open
        message={
          <Box component="div" display="flex" flexDirection="row" gap="10px" alignItems="center">
            {iconElement}
            {message}
          </Box>
        }
        {...other}
      />
    </div>
  );
});

Snackbar.displayName = 'Snackbar';

export default Snackbar as SnackbarComponent;
