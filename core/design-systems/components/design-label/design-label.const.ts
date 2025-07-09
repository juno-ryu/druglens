import { alpha, Components, Theme } from '@mui/material';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export type TypeDesignLabelVariants = keyof ReturnType<typeof designLabelVariants>;
export const designLabelVariants = (theme: Theme) =>
  ({
    text: {
      color: 'var(--variant-textColor)',
      background: 'var(--variant-textBg)',
      borderColor: 'var(--variant-textBorder)',
    },
    outlined: {
      color: 'var(--variant-outlinedColor)',
      background: 'var(--variant-outlinedBg)',
      borderColor: 'var(--variant-outlinedBorder)',
    },
    contained: {
      color: 'var(--variant-containedColor)',
      background: 'var(--variant-containedBg)',
      borderColor: 'var(--variant-containedBorder)',
    },
    filled: {
      color: 'var(--variant-filledColor)',
      background: 'var(--variant-filledBg)',
      borderColor: 'var(--variant-filledBorder)',
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export const MuiDesignLabelOverride: Components<Theme>['MuiDesignLabel'] = {
  defaultProps: {
    component: 'span',
    variant: 'contained',
    color: 'augment/gray/800',
    slots: {
      typography: 'em',
    },
    slotProps: {
      typography: {
        variant: 'label/label1',
        fontWeight: 700,
      },
    },
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        variants: [
          ...Object.entries(designLabelVariants(theme)).map(([variant, style]) => ({
            props: { variant },
            style,
          })),
        ],
        '&': {
          // text
          '--variant-textBg': theme.palette['transparent'],
          '--variant-textBorder': theme.palette['transparent'],
          // outlined
          '--variant-outlinedBg': theme.palette['white'],
          '--variant-outlinedBorder': theme.palette[augmentColor].main,
          // contained
          '--variant-containedBg': theme.palette[augmentColor].main,
          '--variant-containedBorder': theme.palette['transparent'],
          // filled
          '--variant-filledBg': alpha(theme.palette[augmentColor].main, 0.07),
          '--variant-filledBorder': theme.palette['transparent'],
        },
        '&:is(.MuiDesignLabel-relaxBorder)': {
          // text
          '--variant-textBorder': theme.palette['transparent'],
          // outlined
          '--variant-outlinedBorder': theme.palette['transparent'],
          // contained
          '--variant-containedBorder': alpha(theme.palette[augmentColor].main, 0.3),
          // filled
          '--variant-filledBorder': theme.palette['transparent'],
        },

        display: 'inline-flex',
        width: 'fit-content',
        padding: '3px 7px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '6px',
      };
    },
    typography: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.slotProps?.typography?.color ?? ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        '.MuiDesignLabel-root:has(&)': {
          // text
          '--variant-textColor': theme.palette[augmentColor].main,
          // outlined
          '--variant-outlinedColor': theme.palette[augmentColor].main,
          // contained
          '--variant-containedColor': theme.palette[augmentColor].contrastText,
          // filled
          '--variant-filledColor': theme.palette[augmentColor].main,
        },
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: 'currentColor',
        '.MuiDesignIcon-root': {
          width: '16px',
        },
      };
    },
  },
};
