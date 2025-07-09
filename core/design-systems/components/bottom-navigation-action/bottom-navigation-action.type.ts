import React from 'react'; // Add this line
import { ButtonBaseTypeMap, BottomNavigationActionProps as MuiBottomNavigationActionProps, BottomNavigationActionTypeMap as MuiBottomNavigationActionTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type BottomNavigationActionComponent = OverridableComponent<MuiBottomNavigationActionTypeMap<{}, ButtonBaseTypeMap['defaultComponent']>>;

export type BottomNavigationActionProps<RootComponent extends React.ElementType = MuiBottomNavigationActionTypeMap<{}, ButtonBaseTypeMap['defaultComponent']>['defaultComponent']> =
  MuiBottomNavigationActionProps<RootComponent> & {
    //
  };
