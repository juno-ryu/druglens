import { Components, Theme } from '@mui/material';

export const MuiDesignStatOverride: Components<Theme>['MuiDesignStat'] = {
  defaultProps: {
    component: 'div',
    slotProps: {
      typography: {
        variant: 'body/body2',
        color: 'gray/900',
      },
      unit: {
        variant: 'body/body6',
        color: 'gray/500',
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      padding: '8px 16px',
      background: theme.palette['white'],
      border: `2px solid ${theme.palette['gray/300']}`,
      borderRadius: '4px',
    }),
  },
};
