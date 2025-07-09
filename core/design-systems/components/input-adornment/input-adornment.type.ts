import { InputAdornmentProps as MuiInputAdornmentProps, InputAdornmentTypeMap as MuiInputAdornmentTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type InputAdornmentComponent = OverridableComponent<MuiInputAdornmentTypeMap<InputAdornmentProps>>;

export type InputAdornmentProps<RootComponent extends React.ElementType = MuiInputAdornmentTypeMap['defaultComponent']> = MuiInputAdornmentProps<RootComponent> & {
  //
};
