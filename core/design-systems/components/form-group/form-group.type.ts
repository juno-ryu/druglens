import { FormGroupProps as MuiFormGroupProps } from '@mui/material';

export type FormGroupComponent = React.ComponentType<FormGroupProps>;

export type FormGroupProps = Omit<MuiFormGroupProps, 'component'> & {
  //
};
