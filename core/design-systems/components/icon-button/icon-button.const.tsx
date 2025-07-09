import { Components, Theme } from '@mui/material';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export type TypeIconButtonSizes = keyof ReturnType<typeof iconButtonSizes>;
export const iconButtonSizes = (theme: Theme) => ({
  small: {
    padding: '0px',
    '.MuiDesignIcon-root': { width: '16px' },
  },
  medium: {
    padding: '0px',
    '.MuiDesignIcon-root': { width: '18px' },
  },
  large: {
    padding: '0px',
    '.MuiDesignIcon-root': { width: '20px' },
  },
  extraLarge: {
    padding: '0px',
    '.MuiDesignIcon-root': { width: '24px' },
  },
  customA: {
    //
  },
  customB: {
    //
  },
});

export const MuiIconButtonOverride: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    size: 'small',
    color: 'augment/gray/800',
    edge: false,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        variants: [
          ...Object.entries(iconButtonSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
          {
            props: { edge: 'start' },
            style: { marginLeft: '0px' },
          },
          {
            props: { edge: 'end' },
            style: { marginRight: '0px' },
          },
        ],
        // hover
        '--IconButton-hoverBg': theme.palette['transparent'],
        // ripple
        '& .MuiTouchRipple-rippleVisible': { animationDuration: '0ms' },
        '&:not(:focus-visible) .MuiTouchRipple-rippleVisible': { opacity: '0 !important' },
      };
    },
  },
};
