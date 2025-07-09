import { Components, Theme } from '@mui/material';

export const MuiDialogOverride: Components<Theme>['MuiDialog'] = {
  defaultProps: {
    component: 'div',
    PaperProps: {
      elevation: 24,
      sx: {
        minWidth: '312px',
        borderRadius: '24px',
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({}),
  },
};
