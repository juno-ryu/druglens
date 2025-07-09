import { StackProps as MuiStackProps, StackTypeMap as MuiStackTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type StackComponent = OverridableComponent<MuiStackTypeMap<StackProps>>;

export type StackProps<RootComponent extends React.ElementType = MuiStackTypeMap['defaultComponent']> = MuiStackProps<RootComponent> & {
  //
};
