import { BoxProps as MuiBoxProps, TypographyProps as MuiTypographyProps } from '@mui/material';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';

export interface DesignStatTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'span'> {
  props: AdditionalProps & DesignStatOwnProps;
  defaultComponent: RootComponent;
}

export type DesignStatComponent = OverridableComponent<DesignStatTypeMap<DesignStatProps>>;

export interface DesignStatOwnProps extends MuiBoxProps {
  unit?: string;
  slots?: {
    typography?: React.ElementType;
    unit?: React.ElementType;
  };
  slotProps?: {
    root?: MuiBoxProps;
    typography?: MuiTypographyProps;
    unit?: MuiTypographyProps;
  };
  classes?: {
    root?: string;
    typography?: string;
    unit?: string;
  };
}

export type DesignStatProps<RootComponent extends React.ElementType = DesignStatTypeMap['defaultComponent'], AdditionalProps = {}> = OverrideProps<
  DesignStatTypeMap<AdditionalProps, RootComponent>,
  RootComponent
> & {
  component?: React.ElementType;
};
