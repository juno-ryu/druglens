import { DrawerProps as MuiDrawerProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface DrawerTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'div'> {
  props: AdditionalProps & DrawerProps;
  defaultComponent: RootComponent;
}

export type DrawerComponent = OverridableComponent<DrawerTypeMap<DrawerProps>>;
export type DrawerProps = Omit<MuiDrawerProps, 'component' | 'children'> & {
  //
};
