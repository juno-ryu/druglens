import { TypographyProps as MuiTypographyProps, TypographyTypeMap as MuiTypographyTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type TypographyComponent = OverridableComponent<MuiTypographyTypeMap<TypographyProps>>;

export type TypographyProps<RootComponent extends React.ElementType = MuiTypographyTypeMap['defaultComponent']> = MuiTypographyProps<RootComponent> & {
  //
};
