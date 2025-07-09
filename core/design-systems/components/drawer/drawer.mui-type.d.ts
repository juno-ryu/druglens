import '@mui/material/styles';
import '@mui/material/Drawer';
import { TypeDrawerVariants } from '@/core/design-systems/components/drawer/drawer.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Drawer' {
  interface DrawerPropsVariantOverrides extends Record<TypeDrawerVariants, true> {
    //
  }
}
