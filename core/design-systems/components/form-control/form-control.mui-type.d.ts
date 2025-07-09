import '@mui/material/styles';
import '@mui/material/FormControl';

declare module '@mui/material/styles' {
  //
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsSizeOverrides {
    small: false;
    medium: false;
  }
}
