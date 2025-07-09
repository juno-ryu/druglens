'use client';

import { forwardRef } from 'react';
import { PaginationItem as MuiPaginationItem } from '@mui/material';
import { PaginationItemComponent, PaginationItemProps } from '@/core/design-systems/components/pagination-item';

// do: ref, component, children
// do-not: (empty)
const PaginationItem = forwardRef<HTMLDivElement, PaginationItemProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiPaginationItem ref={ref} {...restProps}>
      {children}
    </MuiPaginationItem>
  );
});

PaginationItem.displayName = 'PaginationItem';

export default PaginationItem as PaginationItemComponent;
