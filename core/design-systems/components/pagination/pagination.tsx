'use client';

import { forwardRef } from 'react';
import { Pagination as MuiPagination } from '@mui/material';
import { PaginationComponent, PaginationProps } from '@/core/design-systems/components/pagination';

// do: ref
// do-not: component, children
const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiPagination ref={ref} {...restProps} />;
});

Pagination.displayName = 'Pagination';

export default Pagination as PaginationComponent;
