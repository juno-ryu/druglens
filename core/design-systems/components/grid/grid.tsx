'use client';

import { forwardRef } from 'react';
import { Grid2 as MuiGrid2 } from '@mui/material';
import { GridComponent, GridProps } from '@/core/design-systems/components/grid';

// do: ref, component, children
// do-not: (empty)
const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiGrid2 ref={ref} {...restProps}>
      {children}
    </MuiGrid2>
  );
});

Grid.displayName = 'Grid';

export default Grid as GridComponent;
