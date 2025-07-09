'use client';

import { forwardRef } from 'react';
import { RadioGroup as MuiRadioGroup } from '@mui/material';
import { RadioGroupComponent, RadioGroupProps } from '@/core/design-systems/components/radio-group';

// do: ref, component, children
// do-not: (empty)
const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiRadioGroup ref={ref} {...restProps}>
      {children}
    </MuiRadioGroup>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup as RadioGroupComponent;
