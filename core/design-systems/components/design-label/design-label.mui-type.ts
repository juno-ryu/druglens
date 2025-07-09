import { ComponentsOverrides as MuiComponentsOverrides, ComponentsVariants as MuiComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';
import { DesignLabelProps } from '@/core/design-systems/components/design-label';

export interface DesignLabelPropsColorOverrides {}

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    MuiDesignLabel: keyof NonNullable<DesignLabelProps['slotProps']>;
  }

  interface ComponentsPropsList {
    MuiDesignLabel: Partial<DesignLabelProps>;
  }

  interface Components {
    MuiDesignLabel?: {
      defaultProps?: ComponentsPropsList['MuiDesignLabel'];
      styleOverrides?: MuiComponentsOverrides<Omit<MuiTheme, 'components'>>['MuiDesignLabel'];
      variants?: MuiComponentsVariants['MuiDesignLabel'];
    };
  }
}
