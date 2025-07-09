'use client';

import { forwardRef } from 'react';
import { useThemeProps } from '@mui/material';
import { CircularProgress } from '@/core/design-systems';
import { LoaderComponent, LoaderProps } from '@/core/design-systems/components/loader';
import { MuiLoaderCircle, MuiLoaderDot, MuiLoaderRoot } from '@/core/design-systems/components/loader/loader.style';

// do: ref, component, children
// do-not: (empty)
const Loader = forwardRef<HTMLDivElement, LoaderProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MuiLoader' });
  const { variant, slotProps = {}, className = '', children, ...other } = props;
  const ownerState = { ...props, variant };
  const rootClassList = ['MuiLoader', `MuiLoader-${variant}`];

  return (
    <MuiLoaderRoot ref={ref} className={`${rootClassList.join(' ')} ${className}`} ownerState={ownerState} data-variant={variant} {...slotProps?.root} {...other}>
      {variant === 'dot' && <MuiLoaderDot ownerState={ownerState} {...slotProps?.dot} />}
      {variant === 'circle' && <MuiLoaderCircle ownerState={ownerState} color={other?.color} size={other?.size} {...slotProps?.circle} />}
      {children}
    </MuiLoaderRoot>
  );
});

Loader.displayName = 'Loader';

export default Loader as LoaderComponent;
