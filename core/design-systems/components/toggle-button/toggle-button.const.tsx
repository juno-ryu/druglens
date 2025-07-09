import { alpha, Components, Theme } from '@mui/material';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export type TypeToggleButtonVariants = keyof ReturnType<typeof toggleButtonVariants>;
export const toggleButtonVariants = (theme: Theme) =>
  ({
    outlined: {
      '&&': {
        // default
        '&': {
          color: 'var(--variant-outlinedColor)',
          backgroundColor: 'var(--variant-outlinedBg)',
          borderColor: 'var(--variant-outlinedBorder)',
          '& + .MuiToggleButton-root:not(.Mui-selected)': {
            '.MuiToggleButtonGroup-vertical &': { borderTopColor: 'var(--variant-outlinedBorder)' },
            '.MuiToggleButtonGroup-horizontal &': { borderLeftColor: 'var(--variant-outlinedBorder)' },
          },
        },
        // selected
        '&:is(.Mui-selected)': {
          color: 'var(--variant-outlinedColor--selected)',
          backgroundColor: 'var(--variant-outlinedBg--selected)',
          borderColor: 'var(--variant-outlinedBorder--selected)',
          '& + .MuiToggleButton-root:not(.Mui-selected)': {
            '.MuiToggleButtonGroup-vertical &': { borderTopColor: 'var(--variant-outlinedBorder--selected)' },
            '.MuiToggleButtonGroup-horizontal &': { borderLeftColor: 'var(--variant-outlinedBorder--selected)' },
          },
        },
        // disabled
        '&:is(.Mui-disabled)': {
          color: 'var(--variant-outlinedColor--disabled)',
          backgroundColor: 'var(--variant-outlinedBg--disabled)',
          borderColor: 'var(--variant-outlinedBorder--disabled)',
          '& + .MuiToggleButton-root:not(.Mui-selected)': {
            '.MuiToggleButtonGroup-vertical &': { borderTopColor: 'var(--variant-outlinedBorder--disabled)' },
            '.MuiToggleButtonGroup-horizontal &': { borderLeftColor: 'var(--variant-outlinedBorder--disabled)' },
          },
        },
      },
    },
    contained: {
      '&&': {
        // default
        '&': {
          color: 'var(--variant-containedColor)',
          backgroundColor: 'var(--variant-containedBg)',
          borderColor: 'var(--variant-containedBorder)',
          '& + .MuiToggleButton-root:not(.Mui-selected)': {
            '.MuiToggleButtonGroup-vertical &': { borderTopColor: 'var(--variant-containedBorder)' },
            '.MuiToggleButtonGroup-horizontal &': { borderLeftColor: 'var(--variant-containedBorder)' },
          },
        },
        // selected
        '&:is(.Mui-selected)': {
          color: 'var(--variant-containedColor--selected)',
          backgroundColor: 'var(--variant-containedBg--selected)',
          borderColor: 'var(--variant-containedBorder--selected)',
          '& + .MuiToggleButton-root:not(.Mui-selected)': {
            '.MuiToggleButtonGroup-vertical &': { borderTopColor: 'var(--variant-containedBorder--selected)' },
            '.MuiToggleButtonGroup-horizontal &': { borderLeftColor: 'var(--variant-containedBorder--selected)' },
          },
        },
        // disabled
        '&:is(.Mui-disabled)': {
          color: 'var(--variant-containedColor--disabled)',
          backgroundColor: 'var(--variant-containedBg--disabled)',
          borderColor: 'var(--variant-containedBorder--disabled)',
          '& + .MuiToggleButton-root:not(.Mui-selected)': {
            '.MuiToggleButtonGroup-vertical &': { borderTopColor: 'var(--variant-containedBorder--disabled)' },
            '.MuiToggleButtonGroup-horizontal &': { borderLeftColor: 'var(--variant-containedBorder--disabled)' },
          },
        },
      },
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export type TypeToggleButtonSizes = keyof ReturnType<typeof toggleButtonSizes>;
export const toggleButtonSizes = (theme: Theme) => ({
  small: {
    padding: '9px 11px',
    gap: '8px',
    fontSize: theme.typography['body/body5'].fontSize,
    lineHeight: theme.typography['body/body5'].lineHeight,
    letterSpacing: theme.typography['body/body5'].letterSpacing,
    borderRadius: '8px',
    '.MuiDesignIcon-root': { margin: '-2px 0', width: '24px' },
  },
  medium: {
    padding: '11px 15px',
    gap: '8px',
    fontSize: theme.typography['body/body3'].fontSize,
    lineHeight: theme.typography['body/body3'].lineHeight,
    letterSpacing: theme.typography['body/body3'].letterSpacing,
    borderRadius: '8px',
    '.MuiDesignIcon-root': { width: '24px' },
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
});

export const MuiToggleButtonOverride: Components<Theme>['MuiToggleButton'] = {
  defaultProps: {
    size: 'small',
    color: 'augment/red/600',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        variants: [
          ...Object.entries(toggleButtonVariants(theme)).map(([variant, style]) => ({
            props: { 'data-variant': variant },
            style,
          })),
          ...Object.entries(toggleButtonSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
        ],
        // ripple
        '& .MuiTouchRipple-ripple': {},
        '&:not(:focus-visible) .MuiTouchRipple-ripple': { opacity: '0 !important' },
        // default
        '&': {
          // outlined
          '--variant-outlinedColor': theme.palette['augment/gray/800'].main,
          '--variant-outlinedBg': theme.palette['white'],
          '--variant-outlinedBorder': theme.palette['augment/gray/200'].main,
          '--variant-outlinedColor--selected': theme.palette[augmentColor].main,
          '--variant-outlinedBg--selected': alpha(theme.palette[augmentColor].main, 0.07),
          '--variant-outlinedBorder--selected': theme.palette[augmentColor].main,
          '--variant-outlinedColor--disabled': theme.palette['augment/gray/200'].main,
          '--variant-outlinedBg--disabled': theme.palette['white'],
          '--variant-outlinedBorder--disabled': theme.palette['augment/gray/200'].main,
          // contained
          '--variant-containedColor': theme.palette[augmentColor].main,
          '--variant-containedBg': theme.palette['white'],
          '--variant-containedBorder': theme.palette[augmentColor].main,
          '--variant-containedColor--selected': theme.palette['white'],
          '--variant-containedBg--selected': theme.palette[augmentColor].main,
          '--variant-containedBorder--selected': theme.palette[augmentColor].main,
          '--variant-containedColor--disabled': theme.palette['augment/gray/200'].main,
          '--variant-containedBg--disabled': theme.palette['white'],
          '--variant-containedBorder--disabled': theme.palette['augment/gray/200'].main,
          fontWeight: 500,
          textTransform: 'none',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
        // selected
        '&:is(.Mui-selected)': {
          fontWeight: 600,
        },
        // disabled
        '&:is(.Mui-disabled)': {
          //
        },
      };
    },
  },
};
