'use client';

import React, { forwardRef, Fragment, useId } from 'react';
import { CircularProgress as MuiCircularProgress } from '@mui/material';
import { CircularProgressComponent, CircularProgressProps } from '@/core/design-systems/components/circular-progress';
import { CircleLoader } from '@/core/design-systems/components/design-icon';

const CircularProgress = forwardRef<HTMLSpanElement, CircularProgressProps>((props, ref) => {
  const { variant = 'indeterminate', sx, ...restProps } = props;
  const iconId = useId();
  return (
    <Fragment>
      <MuiCircularProgress
        ref={ref}
        variant={variant}
        sx={{
          ...sx,
          ...(variant === 'indeterminate' && {
            '& .MuiCircularProgress-circle': { stroke: `url(#${iconId})` },
          }),
        }}
        {...restProps}
      />
      {variant === 'indeterminate' && <CircleLoader id={iconId} />}
    </Fragment>
  );
});

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress as CircularProgressComponent;
