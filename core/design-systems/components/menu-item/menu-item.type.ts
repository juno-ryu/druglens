import { MenuItemProps as MuiMenuItemProps, MenuItemTypeMap as MuiMenuItemTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { DesignIconProps } from '@/core/design-systems/components/design-icon';

export type MenuItemComponent = OverridableComponent<MuiMenuItemTypeMap<MenuItemProps>>;

export type MenuItemProps<RootComponent extends React.ElementType = MuiMenuItemTypeMap['defaultComponent']> = MuiMenuItemProps<RootComponent> & {
  success?: boolean;
  error?: boolean;
  adornment?: {
    startIcon?: DesignIconProps['variant'];
    endIcon?: DesignIconProps['variant'];
    selectedStartIcon?: DesignIconProps['variant'];
    selectedEndIcon?: DesignIconProps['variant'];
  };
  helperText?: {
    key: string;
    withIcon: boolean;
    value: string;
  }[];
};
