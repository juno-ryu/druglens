import { SkeletonProps as MuiSkeletonProps, SkeletonTypeMap as MuiSkeletonTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type SkeletonComponent = OverridableComponent<MuiSkeletonTypeMap<SkeletonProps>>;

export type SkeletonProps<RootComponent extends React.ElementType = MuiSkeletonTypeMap['defaultComponent']> = MuiSkeletonProps<RootComponent> & {
  //
};
