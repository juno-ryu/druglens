import '@mui/material/styles';
import '@mui/material/IconButton';
import { TypeIconButtonSizes } from '@/core/design-systems/components/icon-button/icon-button.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsSizeOverrides extends Record<TypeIconButtonSizes, true> {
    //
  }
}
