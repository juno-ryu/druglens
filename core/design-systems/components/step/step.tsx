'use client';

import { forwardRef } from 'react';
import { Step as MuiStep } from '@mui/material';
import { StepComponent, StepProps } from '@/core/design-systems/components/step';

// do: ref, component, children
// do-not: (empty)
const Step = forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiStep ref={ref} {...restProps}>
      {children}
    </MuiStep>
  );
});

Step.displayName = 'Step';

export default Step as StepComponent;
