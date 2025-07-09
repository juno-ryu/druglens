import { BoxProps as MuiBoxProps, TypographyProps as MuiTypographyProps } from '@mui/material';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { EnabledKeys } from '@/core/utils/types/selector/key';
import { TypeDesignLabelVariants } from '@/core/design-systems/components/design-label/design-label.const';
import { DesignLabelPropsColorOverrides } from '@/core/design-systems/components/design-label/design-label.mui-type';

export interface DesignLabelTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'span'> {
  props: AdditionalProps & DesignLabelOwnProps;
  defaultComponent: RootComponent;
}

export type DesignLabelComponent = OverridableComponent<DesignLabelTypeMap<DesignLabelProps>>;

export interface DesignLabelOwnProps extends MuiBoxProps {
  variant?: TypeDesignLabelVariants;
  color?: EnabledKeys<DesignLabelPropsColorOverrides>;
  relaxBorder?: boolean;
  slots?: {
    typography?: React.ElementType;
  };
  slotProps?: {
    root?: MuiBoxProps;
    typography?: MuiTypographyProps;
  };
  classes?: {
    root?: string;
    typography?: string;
  };
}

export type DesignLabelProps<RootComponent extends React.ElementType = DesignLabelTypeMap['defaultComponent'], AdditionalProps = {}> = OverrideProps<
  DesignLabelTypeMap<AdditionalProps, RootComponent>,
  RootComponent
> & {
  component?: React.ElementType;
};
