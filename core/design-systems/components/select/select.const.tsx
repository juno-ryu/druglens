import { Components, Theme } from '@mui/material';
import DesignIcon from '@/core/design-systems/components/design-icon';

export type TypeSelectVariants = keyof ReturnType<typeof selectVariants>;
export const selectVariants = (theme: Theme) =>
  ({
    filled: {
      //
    },
    outlined: {
      //
    },
    standard: {
      //
    },
  }) as const;

export type TypeSelectSizes = keyof ReturnType<typeof selectSizes>;
export const selectSizes = (theme: Theme) =>
  ({
    small: {
      //
    },
    medium: {
      //
    },
    large: {
      //
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export const MuiSelectOverride: Components<Theme>['MuiSelect'] = {
  defaultProps: {
    native: false,
    multiple: false,
    IconComponent: (props) => <DesignIcon variant="ChevronDownBold" {...props} />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(selectVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
        ...Object.entries(selectSizes(theme)).map(([size, style]) => ({
          props: { size },
          style,
        })),
      ],
    }),
    icon: ({ theme }) => ({
      width: '24px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: theme.palette['gray/800'],
    }),
    iconOpen: ({ theme }) => ({
      transform: 'translateY(-50%) rotate(180deg)',
    }),
  },
};
