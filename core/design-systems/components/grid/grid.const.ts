import { Components, Theme } from '@mui/material';

export const MuiGridOverride: Components<Theme>['MuiGrid2'] = {
  defaultProps: {
    component: 'div',
  },
};
