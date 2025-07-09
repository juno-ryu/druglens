import { Components, Theme } from '@mui/material';

export const MuiStackOverride: Components<Theme>['MuiStack'] = {
  defaultProps: {
    component: 'div',
  },
};
