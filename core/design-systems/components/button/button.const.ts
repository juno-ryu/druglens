import { alpha, Components, Theme } from '@mui/material';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export type TypeButtonVariants = keyof ReturnType<typeof buttonVariants>;
export const buttonVariants = (theme: Theme) =>
  ({
    text: {
      // default
      '&': { padding: '0px' },
      '&:hover': { background: 'transparent' },
      // ripple
      '& .MuiTouchRipple-rippleVisible': {},
      '&:not(:focus-visible) .MuiTouchRipple-rippleVisible': { opacity: 0 },
    },
    outlined: {
      //
    },
    contained: {
      '&': { border: '1px solid var(--variant-containedBg)' },
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export type TypeButtonSizes = keyof ReturnType<typeof buttonSizes>;
export const buttonSizes = (theme: Theme) => ({
  small: {
    padding: '3px 4px',
    borderRadius: '4px',
    fontSize: theme.typography['label/label1'].fontSize,
    lineHeight: theme.typography['label/label1'].lineHeight,
    letterSpacing: theme.typography['label/label1'].letterSpacing,
    fontWeight: 700,
    gap: '4px',
    '.MuiButton-icon': {
      '&, .MuiDesignIcon-root': { width: '16px' },
    },
    '&:is(.MuiButton-frontBumperThick)': {
      '.MuiButton-child': { marginLeft: '5px' },
    },
    '&:is(.MuiButton-frontBumperThin)': {
      '.MuiButton-child': { marginLeft: '3px' },
    },
    '&:is(.MuiButton-frontBumperBoth)': {
      '.MuiButton-child': { marginLeft: '8px' },
    },
    '&:is(.MuiButton-backBumperThick)': {
      '.MuiButton-child': { marginRight: '5px' },
    },
    '&:is(.MuiButton-backBumperThin)': {
      '.MuiButton-child': { marginRight: '3px' },
    },
    '&:is(.MuiButton-backBumperBoth)': {
      '.MuiButton-child': { marginRight: '8px' },
    },
  },
  medium: {
    padding: '6px 6px',
    borderRadius: '6px',
    fontSize: theme.typography['body/body6'].fontSize,
    lineHeight: theme.typography['body/body6'].lineHeight,
    letterSpacing: theme.typography['body/body6'].letterSpacing,
    fontWeight: 700,
    gap: '4px',
    '.MuiButton-icon': {
      '&, .MuiDesignIcon-root': { width: '18px' },
    },
    '&:is(.MuiButton-frontBumperThick)': {
      '.MuiButton-child': { marginLeft: '5px' },
    },
    '&:is(.MuiButton-frontBumperThin)': {
      '.MuiButton-child': { marginLeft: '3px' },
    },
    '&:is(.MuiButton-frontBumperBoth)': {
      '.MuiButton-child': { marginLeft: '8px' },
    },
    '&:is(.MuiButton-backBumperThick)': {
      '.MuiButton-child': { marginRight: '5px' },
    },
    '&:is(.MuiButton-backBumperThin)': {
      '.MuiButton-child': { marginRight: '3px' },
    },
    '&:is(.MuiButton-backBumperBoth)': {
      '.MuiButton-child': { marginRight: '8px' },
    },
  },
  large: {
    padding: '7px 8px',
    borderRadius: '8px',
    fontSize: theme.typography['body/body5'].fontSize,
    lineHeight: theme.typography['body/body5'].lineHeight,
    letterSpacing: theme.typography['body/body5'].letterSpacing,
    fontWeight: 700,
    gap: '6px',
    '.MuiButton-icon': {
      '&, .MuiDesignIcon-root': { flex: 'none', width: '20px' },
    },
    '&:is(.MuiButton-frontBumperThick)': {
      '.MuiButton-child': { marginLeft: '6px' },
    },
    '&:is(.MuiButton-frontBumperThin)': {
      '.MuiButton-child': { marginLeft: '3px' },
    },
    '&:is(.MuiButton-frontBumperBoth)': {
      '.MuiButton-child': { marginLeft: '9px' },
    },
    '&:is(.MuiButton-backBumperThick)': {
      '.MuiButton-child': { marginRight: '6px' },
    },
    '&:is(.MuiButton-backBumperThin)': {
      '.MuiButton-child': { marginRight: '3px' },
    },
    '&:is(.MuiButton-backBumperBoth)': {
      '.MuiButton-child': { marginRight: '9px' },
    },
  },
  extraLarge: {
    padding: '11px 12px',
    borderRadius: '8px',
    fontSize: theme.typography['body/body3'].fontSize,
    lineHeight: theme.typography['body/body3'].lineHeight,
    letterSpacing: theme.typography['body/body3'].letterSpacing,
    fontWeight: 700,
    gap: '8px',
    '.MuiButton-icon': {
      '&, .MuiDesignIcon-root': { width: '24px' },
    },
    '&:is(.MuiButton-frontBumperThick)': {
      '.MuiButton-child': { marginLeft: '6px' },
    },
    '&:is(.MuiButton-frontBumperThin)': {
      '.MuiButton-child': { marginLeft: '3px' },
    },
    '&:is(.MuiButton-frontBumperBoth)': {
      '.MuiButton-child': { marginLeft: '9px' },
    },
    '&:is(.MuiButton-backBumperThick)': {
      '.MuiButton-child': { marginRight: '6px' },
    },
    '&:is(.MuiButton-backBumperThin)': {
      '.MuiButton-child': { marginRight: '3px' },
    },
    '&:is(.MuiButton-backBumperBoth)': {
      '.MuiButton-child': { marginRight: '9px' },
    },
  },
  customA: {
    //
  },
  customB: {
    //
  },
});

export const MuiButtonOverride: Components<Theme>['MuiButton'] = {
  defaultProps: {
    component: 'button',
    variant: 'contained',
    size: 'small',
    color: 'augment/gray/800',
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        variants: [
          ...Object.entries(buttonVariants(theme)).map(([variant, style]) => ({
            props: { variant },
            style,
          })),
          ...Object.entries(buttonSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
          {
            props: {
              disabled: true,
            },
            style: {
              '&:not(.MuiButton-inactivated)': {
                color: ownerState?.variant === 'text' ? theme.palette['augment/gray/200'].main : theme.palette['white'],
                background: ownerState?.variant === 'text' ? theme.palette['transparent'] : theme.palette['augment/gray/200'].main,
                borderColor: theme.palette['augment/gray/200'].main,
              },
              '&:is(.MuiButton-inactivated)': {
                opacity: 0.4,
                color: ownerState?.variant !== 'contained' ? theme.palette[augmentColor].main : theme.palette[augmentColor].contrastText,
                background: ownerState?.variant !== 'contained' ? theme.palette['white'] : theme.palette[augmentColor].main,
                borderColor: theme.palette[augmentColor].main,
                '&:has(.MuiLoader)': {
                  opacity: 1,
                  color: ownerState?.variant !== 'contained' ? alpha(theme.palette[augmentColor].main, 0.4) : alpha(theme.palette[augmentColor].contrastText, 0.4),
                  background: ownerState?.variant !== 'contained' ? alpha(theme.palette['white'], 0.4) : alpha(theme.palette[augmentColor].main, 0.4),
                  borderColor: alpha(theme.palette[augmentColor].main, 0.4),
                  '.MuiButton-child': { display: 'inline-flex' },
                  '.MuiButton-child:before': { content: '"\uFEFF"' },
                },
              },
            },
          },
        ],
        '&': {
          // contained
          '--variant-containedColor': theme.palette[augmentColor].contrastText,
          '--variant-containedBg': theme.palette[augmentColor].main,
          // outlined
          '--variant-outlinedColor': theme.palette[augmentColor].main,
          '--variant-outlinedBorder': theme.palette[augmentColor].main,
          // text
          '--variant-textColor': theme.palette[augmentColor].main,
          minWidth: 'inherit',
          minHeight: 'inherit',
          textTransform: 'none',
          letterSpacing: 0,
          // ripple
          '& .MuiTouchRipple-rippleVisible': { animationDuration: '0ms' },
          '&:not(:focus-visible) .MuiTouchRipple-rippleVisible': {},
        },
        '&:is(.MuiButton-relaxBorder)': {
          // contained
          // outlined
          '--variant-outlinedBorder': alpha(theme.palette[augmentColor].main, 0.3),
          // text
        },
      };
    },
    startIcon: ({ theme, ownerState }) => ({
      flex: 'none',
      marginLeft: 0,
      marginRight: 0,
    }),
    endIcon: ({ theme, ownerState }) => ({
      flex: 'none',
      marginLeft: 0,
      marginRight: 0,
    }),
  },
};
