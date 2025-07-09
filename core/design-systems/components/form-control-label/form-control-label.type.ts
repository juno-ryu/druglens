import { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material';

export type FormControlLabelComponent = React.ComponentType<FormControlLabelProps>;

export type FormControlLabelProps = Omit<MuiFormControlLabelProps, 'component' | 'children'> & {
  //
};
