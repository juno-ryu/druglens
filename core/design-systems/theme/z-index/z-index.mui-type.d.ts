import '@mui/material/styles';
import { ZIndex as MuiZIndex } from '@mui/material/styles/zIndex';
import { TypeZIndex } from '@/core/design-systems/theme/z-index';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/styles/zIndex' {
  interface ZIndex extends MuiZIndex, Record<TypeZIndex, number> {
    //
  }
}
