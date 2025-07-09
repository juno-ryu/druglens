import '@mui/material/styles';
import '@mui/material/Radio';
import { TypeRadioSizes } from '@/core/design-systems/components/radio/radio.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides extends Record<TypeRadioSizes, true> {
    //
  }
}
