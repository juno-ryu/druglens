import { Components, Theme } from '@mui/material';

export const MuiLinkOverride: Components<Theme>['MuiLink'] = {
  defaultProps: {
    component: 'a',
    underline: 'none',
  },
};
