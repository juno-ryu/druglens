import { Components, Theme } from '@mui/material';

export const MuiMenuListOverride: Components<Theme>['MuiMenuList'] = {
  defaultProps: {
    component: 'ul',
  },
};
