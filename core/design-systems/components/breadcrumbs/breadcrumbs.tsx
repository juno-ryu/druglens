'use client';

import { forwardRef } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { BreadcrumbsComponent, BreadcrumbsProps } from '@/core/design-systems/components/breadcrumbs';

// do: ref, component, children
// do-not: (empty)
const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiBreadcrumbs ref={ref} {...restProps}>
      {children}
    </MuiBreadcrumbs>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs as BreadcrumbsComponent;
