import '@mui/material/styles';
import '@mui/material/Switch';
import { TypeSwitchSizes } from '@/core/design-systems/components/switch';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Switch' {
  interface SwitchPropsSizeOverrides extends Record<TypeSwitchSizes, true> {
    //
  }
}
