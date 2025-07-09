import { Components, Theme } from '@mui/material';

export type TypeDividerVariants = keyof ReturnType<typeof dividerVariants>;
export const dividerVariants = (theme: Theme) =>
  ({
    fullWidth: {
      //
    },
    inset: {
      //
    },
    middle: {
      //
    },
    dash: {
      borderStyle: 'dashed',
    },
    customB: {
      //
    },
  }) as const;

export const MuiDividerOverride: Components<Theme>['MuiDivider'] = {
  defaultProps: {
    component: 'hr',
    'aria-hidden': true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(dividerVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
      ],
      borderColor: theme.palette['gray/200'],
      '&:before, &:after': { borderColor: 'inherit' },
    }),
    wrapper: ({ theme }) => ({
      minWidth: 'fit-content',
    }),
  },
};
