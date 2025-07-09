import '@mui/material/styles';
import '@mui/material/Pagination';
import { TypePaginationSizes, TypePaginationVariants } from '@/core/design-systems/components/pagination/pagination.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Pagination' {
  interface PaginationPropsVariantOverrides extends Record<TypePaginationVariants, true> {
    //
  }

  interface PaginationPropsSizeOverrides extends Record<TypePaginationSizes, true> {
    //
  }
}
