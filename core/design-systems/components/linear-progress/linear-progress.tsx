'use client';

import React, { forwardRef } from 'react';
import { LinearProgress as MuiLinearProgress } from '@mui/material';
import { LinearProgressComponent, LinearProgressProps } from '@/core/design-systems/components/linear-progress';

const LinearProgress = forwardRef<HTMLSpanElement, LinearProgressProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiLinearProgress ref={ref} {...restProps} />;
});

LinearProgress.displayName = 'LinearProgress';

export default LinearProgress as LinearProgressComponent;
