import { ToggleButtonProps as MuiToggleButtonProps, ToggleButtonTypeMap as MuiToggleButtonTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { TypeToggleButtonVariants } from '@/core/design-systems/components/toggle-button/toggle-button.const';

export type ToggleButtonComponent = OverridableComponent<MuiToggleButtonTypeMap<ToggleButtonProps>>;

export type ToggleButtonProps<RootComponent extends React.ElementType = MuiToggleButtonTypeMap['defaultComponent']> = MuiToggleButtonProps<RootComponent> & {
  variant?: TypeToggleButtonVariants;
};
