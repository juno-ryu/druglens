'use client';

import { forwardRef } from 'react';
import { Stack as MuiStack } from '@mui/material';
import { StackComponent, StackProps } from '@/core/design-systems/components/stack';

// do: ref, component, children
// do-not: (empty)
const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiStack ref={ref} {...restProps}>
      {children}
    </MuiStack>
  );
});

Stack.displayName = 'Stack';

export default Stack as StackComponent;
