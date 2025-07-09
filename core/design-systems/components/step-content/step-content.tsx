'use client';

import { forwardRef } from 'react';
import { StepContent as MuiStepContent } from '@mui/material';
import { StepContentComponent, StepContentProps } from '@/core/design-systems/components/step-content';

// do: ref, children
// do-not: component
const StepContent = forwardRef<HTMLDivElement, StepContentProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiStepContent ref={ref} {...restProps}>
      {children}
    </MuiStepContent>
  );
});

StepContent.displayName = 'StepContent';

export default StepContent as StepContentComponent;
