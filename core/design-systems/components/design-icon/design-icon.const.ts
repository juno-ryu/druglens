import { Components, Theme } from '@mui/material';

export const MuiDesignIconOverride: Components<Theme>['MuiDesignIcon'] = {
  defaultProps: {
    component: 'i',
    variant: 'Image',
  },
  styleOverrides: {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
    },
    svgIcon: ({ ownerState }) => ({
      width: 'inherit',
      height: 'inherit',
      fontSize: 'inherit',
      fill: 'currentColor',
      stroke: ownerState?.slotProps?.svgIcon?.strokeWidth ? 'currentColor' : 'none',
    }),
  },
};
