import { Components, Theme } from '@mui/material';

export const MuiStepOverride: Components<Theme>['MuiStep'] = {
  defaultProps: {
    //
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      margin: '0px',
      padding: '0px',
    }),
  },
};
