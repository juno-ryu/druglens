import { alpha, Components, Theme } from '@mui/material';
import { AnimationDotFlash } from '@/core/design-systems/components/loader/loader.style';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export const MuiLoaderOverride: Components<Theme>['MuiLoader'] = {
  defaultProps: {
    component: 'div',
    color: 'augment/primary/600',
    size: 8,
    variant: 'dot',
  },
  styleOverrides: {
    root: ({ ownerState }) => {
      return {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    },
    dot: ({ ownerState, theme }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/primary/600') as TypeAugmentColorPalette;

      const size = ownerState?.size || 16;
      const spasing = `${size * 2}px`;
      return {
        width: size,
        height: size,
        marginRight: spasing,
        marginLeft: spasing,
        borderRadius: '50%',
        backgroundColor: `${theme.palette[augmentColor].main}`,
        boxShadow: `${spasing} 0 ${theme.palette[augmentColor].main}, -${spasing} 0 ${theme.palette[augmentColor].main}`,
        position: 'relative',
        animation: `${AnimationDotFlash(theme.palette[augmentColor].main, spasing)} 0.5s ease-out infinite alternate`,
      };
    },
    circle: ({ ownerState, theme }) => {
      return {};
    },
  },
};
