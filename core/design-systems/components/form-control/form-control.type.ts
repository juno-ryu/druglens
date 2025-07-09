import { FormControlProps as MuiFormControlProps, FormControlTypeMap as MuiFormControlTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type FormControlComponent = OverridableComponent<MuiFormControlTypeMap<FormControlProps>>;

export type FormControlProps<RootComponent extends React.ElementType = MuiFormControlTypeMap['defaultComponent']> = MuiFormControlProps<RootComponent> & {
  //
};
