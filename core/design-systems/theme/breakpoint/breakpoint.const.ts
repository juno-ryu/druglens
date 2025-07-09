export type TypeBreakpoint = keyof typeof breakpoint;
export const breakpoint = {
  mobile: 0,
  tablet: 600,
  desktop: 1440,
} as const;
