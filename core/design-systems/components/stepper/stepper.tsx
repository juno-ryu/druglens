'use client';

import { forwardRef } from 'react';
import { Stepper as MuiStepper } from '@mui/material';
import { StepperComponent, StepperProps } from '@/core/design-systems/components/stepper';

// do: ref, component, children
// do-not: (empty)
const Stepper = forwardRef<HTMLDivElement, StepperProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiStepper ref={ref} {...restProps}>
      {children}
    </MuiStepper>
  );
});

Stepper.displayName = 'Stepper';

export default Stepper as StepperComponent;
