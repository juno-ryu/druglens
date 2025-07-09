import { Components, Theme } from '@mui/material';

export type TypeFormControlVariants = keyof ReturnType<typeof formControlVariants>;
export const formControlVariants = (theme: Theme) => ({
  filled: {
    //
  },
  outlined: {
    //
  },
  standard: {
    //
  },
});

export const MuiFormControlOverride: Components<Theme>['MuiFormControl'] = {
  defaultProps: {
    component: 'div',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(formControlVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
      ],
    }),
  },
};
