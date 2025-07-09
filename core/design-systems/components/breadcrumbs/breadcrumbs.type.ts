import { BreadcrumbsProps as MuiBreadcrumbsProps, BreadcrumbsTypeMap as MuiBreadcrumbsTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type BreadcrumbsComponent = OverridableComponent<MuiBreadcrumbsTypeMap<BreadcrumbsProps>>;

export type BreadcrumbsProps<RootComponent extends React.ElementType = MuiBreadcrumbsTypeMap['defaultComponent']> = MuiBreadcrumbsProps<RootComponent> & {
  //
};
