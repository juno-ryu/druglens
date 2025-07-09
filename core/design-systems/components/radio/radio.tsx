'use client';

import { forwardRef } from 'react';
import { Radio as MuiRadio } from '@mui/material';
import { RadioComponent, RadioProps } from '@/core/design-systems/components/radio';

// do: (empty)
// do-not: ref, component, children
const Radio = forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiRadio ref={ref} {...restProps} />;
});

Radio.displayName = 'Radio';

export default Radio as RadioComponent;
