import { Components, Theme } from '@mui/material';

export const MuiStepperOverride: Components<Theme>['MuiStepper'] = {
  defaultProps: {
    nonLinear: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      //
    }),
  },
};
