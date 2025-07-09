import { ComponentsOverrides as MuiComponentsOverrides, ComponentsVariants as MuiComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';
import { BoxProps } from '@/core/design-systems/components/box';

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    MuiBox: keyof NonNullable<BoxProps['slotProps']>;
  }

  interface ComponentsPropsList {
    MuiBox: Partial<BoxProps>;
  }

  interface Components {
    MuiBox?: {
      defaultProps?: ComponentsPropsList['MuiBox'];
      styleOverrides?: MuiComponentsOverrides<Omit<MuiTheme, 'components'>>['MuiBox'];
      variants?: MuiComponentsVariants['MuiBox'];
    };
  }
}

declare module '@mui/material/Box' {
  //
}
