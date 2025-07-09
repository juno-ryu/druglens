import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface CheckboxTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'button'> {
  props: AdditionalProps & CheckboxProps;
  defaultComponent: RootComponent;
}

export type CheckboxComponent = OverridableComponent<CheckboxTypeMap<CheckboxProps>>;

export type CheckboxProps = Omit<MuiCheckboxProps, 'component' | 'children'> & {};
