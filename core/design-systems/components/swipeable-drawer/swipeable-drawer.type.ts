import { Components, SwipeableDrawerProps as MuiSwipeableDrawerProps, Theme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface SwipeableDrawerTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'div'> {
  props: AdditionalProps & SwipeableDrawerProps;
  defaultComponent: RootComponent;
}

export type SwipeableDrawerComponent = OverridableComponent<SwipeableDrawerTypeMap<SwipeableDrawerProps>>;

export type SwipeableDrawerProps = Omit<MuiSwipeableDrawerProps, 'component'> & {
  isControllerble?: boolean;
};

export type SwipeableDrawerOverride = Components<Theme>['MuiSwipeableDrawer'] & {
  defaultProps: Partial<SwipeableDrawerProps>;
};
