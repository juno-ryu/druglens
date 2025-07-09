import { InputLabelProps as MuiInputLabelProps, InputLabelTypeMap as MuiInputLabelTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type InputLabelComponent = OverridableComponent<MuiInputLabelTypeMap<InputLabelProps>>;

export type InputLabelProps<RootComponent extends React.ElementType = MuiInputLabelTypeMap['defaultComponent']> = MuiInputLabelProps<RootComponent> & {
  //
};
