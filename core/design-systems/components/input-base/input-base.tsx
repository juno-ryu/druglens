'use client';

import { InputBase as MuiInputBase } from '@mui/material';
import { InputBaseComponent, InputBaseProps } from '@/core/design-systems/components/input-base';

// do: (empty)
// do-not: ref, component, children
const InputBase = (props: InputBaseProps) => {
  const { ...restProps } = props;

  return <MuiInputBase {...restProps} />;
};

export default InputBase as InputBaseComponent;
