import { Grid2Props as MuiGrid2Props, Grid2TypeMap as MuiGrid2TypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type GridComponent = OverridableComponent<MuiGrid2TypeMap<GridProps>>;

export type GridProps<RootComponent extends React.ElementType = MuiGrid2TypeMap['defaultComponent']> = MuiGrid2Props<RootComponent> & {
  //
};
