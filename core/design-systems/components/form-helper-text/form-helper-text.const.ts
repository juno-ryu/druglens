import { Components, Theme } from '@mui/material';

export type TypeFormHelperTextVariants = keyof ReturnType<typeof formHelperTextVariants>;
export const formHelperTextVariants = (theme: Theme) =>
  ({
    standard: {
      //
    },
    outlined: {
      //
    },
    filled: {
      //
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export const MuiFormHelperTextOverride: Components<Theme>['MuiFormHelperText'] = {
  defaultProps: {
    component: 'span',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      variants: [
        ...Object.entries(formHelperTextVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
      ],
      '--form-helper-text-textField-padding-top': '6px',
      '--form-helper-text-textField-padding-left': '12px',
      '--form-helper-text-list-padding-top': '4px',
      '--form-helper-text-list-padding-left': '0px',
      display: 'flex',
      flexDirection: 'row',
      gap: '4px',
      margin: '0px',
      padding: '0px',
      fontSize: theme.typography['label/label1'].fontSize,
      lineHeight: theme.typography['label/label1'].lineHeight,
      fontWeight: theme.typography['label/label1'].fontWeight,
      color: 'currentColor',
      '&:empty': {
        display: 'none',
      },
      '&:has(&)': {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        '.MuiTextField-root > &': {
          paddingTop: 'var(--form-helper-text-textField-padding-top)',
          paddingLeft: 'var(--form-helper-text-textField-padding-left)',
        },
        '.MuiList-root &': {
          paddingTop: 'var(--form-helper-text-list-padding-top)',
          paddingLeft: 'var(--form-helper-text-list-padding-left)',
        },
      },
      '.MuiDesignIcon-root': {
        width: '16px',
        color: 'currentColor',
      },
      // disabled: is-modified
      '&.Mui-disabled, .MuiTextField-root:is(.MuiTextField-disabled) &, .MuiMenuItem-root:is(.MuiMenuItem-disabled) &': {
        color: theme.palette['gray/400'],
      },
      // error: is-modified
      '&.Mui-error, .MuiTextField-root:is(.MuiTextField-error) &, .MuiMenuItem-root:is(.MuiMenuItem-error) &': {
        color: theme.palette['state/danger'],
      },
      // success: is-modified
      '&.MuiFormHelperText-success, .MuiTextField-root:is(.MuiTextField-success) &, .MuiMenuItem-root:is(.MuiMenuItem-success) &': {
        color: theme.palette['state/success'],
      },
    }),
  },
};
