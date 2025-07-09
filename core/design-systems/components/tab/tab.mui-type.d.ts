import '@mui/material/styles';
import '@mui/material/Tab';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Tab' {
  interface TabPropsVariantOverrides extends Record<TypeTabVariants, true> {
    //
  }
}
