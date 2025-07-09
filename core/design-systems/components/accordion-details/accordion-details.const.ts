import { Components, Theme } from '@mui/material';

export const MuiAccordionDetailsOverride: Components<Theme>['MuiAccordionDetails'] = {
  defaultProps: {
    //
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '0px',
    }),
  },
};
