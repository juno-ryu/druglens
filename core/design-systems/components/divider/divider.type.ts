import { DividerProps as MuiDividerProps, DividerTypeMap as MuiDividerTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type DividerComponent = OverridableComponent<MuiDividerTypeMap<DividerProps>>;

export type DividerProps<RootComponent extends React.ElementType = MuiDividerTypeMap['defaultComponent']> = MuiDividerProps<RootComponent> & {
  //
};
