import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';

export type RadioGroupComponent = React.ComponentType<RadioGroupProps>;

export type RadioGroupProps = Omit<MuiRadioGroupProps, 'component'> & {
  //
};
