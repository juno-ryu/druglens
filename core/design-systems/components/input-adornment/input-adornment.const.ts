import { Components, Theme } from '@mui/material';

export const MuiInputAdornmentOverride: Components<Theme>['MuiInputAdornment'] = {
  defaultProps: {
    component: 'div',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      flex: 'none',
      maxHeight: 'inherit',
      '.MuiDesignIcon-root': {
        width: '24px',
        color: theme.palette['gray/800'],
      },
      '.MuiTypography-root': {
        fontWeight: 500,
        color: theme.palette['gray/600'],
      },
      '&:has(> .notranslate:last-child)': {
        display: 'none',
      },
      // disabled: is-modified
      '.MuiTextField-root:is(.MuiTextField-disabled) &': {
        '.MuiDesignIcon-root': {
          color: theme.palette['gray/200'],
        },
        '.MuiTypography-root': {
          color: theme.palette['gray/200'],
        },
      },
      // error: not-modified
      '.MuiTextField-root:is(.MuiTextField-error) &': {
        // empty
      },
      // success: not-modified
      '.MuiTextField-root:is(.MuiTextField-success) &': {
        // empty
      },
    }),
  },
};
