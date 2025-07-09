import { BoxProps as MuiBoxProps, SvgIconProps as MuiSvgIconProps } from '@mui/material';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { EnabledKeys } from '@/core/utils/types/selector/key';
import * as SvgIconComponents from '@/core/design-systems/components/design-icon/design-icon.import';
import { DesignIconPropsColorOverrides } from '@/core/design-systems/components/design-icon/design-icon.mui-type';

export interface DesignIconTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'i'> {
  props: AdditionalProps & DesignIconOwnProps;
  defaultComponent: RootComponent;
}

export type DesignIconComponent = OverridableComponent<DesignIconTypeMap<DesignIconProps>>;

export interface DesignIconOwnProps extends MuiBoxProps {
  variant: keyof typeof SvgIconComponents;
  color?: EnabledKeys<DesignIconPropsColorOverrides>;
  titleAccess?: MuiSvgIconProps['titleAccess'];
  slotProps?: {
    root?: MuiBoxProps;
    svgIcon?: MuiSvgIconProps;
  };
  classes?: {
    root?: string;
    svgIcon?: string;
  };
}

export type DesignIconProps<RootComponent extends React.ElementType = DesignIconTypeMap['defaultComponent'], AdditionalProps = {}> = OverrideProps<
  DesignIconTypeMap<AdditionalProps, RootComponent>,
  RootComponent
> & {
  component?: React.ElementType;
};
