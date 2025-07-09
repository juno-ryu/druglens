import { StepProps as MuiStepProps, StepTypeMap as MuiStepTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type StepComponent = OverridableComponent<MuiStepTypeMap<StepProps>>;

export type StepProps<RootComponent extends React.ElementType = MuiStepTypeMap['defaultComponent']> = MuiStepProps<RootComponent> & {
  //
};
