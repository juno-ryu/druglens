import { ComponentsOverrides as MuiComponentsOverrides, ComponentsVariants as MuiComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';
import { LoaderProps } from '@/core/design-systems/components/loader/loader.type';
import '@mui/material/styles';

export interface LoaderPropsColorOverrides {}

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    MuiLoader: keyof NonNullable<LoaderProps['slotProps']>;
  }

  interface ComponentsPropsList {
    MuiLoader: Partial<LoaderProps>;
  }

  interface Components {
    MuiLoader?: {
      defaultProps?: ComponentsPropsList['MuiLoader'];
      styleOverrides?: MuiComponentsOverrides<Omit<MuiTheme, 'components'>>['MuiLoader'];
      variants?: MuiComponentsVariants['MuiLoader'];
    };
  }
}
