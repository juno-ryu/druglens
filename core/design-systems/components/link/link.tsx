'use client';

import { forwardRef } from 'react';
import { Link as MuiLink } from '@mui/material';
import { LinkComponent, LinkProps } from '@/core/design-systems/components/link';

// do: ref, component, children
// do-not: (empty)
const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiLink ref={ref} {...restProps}>
      {children}
    </MuiLink>
  );
});

Link.displayName = 'Link';

export default Link as LinkComponent;
