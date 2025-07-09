import { ToggleButtonGroupProps as MuiToggleButtonGroupProps } from '@mui/material';
import { TypeToggleButtonGroupVariants } from '@/core/design-systems/components/toggle-button-group/toggle-button-group.const';

export type ToggleButtonGroupComponent = React.ComponentType<ToggleButtonGroupProps>;

export type ToggleButtonGroupProps = Omit<MuiToggleButtonGroupProps, 'component'> & {
  variant?: TypeToggleButtonGroupVariants;
};
