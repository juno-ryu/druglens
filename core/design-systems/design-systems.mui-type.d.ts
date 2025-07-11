import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions, PaletteOptions, Palette } from '@mui/material/styles';
import { TypeCommonPalette } from './theme/palette/palette.const';
import { TypeTypography } from './theme/typography/typography.const';

declare module '@mui/material/styles' {
  interface CustomPalette {
    common: Record<TypeCommonPalette, string>;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  interface Theme extends MuiTheme {
    //
  }
  interface ThemeOptions extends MuiThemeOptions {
    //
  }

  interface TypographyVariants {
    //
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    //
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    //
  }
}

declare module '@emotion/react' {
  interface Theme extends MuiTheme {
    //
  }
}
