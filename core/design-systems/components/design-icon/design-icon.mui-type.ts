import { ComponentsOverrides as MuiComponentsOverrides, ComponentsVariants as MuiComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';
import { DesignIconProps } from '@/core/design-systems/components/design-icon';

export interface DesignIconPropsColorOverrides {}

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    MuiDesignIcon: keyof NonNullable<DesignIconProps['slotProps']>;
  }

  interface ComponentsPropsList {
    MuiDesignIcon: Partial<DesignIconProps>;
  }

  interface Components {
    MuiDesignIcon?: {
      defaultProps?: ComponentsPropsList['MuiDesignIcon'];
      styleOverrides?: MuiComponentsOverrides<Omit<MuiTheme, 'components'>>['MuiDesignIcon'];
      variants?: MuiComponentsVariants['MuiDesignIcon'];
    };
  }
}
