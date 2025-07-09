import { FormHelperTextProps as MuiFormHelperTextProps, FormHelperTextTypeMap as MuiFormHelperTextTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type FormHelperTextComponent = OverridableComponent<MuiFormHelperTextTypeMap<FormHelperTextProps>>;

export type FormHelperTextProps<RootComponent extends React.ElementType = MuiFormHelperTextTypeMap['defaultComponent']> = MuiFormHelperTextProps<RootComponent> & {
  success?: boolean;
};
