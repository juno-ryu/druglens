import '@mui/material/styles';
import '@mui/material/Divider';
import { TypeDividerVariants } from '@/core/design-systems/components/divider/divider.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides extends Record<TypeDividerVariants, true> {
    //
  }
}
