'use client';

import { forwardRef } from 'react';
import { Skeleton as MuiSkeleton } from '@mui/material';
import { SkeletonComponent, SkeletonProps } from '@/core/design-systems/components/skeleton';

// do: ref, component, children
// do-not: (empty)
const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiSkeleton ref={ref} {...restProps}>
      {children}
    </MuiSkeleton>
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton as SkeletonComponent;
