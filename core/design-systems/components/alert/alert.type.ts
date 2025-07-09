import { AlertProps as MuiAlertProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { TypeAlertSizes } from '@/core/design-systems/components/alert/alert.const';

export interface AlertTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'div'> {
  props: AdditionalProps & AlertProps;
  defaultComponent: RootComponent;
}

export type AlertComponent = OverridableComponent<AlertTypeMap<AlertProps>>;

export type AlertProps<RootComponent extends React.ElementType = AlertTypeMap['defaultComponent']> = MuiAlertProps & {
  component?: React.ElementType;
  size?: TypeAlertSizes;
  /** @deprecated Use `color`, `core/design-systems` do not support `severity` */
  severity?: undefined;
};
