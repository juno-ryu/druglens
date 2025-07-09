'use client';

import React from 'react';
import { SnackbarProvider } from 'notistack';
import { NotistackProviderProps } from '@/core/design-systems/providers/providers.type';
import DesignIcon from '@/core/design-systems/components/design-icon/design-icon';
import Snackbar from '@/core/design-systems/components/snackbar/snackbar';

const NotistackProvider = ({ children }: NotistackProviderProps) => {
  return (
    <SnackbarProvider
      maxSnack={20}
      Components={{
        success: Snackbar,
        default: Snackbar,
        error: Snackbar,
        warning: Snackbar,
        info: Snackbar,
      }}
      iconVariant={{
        success: <DesignIcon variant="Checkmark" />,
        error: <DesignIcon variant="NoticeOutline" />,
        warning: <DesignIcon variant="AlertOutline" />,
        info: <DesignIcon variant="InformationOutline" />,
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      preventDuplicate
      autoHideDuration={2000}
    >
      {children}
    </SnackbarProvider>
  );
};

export default NotistackProvider;
