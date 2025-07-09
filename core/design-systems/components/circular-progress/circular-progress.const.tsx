import { circularProgressClasses } from '@mui/material';
import { CircularProgressOverride } from '@/core/design-systems/components/circular-progress/circular-progress.type';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export const MuiCircularProgressOverride: CircularProgressOverride = {
  defaultProps: {
    size: 40,
    thickness: 6,
    color: 'augment/primary/600',
    variant: 'indeterminate',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/primary/600') as TypeAugmentColorPalette;

      return {
        [`&.${circularProgressClasses.root}`]: {
          '& + svg': {
            color: theme.palette[augmentColor].main,
            position: 'absolute',
          },
        },
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round',
        },
      };
    },
  },
};
