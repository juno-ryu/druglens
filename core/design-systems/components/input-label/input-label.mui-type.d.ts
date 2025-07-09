import '@mui/material/styles';
import '@mui/material/InputLabel';
import { TypeInputLabelSizes } from '@/core/design-systems/components/input-label/input-label.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/InputLabel' {
  interface InputLabelPropsSizeOverrides extends Record<TypeInputLabelSizes, true> {
    //
  }
}
