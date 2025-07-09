import '@mui/material/styles';
import '@mui/material/Checkbox';
import { TypeCheckboxSizes } from '@/core/design-systems/components/checkbox/checkbox.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides extends Record<TypeCheckboxSizes, true> {
    //
  }
}
