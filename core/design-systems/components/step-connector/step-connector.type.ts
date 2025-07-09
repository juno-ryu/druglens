import { StepConnectorProps as MuiStepConnectorProps } from '@mui/material';

export type StepConnectorComponent = React.ComponentType<StepConnectorProps>;

export type StepConnectorProps = Omit<MuiStepConnectorProps, 'component' | 'children'> & {
  //
};
