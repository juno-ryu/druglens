import { Components, CircularProgressProps as MuiCircularProgressProps, Theme } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type CircularProgressTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'span'> = {
  props: AdditionalProps & CircularProgressProps;
  defaultComponent: RootComponent;
};

export type CircularProgressComponent = OverridableComponent<CircularProgressTypeMap<CircularProgressProps>>;

export type CircularProgressProps = Omit<MuiCircularProgressProps, 'component' | 'children'> & {};

export type CircularProgressOverride = Components<Theme>['MuiCircularProgress'] & {
  defaultProps: Partial<CircularProgressProps>;
};
