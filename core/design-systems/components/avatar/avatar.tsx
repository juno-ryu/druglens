'use client';

import { forwardRef } from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import { AvatarComponent, AvatarProps } from '@/core/design-systems/components/avatar';

// do: ref, component, children
// do-not: (empty)
const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { children, ...restProps } = props;
  return (
    <MuiAvatar ref={ref} {...restProps}>
      {children}
    </MuiAvatar>
  );
});
Avatar.displayName = 'Avatar';

export default Avatar as AvatarComponent;
