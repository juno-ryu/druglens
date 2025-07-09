import { SvgIconProps as MuiSvgIconProps, SvgIconTypeMap as MuiSvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type SvgIconComponent = OverridableComponent<MuiSvgIconTypeMap<SvgIconProps>>;

export type SvgIconProps<RootComponent extends React.ElementType = MuiSvgIconTypeMap['defaultComponent']> = MuiSvgIconProps<RootComponent> & {
  //
};
