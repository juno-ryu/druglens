import { Components, Theme } from '@mui/material';

export type TypeBSkeletonVariants = keyof ReturnType<typeof skeletonVariants>;
export const skeletonVariants = (theme: Theme) =>
  ({
    text: {
      borderRadius: '4px',
    },
    rectangular: {
      borderRadius: '4px',
    },
    rounded: {
      borderRadius: '16px',
    },
  }) as const;

export const MuiSkeletonOverride: Components<Theme>['MuiSkeleton'] = {
  defaultProps: {
    component: 'span',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(skeletonVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
      ],
      background: theme.palette['gray/dim/200'],
    }),
  },
};
