import { Theme } from '@mui/material';
import { SnackbarOverride } from '@/core/design-systems/components/snackbar/snackbar.type';

export type TypeSnackbarVariants = keyof ReturnType<typeof snackbarVariants>;
export const snackbarVariants = (theme: Theme) =>
  ({
    info: {
      '& .MuiSnackbarContent-message .MuiDesignIcon-root': {
        background: `${theme.palette['state/info']}4D`,
        color: theme.palette['state/info'],
      },
    },
    error: {
      '& .MuiSnackbarContent-message .MuiDesignIcon-root': {
        background: `${theme.palette['state/danger']}4D`,
        color: theme.palette['state/danger'],
      },
    },
    success: {
      '& .MuiSnackbarContent-message .MuiDesignIcon-root': {
        background: `${theme.palette['state/success']}4D`,
        color: theme.palette['state/success'],
      },
    },
    warning: {
      '& .MuiSnackbarContent-message .MuiDesignIcon-root': {
        background: `${theme.palette['state/warning']}4D`,
        color: theme.palette['state/warning'],
      },
    },
  }) as const;

export type TypeSnackbarModes = keyof ReturnType<typeof snackbarModes>;
export const snackbarModes = (theme: Theme) =>
  ({
    dark: {},
    light: {
      '& .MuiPaper-root': {
        background: theme.palette['white'],
        color: theme.palette['gray/800'],
      },
    },
  }) as const;

export const MuiSnackbarOverride: SnackbarOverride = {
  defaultProps: {
    variant: 'default',
    mode: 'light',
    sx: {
      position: 'relative',
    },
    ContentProps: {
      elevation: 2,
      sx: {
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '360px',
        width: '100%',
        '& .MuiSnackbarContent-action': {
          marginRight: '0',
        },
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        variants: [
          ...Object.entries(snackbarVariants(theme)).map(([variant, style]) => ({
            props: { variant },
            style,
          })),
          ...Object.entries(snackbarModes(theme)).map(([mode, style]) => ({
            props: { mode },
            style,
          })),
        ],
        '& .MuiSnackbarContent-message': {
          padding: 0,
          fontSize: theme.typography['body/body6'].fontSize,
          lineHeight: theme.typography['body/body6'].lineHeight,
          letterSpacing: theme.typography['body/body6'].letterSpacing,
          fontWeight: 600,
          '& .MuiDesignIcon-root': {
            width: '24px',
            height: '24px',
            borderRadius: '8px',
            padding: '4px',
          },
        },
      };
    },
  },
};
