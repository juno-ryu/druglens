import { StepLabelProps as MuiStepLabelProps } from '@mui/material';
import { TypeStepLabelSizes } from '@/core/design-systems/components/step-label';

export type StepLabelComponent = React.ComponentType<StepLabelProps>;

export type StepLabelProps = Omit<MuiStepLabelProps, 'component'> & {
  size?: TypeStepLabelSizes;
};
