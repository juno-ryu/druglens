import '@mui/material/styles';
import '@mui/material/Chip';
import { TypeChipSizes, TypeChipVariants } from '@/core/design-systems/components/chip/chip.const';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides extends Record<TypeChipVariants, true> {
    //
  }

  interface ChipPropsSizeOverrides extends Record<TypeChipSizes, true> {
    //
  }
}
