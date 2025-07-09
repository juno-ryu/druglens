import { Components, Theme } from '@mui/material';

export const MuiStepContentOverride: Components<Theme>['MuiStepContent'] = {
  defaultProps: {
    //
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      borderWidth: '2px',
      borderColor: theme.palette['primary/600'],
      '.MuiStep-root:has(.Mui-active) &': {
        borderColor: theme.palette['gray/300'],
      },
      '.MuiStep-root:has(.Mui-active) ~ .MuiStep-root &': {
        borderColor: theme.palette['gray/300'],
      },
      '.MuiStepper-root:has(.MuiStepLabel-root[data-size="small"]) &': {
        marginTop: '20px',
        marginLeft: '15px',
        paddingLeft: 'calc(15px + 12px)',
      },
      '.MuiStepper-root:has(.MuiStepLabel-root[data-size="medium"]) &': {
        marginTop: '20px',
        marginLeft: '19px',
        paddingLeft: 'calc(19px + 12px)',
      },
    }),
  },
};
