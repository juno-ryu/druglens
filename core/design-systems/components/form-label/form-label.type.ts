import { FormLabelProps as MuiFormLabelProps, FormLabelTypeMap as MuiFormLabelTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type FormLabelComponent = OverridableComponent<MuiFormLabelTypeMap<FormLabelProps>>;

export type FormLabelProps<RootComponent extends React.ElementType = MuiFormLabelTypeMap['defaultComponent']> = MuiFormLabelProps<RootComponent> & {
  //
};
