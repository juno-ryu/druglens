import '@mui/material/styles';
import '@mui/material/Snackbar';
import { TypeSnackbarVariants } from '@/core/design-systems/components/snackbar/snackbar.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Snackbar' {
  interface SnackbarPropsVariantOverrides extends Record<TypeSnackbarVariants, true> {
    mode?: 'dark' | 'light';
  }
}

declare module 'notistack' {
  interface VariantOverrides {
    default: true;
    success: true;
    error: true;
    info: true;
    warning: true;
    mode: true;
  }
  interface OptionsObject {
    mode?: 'dark' | 'light';
    children?: React.ReactNode;
  }
}
