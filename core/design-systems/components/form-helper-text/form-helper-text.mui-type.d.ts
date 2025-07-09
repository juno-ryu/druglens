import '@mui/material/styles';
import '@mui/material/FormHelperText';
import { TypeFormHelperTextVariants } from '@/core/design-systems/components/form-helper-text/form-helper-text.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/FormHelperText' {
  interface FormHelperTextPropsVariantOverrides extends Record<TypeFormHelperTextVariants, true> {
    //
  }
}
