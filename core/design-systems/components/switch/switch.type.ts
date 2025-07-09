import { SwitchProps as MuiSwitchProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface SwitchTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'button'> {
  props: AdditionalProps & SwitchProps;
  defaultComponent: RootComponent;
}

export type SwitchComponent = OverridableComponent<SwitchTypeMap<SwitchProps>>;

export type SwitchProps = Omit<MuiSwitchProps, 'component' | 'children'> & {
  //
};
