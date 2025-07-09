import { Theme } from '@mui/material';
import { TabOverride } from '@/core/design-systems/components/tab';

export type TypeTabVariants = keyof ReturnType<typeof tabVariants>;
export const tabVariants = (theme: Theme) =>
  ({
    default: {
      '&:hover': {
        '&::after': {
          content: '" "',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette['gray/800'],
        },
      },
      '&:focus': {
        '&::after': {
          content: '" "',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette['gray/800'],
        },
      },
      '&.Mui-selected': {
        '&::after': {
          content: '" "',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette['gray/800'],
        },
      },
    },
    accent: {
      '&': {
        fontWeight: 800,
        color: theme.palette['primary/600'],
      },
      '&:hover': {
        '&::after': {
          content: '" "',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette['primary/600'],
        },
      },

      '&:focus': {
        '&::after': {
          content: '" "',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette['primary/600'],
        },
      },

      '&.Mui-selected': {
        '&::after': {
          content: '" "',
          position: 'absolute',
          width: '100%',
          height: '2px',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette['primary/600'],
        },
      },
    },
    divider: {},
  }) as const;

export const MuiTabOverride: TabOverride = {
  defaultProps: {
    component: 'div',
    disableRipple: true,
    variant: 'default',
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        variants: [
          ...Object.entries(tabVariants(theme)).map(([variant, style]) => ({
            props: { variant },
            style,
          })),
        ],
        '&': { padding: 0, minWidth: 'auto', maxWidth: '100%', minHeight: 'auto', gap: '2px', alignItems: 'center', textTransform: 'none', fontWeight: 600 },
        '& .MuiTab-iconWrapper': { margin: 0 },
        '& .MuiTypography-root': { fontWeight: 'inherit' },
      };
    },
  },
};
