import '@mui/material/styles';
import '@mui/material/PaginationItem';
import { TypePaginationItemSizes, TypePaginationItemVariants } from '@/core/design-systems/components/PaginationItem/PaginationItem.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/PaginationItem' {
  interface PaginationItemPropsVariantOverrides extends Record<TypePaginationItemVariants, true> {
    //
  }

  interface PaginationItemPropsSizeOverrides extends Record<TypePaginationItemSizes, true> {
    //
  }
}
