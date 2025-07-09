import { Components, Theme } from '@mui/material';
import { red } from '@mui/material/colors';

export const MuiMenuItemOverride: Components<Theme>['MuiMenuItem'] = {
  defaultProps: {
    component: 'li',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '.MuiList-root:has(> &)': {
        '--list-padding': '6px',
        '--item-padding': '6px',
        padding: 'var(--list-padding)',
        '&, .MuiMenuItem-root': {
          padding: 'var(--item-padding)',
        },
        '&[style*="padding-right: 0px"]': {
          '&, .MuiMenuItem-root': {
            marginRight: 'var(--list-padding)',
          },
        },
      },
    }),
  },
};
