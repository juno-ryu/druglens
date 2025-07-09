import '@mui/material/styles';
import '@mui/material/InputBase';
import { TypeInputBaseSizes } from '@/core/design-systems/components/InputBase/InputBase.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides extends Record<TypeInputBaseSizes, true> {
    //
  }
}
