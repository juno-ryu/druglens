import { SelectProps as MuiSelectProps, SelectVariants as MuiSelectVariants } from '@mui/material';
import { MenuItemProps } from '@/core/design-systems/components/menu-item';

export type SelectComponent = React.ComponentType<SelectProps>;

export type SelectProps<Variant extends MuiSelectVariants = MuiSelectVariants> = Omit<MuiSelectProps<Variant>, 'component'> & {
  adornment?: MenuItemProps['adornment'];
};
