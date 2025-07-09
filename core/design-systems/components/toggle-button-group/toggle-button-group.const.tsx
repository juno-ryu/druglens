import { Components, Theme } from '@mui/material';

export type TypeToggleButtonGroupVariants = keyof ReturnType<typeof toggleButtonGroupVariants>;
export const toggleButtonGroupVariants = (theme: Theme) =>
  ({
    text: {
      //
    },
    outlined: {
      //
    },
    contained: {
      //
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export type TypeToggleButtonGroupSizes = keyof ReturnType<typeof toggleButtonGroupSizes>;
export const toggleButtonGroupSizes = (theme: Theme) => ({
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
});

export const MuiToggleButtonGroupOverride: Components<Theme>['MuiToggleButtonGroup'] = {
  defaultProps: {
    size: 'small',
    color: 'augment/red/600',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        //
      };
    },
  },
};
