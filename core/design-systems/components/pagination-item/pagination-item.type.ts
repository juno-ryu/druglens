import { PaginationItemProps as MuiPaginationItemProps, PaginationItemTypeMap as MuiPaginationItemTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type PaginationItemComponent = OverridableComponent<MuiPaginationItemTypeMap<PaginationItemProps>>;

export type PaginationItemProps<RootComponent extends React.ElementType = MuiPaginationItemTypeMap['defaultComponent']> = MuiPaginationItemProps<RootComponent> & {
  //
};
