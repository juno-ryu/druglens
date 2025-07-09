'use client';

import { createBreakpoint } from 'react-use';
import useMounted from '@/core/shared/hooks/effect/use-mounted/use-mounted';
import { breakpoint, TypeBreakpoint } from '@/core/design-systems/theme/breakpoint';

const useResponsive = () => {
  const { isMounted } = useMounted();
  const useBreakpoint = createBreakpoint(breakpoint);
  const currentBreakpoint = useBreakpoint() as TypeBreakpoint;
  const currentDevice = isMounted ? currentBreakpoint : undefined;

  return {
    currentDevice,
    isDesktop: currentDevice === 'desktop',
    isTablet: currentDevice === 'tablet',
    isMobile: currentDevice === 'mobile',
  };
};

export default useResponsive;
