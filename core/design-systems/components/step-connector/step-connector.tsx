'use client';

import { forwardRef } from 'react';
import { StepConnector as MuiStepConnector } from '@mui/material';
import { StepConnectorComponent, StepConnectorProps } from '@/core/design-systems/components/step-connector';

// do: ref
// do-not: component, children
const StepConnector = forwardRef<HTMLDivElement, StepConnectorProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiStepConnector ref={ref} {...restProps} />;
});

StepConnector.displayName = 'StepConnector';

export default StepConnector as StepConnectorComponent;
