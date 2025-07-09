import { MenuListProps as MuiMenuListProps, MenuListTypeMap as MuiMenuListTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type MenuListComponent = OverridableComponent<MuiMenuListTypeMap<MenuListProps>>;

export type MenuListProps<RootComponent extends React.ElementType = MuiMenuListTypeMap['defaultComponent']> = MuiMenuListProps<RootComponent> & {
  //
};
