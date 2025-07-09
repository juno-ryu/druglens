import { Components, Theme } from '@mui/material';

export const MuiBottomNavigationOverride: Components<Theme>['MuiBottomNavigation'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderTop: `1px solid ${theme.palette['gray/dim/200']}`,
    }),
  },
};
