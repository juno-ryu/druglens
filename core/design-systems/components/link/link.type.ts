import { LinkProps as MuiLinkProps, LinkTypeMap as MuiLinkTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type LinkComponent = OverridableComponent<MuiLinkTypeMap<LinkProps>>;

export type LinkProps<RootComponent extends React.ElementType = MuiLinkTypeMap['defaultComponent']> = MuiLinkProps<RootComponent> & {
  //
};
