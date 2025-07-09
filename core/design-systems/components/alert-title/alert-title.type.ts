import { AlertTitleProps as MuiAlertTitleProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface AlertTitleTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'strong'> {
  props: AdditionalProps & AlertTitleProps;
  defaultComponent: RootComponent;
}

export type AlertTitleComponent = OverridableComponent<AlertTitleTypeMap<AlertTitleProps>>;

export type AlertTitleProps<RootComponent extends React.ElementType = AlertTitleTypeMap['defaultComponent']> = MuiAlertTitleProps & {
  component?: React.ElementType;
};
