import { ComponentsOverrides as MuiComponentsOverrides, ComponentsVariants as MuiComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';
import { DesignStatProps } from '@/core/design-systems/components/design-stat';

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    MuiDesignStat: keyof NonNullable<DesignStatProps['slotProps']>;
  }

  interface ComponentsPropsList {
    MuiDesignStat: Partial<DesignStatProps>;
  }

  interface Components {
    MuiDesignStat?: {
      defaultProps?: ComponentsPropsList['MuiDesignStat'];
      styleOverrides?: MuiComponentsOverrides<Omit<MuiTheme, 'components'>>['MuiDesignStat'];
      variants?: MuiComponentsVariants['MuiDesignStat'];
    };
  }
}
