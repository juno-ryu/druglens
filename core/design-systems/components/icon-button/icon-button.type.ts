import { IconButtonProps as MuiIconButtonProps, IconButtonTypeMap as MuiIconButtonTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type IconButtonComponent = OverridableComponent<MuiIconButtonTypeMap<IconButtonProps>>;

export type IconButtonProps<RootComponent extends React.ElementType = MuiIconButtonTypeMap['defaultComponent']> = MuiIconButtonProps<RootComponent> & {
  //
};
