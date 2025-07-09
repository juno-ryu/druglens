import { Components, Theme } from '@mui/material';

export const MuiAvatarOverride: Components<Theme>['MuiAvatar'] = {
  defaultProps: {
    component: 'div',
  },
};
