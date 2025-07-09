import { PaginationProps as MuiPaginationProps } from '@mui/material';

export type PaginationComponent = React.ComponentType<PaginationProps>;

export type PaginationProps = Omit<MuiPaginationProps, 'component' | 'children'> & {
  //
};
