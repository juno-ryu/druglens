import { Components, Theme } from '@mui/material';

export const MuiBreadcrumbsOverride: Components<Theme>['MuiBreadcrumbs'] = {
  defaultProps: {
    component: 'nav',
  },
};
