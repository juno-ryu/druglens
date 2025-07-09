import { StepContentProps as MuiStepContentProps } from '@mui/material';

export type StepContentComponent = React.ComponentType<StepContentProps>;

export type StepContentProps = Omit<MuiStepContentProps, 'component'> & {
  //
};
