import '@mui/material/styles';
import '@mui/material/Button';
import { TypeButtonSizes, TypeButtonVariants } from '@/core/design-systems/components/button/button.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides extends Record<TypeButtonVariants, true> {
    //
  }

  interface ButtonPropsSizeOverrides extends Record<TypeButtonSizes, true> {
    //
  }
}
