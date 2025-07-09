'use client';

import { Children, cloneElement, isValidElement } from 'react';
import { Select as MuiSelect } from '@mui/material';
import { SelectComponent, SelectProps } from '@/core/design-systems/components/select';

// do: children
// do-not: ref, component
const Select = (props: SelectProps) => {
  const { adornment, children, ...restProps } = props;

  return (
    <MuiSelect {...restProps}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;
        if (!adornment) return cloneElement(child, { ...child.props });
        return cloneElement(child, { ...child.props, adornment });
      })}
    </MuiSelect>
  );
};

export default Select as SelectComponent;
