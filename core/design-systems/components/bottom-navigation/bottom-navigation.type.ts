import { BottomNavigationProps as MuiBottomNavigationProps, BottomNavigationTypeMap as MuiBottomNavigationTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type BottomNavigationComponent = OverridableComponent<MuiBottomNavigationTypeMap<BottomNavigationProps>>;

export type BottomNavigationProps<RootComponent extends React.ElementType = MuiBottomNavigationTypeMap['defaultComponent']> = MuiBottomNavigationProps<RootComponent> & {
  //
};
