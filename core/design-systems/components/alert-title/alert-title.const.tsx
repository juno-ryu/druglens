import { Components, Theme } from '@mui/material';

export const MuiAlertTitleOverride: Components<Theme>['MuiAlertTitle'] = {
  defaultProps: {
    component: 'strong',
    fontSize: '1.04em',
    lineHeight: 1.33333,
    letterSpacing: 0,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        display: 'block',
        margin: '0px',
        padding: '0px',
        fontWeight: 700,
        color: 'currentColor',
      };
    },
  },
};
