import { Components, Theme } from '@mui/material';

export const MuiBottomNavigationActionOverride: Components<Theme>['MuiBottomNavigationAction'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    sx: {
      maxWidth: '100%',
      minWidth: 'auto',
    },
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '&': {
        color: theme.palette['gray/800'],
        '.MuiBottomNavigationAction-label': {
          fontSize: theme.typography['label/label2'].fontSize,
          lineHeight: theme.typography['label/label2'].lineHeight,
          letterSpacing: theme.typography['label/label2'].letterSpacing,
          fontWeight: 500,
          color: 'inherit',
          transition: 'none',
        },
      },
      '&.Mui-selected': {
        color: theme.palette['black'],
        '.MuiBottomNavigationAction-label': {
          fontSize: theme.typography['label/label2'].fontSize,
          lineHeight: theme.typography['label/label2'].lineHeight,
          letterSpacing: theme.typography['label/label2'].letterSpacing,
          color: 'inherit',
          fontWeight: 700,
        },
      },
    }),
  },
};
