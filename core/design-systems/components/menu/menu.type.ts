import { MenuProps as MuiMenuProps } from '@mui/material';

export type MenuComponent = React.ComponentType<MuiMenuProps>;

export type MenuProps = Omit<MuiMenuProps, 'component'> & {
  //
};
