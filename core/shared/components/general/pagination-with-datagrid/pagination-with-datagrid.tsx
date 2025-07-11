'use client';

import { useEffect } from 'react';

import { MenuItem, Pagination, Stack, TextField } from '@/core/design-systems';
import { gridPaginationModelSelector, gridRowCountSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid-pro';

export const SIZE_OPTIONS = [1, 10, 20, 50, 100];

export const PaginationWithDataGrid = () => {
  const apiRef = useGridApiContext();
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    apiRef.current.setPage(value - 1);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<{ value: string }>) => {
    apiRef.current.setPageSize(Number(event.target.value));
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2} gap="40px">
      <TextField
        select
        hiddenLabel
        value={paginationModel.pageSize}
        size="small"
        variant="standard"
        onChange={handlePageSizeChange}
        sx={(theme) => ({
          '& > :has(input, textarea, select, div[role="combobox"]):after': { borderColor: theme.palette['purple/600'] },
        })}
        slotProps={{
          select: {
            // sx: (theme) => ({
            //   margin: '-4px -13px',
            //   width: '120px',
            //   scale: 0.78,
            //   background: theme.palette['white'],
            // }),
            MenuProps: {
              slotProps: {
                paper: {
                  sx: {
                    background: 'transparent',
                    '& ul': {
                      background: 'transparent',
                    },
                  },
                },
              },
            },
          },
        }}
      >
        {SIZE_OPTIONS.map((size) => (
          <MenuItem key={size} value={size}>
            {size}개씩 보기
          </MenuItem>
        ))}
      </TextField>
      <Pagination count={Math.ceil(apiRef.current.getRowsCount() / paginationModel.pageSize)} page={paginationModel.page + 1} onChange={handlePageChange} />
    </Stack>
  );
};
