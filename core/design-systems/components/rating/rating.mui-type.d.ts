import '@mui/material/styles';
import '@mui/material/Rating';
import { TypeRatingSizes } from '@/core/design-systems/components/rating/rating.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Rating' {
  interface RatingPropsSizeOverrides extends Record<TypeRatingSizes, true> {
    //
  }
}
