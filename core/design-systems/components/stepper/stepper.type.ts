import { StepperProps as MuiStepperProps, StepperTypeMap as MuiStepperTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type StepperComponent = OverridableComponent<MuiStepperTypeMap<StepperProps>>;

export type StepperProps<RootComponent extends React.ElementType = MuiStepperTypeMap['defaultComponent']> = MuiStepperProps<RootComponent> & {
  //
};
