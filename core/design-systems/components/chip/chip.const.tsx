import { Components, Theme } from '@mui/material';
import DesignIcon from '@/core/design-systems/components/design-icon';

export type TypeChipVariants = keyof ReturnType<typeof chipVariants>;
export const chipVariants = (theme: Theme) =>
  ({
    filled: {
      //
    },
    outlined: {
      //
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export type TypeChipSizes = keyof ReturnType<typeof chipSizes>;
export const chipSizes = (theme: Theme) => ({
  extraSmall: {
    height: 'auto',
    padding: '3px 4px',
    '.MuiChip-label': {
      paddingLeft: '3px',
      paddingRight: '2px',
      fontSize: theme.typography['label/label2'].fontSize,
      lineHeight: theme.typography['label/label2'].lineHeight,
      letterSpacing: theme.typography['label/label2'].letterSpacing,
    },
    '.MuiChip-avatar': {
      width: '14px',
      height: '14px',
    },
    '.MuiChip-icon': {
      width: '14px',
      height: '14px',
    },
    '.MuiChip-deleteIcon': {
      width: '14px',
      height: '14px',
    },
  },
  small: {
    height: 'auto',
    padding: '3px 4px',
    '.MuiChip-label': {
      paddingLeft: '3px',
      paddingRight: '2px',
      fontSize: theme.typography['label/label1'].fontSize,
      lineHeight: theme.typography['label/label1'].lineHeight,
      letterSpacing: theme.typography['label/label1'].letterSpacing,
    },
    '.MuiChip-avatar': {
      width: '16px',
      height: '16px',
    },
    '.MuiChip-icon': {
      width: '16px',
      height: '16px',
    },
    '.MuiChip-deleteIcon': {
      width: '15px',
      height: '15px',
    },
  },
  medium: {
    height: 'auto',
    padding: '3px 4px',
    '.MuiChip-label': {
      paddingLeft: '5px',
      paddingRight: '4px',
      fontSize: theme.typography['body/body6'].fontSize,
      lineHeight: theme.typography['body/body6'].lineHeight,
      letterSpacing: theme.typography['body/body6'].letterSpacing,
    },
    '.MuiChip-avatar': {
      width: '18px',
      height: '18px',
    },
    '.MuiChip-icon': {
      width: '18px',
      height: '18px',
    },
    '.MuiChip-deleteIcon': {
      width: '16px',
      height: '16px',
    },
  },
  customA: {
    //
  },
  customB: {
    //
  },
});

export const MuiChipOverride: Components<Theme>['MuiChip'] = {
  defaultProps: {
    component: 'span',
    variant: 'filled',
    size: 'small',
    color: 'augment/gray/800',
    deleteIcon: <DesignIcon variant="RemoveFill" />,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        variants: [
          ...Object.entries(chipVariants(theme)).map(([variant, style]) => ({
            props: { variant },
            style,
          })),
          ...Object.entries(chipSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
          {
            props: { variant: 'outlined' },
            style: {
              '&:after': {
                boxShadow:
                  ownerState?.size === 'medium'
                    ? 'inset 0 0 0 1px currentColor'
                    : ownerState?.size === 'small'
                      ? 'inset 0 0 0 0.8px currentColor'
                      : 'inset 0 0 0 0.8px currentColor',
              },
            },
          },
        ],
        '&': {
          position: 'relative',
          border: 'none',
          borderRadius: '999px',
          // ripple
          '& .MuiTouchRipple-rippleVisible': { animationDuration: '0ms' },
          '&:not(:focus-visible) .MuiTouchRipple-rippleVisible': {},
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          boxShadow: 'none',
          pointerEvents: 'none',
          borderRadius: '999px',
        },
        '&:active': {
          boxShadow: 'none',
        },
        '&.Mui-disabled': {
          opacity: 0.4,
        },
      };
    },
    avatar: ({ theme, ownerState }) => ({
      margin: '0px',
      padding: '0px',
      color: 'currentColor',
      background: 'transparent',
    }),
    icon: ({ theme, ownerState }) => ({
      margin: '0px',
      padding: '0px',
      color: 'currentColor',
      background: 'transparent',
    }),
    deleteIcon: ({ theme, ownerState }) => ({
      margin: '0px',
      padding: '0px',
      color: 'currentColor',
      background: 'transparent',
      opacity: 0.35,
      '&:hover, &:focus': { opacity: 0.55 },
      '&:active': { opacity: 0.75 },
    }),
  },
};
