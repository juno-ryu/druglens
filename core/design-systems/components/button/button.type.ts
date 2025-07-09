import { ButtonProps as MuiButtonProps, ButtonTypeMap as MuiButtonTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type EnumButtonBumper = (typeof EnumButtonBumper)[keyof typeof EnumButtonBumper];
export const EnumButtonBumper = {
  Thick: 'thick',
  Thin: 'thin',
  Both: 'both',
} as const;

export type ButtonComponent = OverridableComponent<MuiButtonTypeMap<ButtonProps>>;

export type ButtonProps<RootComponent extends React.ElementType = MuiButtonTypeMap['defaultComponent']> = MuiButtonProps<RootComponent> & {
  inactivated?: boolean;
  frontBumper?: EnumButtonBumper;
  backBumper?: EnumButtonBumper;
  relaxBorder?: boolean;
};
