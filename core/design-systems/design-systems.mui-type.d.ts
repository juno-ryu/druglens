import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme extends MuiTheme {
    //
  }
  interface ThemeOptions extends MuiThemeOptions {
    //
  }
}

declare module '@emotion/react' {
  interface Theme extends MuiTheme {
    //
  }
}
