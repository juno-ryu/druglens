'use client';

import { forwardRef } from 'react';
import { Chip as MuiChip } from '@mui/material';
import { ChipComponent, ChipProps } from '@/core/design-systems/components/chip';

// do: ref, component
// do-not: children
const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiChip ref={ref} {...restProps} />;
});

Chip.displayName = 'Chip';

export default Chip as ChipComponent;
