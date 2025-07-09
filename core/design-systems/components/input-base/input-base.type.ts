import { InputBaseProps as MuiInputBaseProps } from '@mui/material';

export type InputBaseComponent = React.ComponentType<InputBaseProps>;

export type InputBaseProps = Omit<MuiInputBaseProps, 'component' | 'children'> & {
  //
};
