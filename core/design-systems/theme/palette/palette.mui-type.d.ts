import '@mui/material/styles';
import '@mui/material/Alert';
import '@mui/material/Button';
import '@mui/material/Checkbox';
import '@mui/material/Chip';
import '@mui/material/FormControl';
import '@mui/material/FormLabel';
import '@mui/material/IconButton';
import '@mui/material/InputBase';
import '@mui/material/Radio';
import '@mui/material/Switch';
import '@mui/material/SvgIcon';
import '@mui/material/TextField';
import '@mui/material/ToggleButton';
import '@mui/material/ToggleButtonGroup';
import '@mui/material/Typography';
import '@mui/material/CircularProgress';
import '@mui/material/LinearProgress';
import '@mui/material/Pagination';
import '@mui/material/PaginationItem';
import '@/core/design-systems/components/loader/loader.mui-type';
import '@/core/design-systems/components/design-icon/design-icon.mui-type';
import '@/core/design-systems/components/design-label/design-label.mui-type';
import { TypeAugmentColorPalette, TypeCommonPalette, TypeGradientColorPalette, TypeHexColorPalette, TypeStatePalette } from '@/core/design-systems/theme/palette';

type TypeRecordPalette<T> = Record<TypeCommonPalette, T> &
  Record<TypeHexColorPalette, T> &
  Record<TypeAugmentColorPalette, T> &
  Record<TypeStatePalette, T> &
  Record<TypeGradientColorPalette, T>;

declare module '@mui/material/styles' {
  interface Palette extends TypeRecordPalette<string | PaletteColor> {
    //
  }

  interface PaletteOptions extends Partial<TypeRecordPalette<string | PaletteColor>> {
    //
  }
}

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/FormLabel' {
  interface FormLabelPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/Pagination' {
  interface PaginationPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/PaginationItem' {
  interface PaginationItemPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}
declare module '@/core/design-systems/components/loader/loader.mui-type' {
  interface LoaderPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@/core/design-systems/components/design-icon/design-icon.mui-type' {
  interface DesignIconPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}

declare module '@/core/design-systems/components/design-label/design-label.mui-type' {
  interface DesignLabelPropsColorOverrides extends TypeRecordPalette<true> {
    //
  }
}
