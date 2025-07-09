import { Theme } from '@mui/material';
import { DataGridProProps, GridColumnHeaderParams, GridValidRowModel } from '@mui/x-data-grid-pro';
import { Checkbox, DesignIcon, Loader, Stack, Typography } from '@/core/design-systems';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { PaginationWithDataGrid } from '@/core/shared/components/general/pagination-with-datagrid/pagination-with-datagrid';

export const dataGridSlots: DataGridProProps['slots'] = {
  baseCheckbox: (params: any) => {
    const { checked, inputProps, onChange } = params;
    const { name } = inputProps;
    const isIndeterminate = checked && name === 'select_all_rows';

    return <Checkbox color="augment/purple/600" indeterminate={isIndeterminate} checked={checked} onChange={(e) => onChange(e)} />;
  },
  rowReorderIcon: () => <DesignIcon variant="OrderingTable" />,
  noRowsOverlay: () => (
    <Stack direction="column" gap="8px" alignItems="center" justifyContent="center" sx={(theme) => ({ height: '224px', borderBottom: `1px solid ${theme.palette['gray/200']}` })}>
      <Typography variant="body/body3" color="gray/800" fontWeight={400}>
        데이터가 없습니다.
      </Typography>
    </Stack>
  ),
  pagination: PaginationWithDataGrid,
  loadingOverlay: () => (
    <Stack sx={(theme) => ({ height: '100%', background: theme.palette['gray/dim/50'] })} justifyContent="center" alignItems="center">
      <Loader variant="circle" size={60} color="augment/purple/600" />
    </Stack>
  ),
};

export const dataGridHeader = <T extends GridValidRowModel = GridValidRowModel>(params: GridColumnHeaderParams<T, unknown, unknown>): JSX.Element => {
  const { colDef } = params;
  return (
    <Typography variant="body/body5" color="gray/800" fontWeight={700}>
      {colDef.headerName}
    </Typography>
  );
};

export const dataGridSx = (theme: Theme) => ({
  '&.MuiDataGrid-root': {
    border: 'none !important',
  },
  '& .MuiDataGrid-columnHeaders': {
    background: theme.palette['gray/100'],
    border: `1px solid ${theme.palette['gray/200']}`,
    '& > div': {
      background: 'transparent !important',
    },
  },
  '& .MuiDataGrid-columnHeader': {
    borderBottom: 'none !important',
    borderRight: `1px solid ${theme.palette['gray/200']}`,
    '&.MuiDataGrid-columnHeader--last': {
      borderRight: 'none',
    },
    '.MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& ~ .MuiDataGrid-filler': {
      borderBottom: 'none',
    },
  },
  '& .MuiDataGrid-row': {
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      background: 'transparent',
    },
    '&.Mui-selected': {
      background: theme.palette['primary/dim/100'],
    },
    '&.Mui-selected:hover': {
      background: theme.palette['primary/dim/200'],
    },
  },
  '& .MuiDataGrid-cell': {
    '&:focus, &:active, &:focus-within': {
      outline: 'none',
      outlineOffset: 0,
    },
  },
  '& .MuiDataGrid-filler': {
    '> *:empty': {
      display: 'none',
    },
  },
  '& .overlay-link': {
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      textDecoration: 'none',
      color: 'inherit',
    },
    '&:focus-visible': {
      outline: 'none',
    },
    '&:focus-visible:before': {
      background: theme.palette['primary/dim/100'],
    },
    '&:hover:focus-visible:before': {
      background: theme.palette['primary/dim/200'],
    },
  },
});

export const INITIAL_DATA_GRID_PROPS: Omit<DataGridProProps, 'rows' | 'columns'> = {
  pagination: true,
  disableVirtualization: true,
  disableMultipleRowSelection: true,
  disableRowSelectionOnClick: true,
  disableColumnResize: true,
  disableColumnFilter: true,
  disableColumnSelector: true,
  disableColumnMenu: true,
  disableColumnReorder: true,
  disableAutosize: true,
  disableColumnPinning: true,
  disableChildrenSorting: true,
  disableChildrenFiltering: true,
  disableDensitySelector: true,
  disableColumnSorting: true,
  disableMultipleColumnsFiltering: true,
  disableMultipleColumnsSorting: true,
  rowSelection: false,
  columnHeaderHeight: 58,
  getRowHeight: () => 'auto',
  sx: dataGridSx,
  slots: dataGridSlots,
};

export const INITIAL_PAGINATION_PROPS: PaginationOutput = {
  total: 0,
  last: 0,
  size: 0,
  page: 0,
};
