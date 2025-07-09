import '@mui/material/styles';
import '@mui/material/Typography';
import { TypeTypographyVariants } from '@/core/design-systems/components/typography';

declare module '@mui/material/styles' {
  interface TypographyVariants extends Record<TypeTypographyVariants, React.CSSProperties> {
    //
  }

  interface TypographyVariantsOptions extends Partial<Record<TypeTypographyVariants, React.CSSProperties>> {
    //
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends Record<TypeTypographyVariants, true> {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    button: false;
    inherit: false;
    overline: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;
  }
}
