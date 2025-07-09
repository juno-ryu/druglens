import { Components, Theme } from '@mui/material';

export const MuiStepConnectorOverride: Components<Theme>['MuiStepConnector'] = {
  defaultProps: {
    //
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      variants: [
        {
          props: {
            orientation: 'horizontal',
            alternativeLabel: true,
          },
          style: {
            // root
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="small"]) &': {
              top: '15px',
              left: 'calc(-50% + 15px + 24px)',
              right: 'calc(50% + 15px + 24px)',
            },
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="medium"]) &': {
              top: '19px',
              left: 'calc(-50% + 19px + 20px)',
              right: 'calc(50% + 19px + 20px)',
            },
            // line
            '.MuiStepConnector-line': {
              borderTopWidth: '2px',
            },
            '.MuiStep-root &': {
              '.MuiStepConnector-line': { borderColor: theme.palette['primary/600'] },
            },
            '.MuiStep-root:has(.Mui-active) ~ .MuiStep-root &': {
              '.MuiStepConnector-line': { borderColor: theme.palette['gray/300'] },
            },
          },
        },
        {
          props: {
            orientation: 'horizontal',
            alternativeLabel: false,
          },
          style: {
            // root
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="small"]) &': {
              margin: '0 20px',
            },
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="medium"]) &': {
              margin: '0 20px',
            },
            // line
            '.MuiStepConnector-line': {
              borderTopWidth: '2px',
            },
            '.MuiStep-root ~ &': {
              '.MuiStepConnector-line': { borderColor: theme.palette['primary/600'] },
            },
            '.MuiStep-root:has(.Mui-active) ~ &': {
              '.MuiStepConnector-line': { borderColor: theme.palette['gray/300'] },
            },
          },
        },
        {
          props: {
            orientation: 'vertical',
            alternativeLabel: false,
          },
          style: {
            // root
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="small"]) &': {
              margin: '20px 0px 20px 15px',
            },
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="medium"]) &': {
              margin: '20px 0px 20px 19px',
            },
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="small"]):has(.MuiStepContent-root) &': {
              margin: '0px 0px 20px 15px',
            },
            '.MuiStepper-root:has(.MuiStepLabel-root[data-size="medium"]):has(.MuiStepContent-root) &': {
              margin: '0px 0px 20px 19px',
            },
            // line
            '.MuiStepConnector-line': {
              borderLeftWidth: '2px',
            },
            '.MuiStep-root ~ &': {
              '.MuiStepConnector-line': { borderColor: theme.palette['primary/600'] },
            },
            '.MuiStep-root:has(.Mui-active) ~ &': {
              '.MuiStepConnector-line': { borderColor: theme.palette['gray/300'] },
            },
          },
        },
      ],
    }),
  },
};
