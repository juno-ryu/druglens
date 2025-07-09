import { AvatarProps as MuiAvatarProps, AvatarTypeMap as MuiAvatarTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type AvatarComponent = OverridableComponent<MuiAvatarTypeMap<MuiAvatarProps>>;

export type AvatarProps<RootComponent extends React.ElementType = MuiAvatarTypeMap['defaultComponent']> = MuiAvatarProps<RootComponent> & {
  //
};
