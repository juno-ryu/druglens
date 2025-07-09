import '@mui/material/styles';
import '@mui/material/ToggleButtonGroup';
import { TypeToggleButtonGroupSizes } from '@/core/design-systems/components/toggle-button-group/toggle-button-group.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsSizeOverrides extends Record<TypeToggleButtonGroupSizes, true> {
    //
  }
}
