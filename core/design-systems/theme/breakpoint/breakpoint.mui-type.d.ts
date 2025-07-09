import '@mui/material/styles';
import { TypeBreakpoint } from '@/core/design-systems/theme/breakpoint';

declare module '@mui/material/styles' {
  interface BreakpointOverrides extends Record<TypeBreakpoint, true> {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
