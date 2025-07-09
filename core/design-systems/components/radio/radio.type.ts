import { RadioProps as MuiRadioProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface RadioTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'button'> {
  props: AdditionalProps & RadioProps;
  defaultComponent: RootComponent;
}

export type RadioComponent = OverridableComponent<RadioTypeMap<RadioProps>>;

export type RadioProps = Omit<MuiRadioProps, 'component' | 'children'> & {
  //
};
