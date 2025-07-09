import '@mui/material/styles';
import '@mui/material/TextField';
import { TypeTextFieldSizes } from '@/core/design-systems/components/text-field';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides extends Record<TypeTextFieldSizes, true> {
    //
  }
}
