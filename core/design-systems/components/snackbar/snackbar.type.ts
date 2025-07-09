import React from 'react';
import { Components, SnackbarProps as MuiSnackbarProps, Theme } from '@mui/material';
import { CustomContentProps } from 'notistack';

export type SnackbarProps = MuiSnackbarProps &
  CustomContentProps & {
    mode?: 'dark' | 'light';
  };

export type SnackbarComponent = React.ComponentType<SnackbarProps>;

export type SnackbarOverride = Components<Theme>['MuiSnackbar'] & {
  defaultProps: Partial<SnackbarProps>;
};
