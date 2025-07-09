import { Components, Theme } from '@mui/material';

export const MuiBoxOverride: Components<Theme>['MuiBox'] = {
  defaultProps: {
    component: 'div',
  },
};
