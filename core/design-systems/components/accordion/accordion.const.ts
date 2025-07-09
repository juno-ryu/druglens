import { Components, Theme } from '@mui/material';

export const MuiAccordionOverride: Components<Theme>['MuiAccordion'] = {
  defaultProps: {
    component: 'div',
    elevation: 0,
    disableGutters: true,
    slotProps: {
      heading: {
        component: 'div',
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&&:before': {
        opacity: 1,
        background: theme.palette['gray/dim/200'],
      },
    }),
  },
};
