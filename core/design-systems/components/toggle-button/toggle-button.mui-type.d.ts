import '@mui/material/styles';
import '@mui/material/ToggleButton';
import { TypeToggleButtonSizes } from '@/core/design-systems/components/toggle-button/toggle-button.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsSizeOverrides extends Record<TypeToggleButtonSizes, true> {
    //
  }
}
