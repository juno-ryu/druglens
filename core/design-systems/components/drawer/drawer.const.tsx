import { Components, Theme } from '@mui/material';
import { DesignIcon, PaginationItem } from '@/core/design-systems';

export type TypeDrawerVariants = keyof ReturnType<typeof drawerVariants>;
export const drawerVariants = (theme: Theme) => ({}) as const;

export const MuiDrawerOverride: Components<Theme>['MuiDrawer'] = {
  defaultProps: {
    elevation: 24,
    PaperProps: {
      sx: {},
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(drawerVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
      ],
      '&.MuiDrawer-modal': {
        background: theme.palette['gray/dim/600'],
      },
    }),
  },
};
