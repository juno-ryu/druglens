'use client';

import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Button,
  DesignIcon,
  DesignLabel,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@/core/design-systems';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import {
  GridColDef,
  GridRowSelectionModel,
  GridRowsProp,
} from '@mui/x-data-grid-pro';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import FilterClient from '@/shared/atom-components/common/filter/filter.client';
import ExampleDialogClient from '@/shared/business-components/examples/dialog/example-dialog.client';
import { getExampleStatusLabel } from '@/shared/business-components/examples/example.const';
import {
  EnumExampleStatus,
  ExampleFormValues,
} from '@/shared/business-components/examples/example.type';

type ExampleOutput = {
  id: UUIDAsString;
  title: string;
  description: string;
  status: EnumExampleStatus;
  createdAt: string;
};

type ListClientProps = {
  title: string;
  list: ExampleOutput[];
  filterProps: ExampleFormValues;
  pagination: PaginationOutput;
};

const ListClient = (props: ListClientProps) => {
  const { title, list, filterProps, pagination } = props;
  const router = useRouter();
  const methods = useForm<ExampleFormValues>({
    defaultValues: filterProps,
  });

  const { onOpen, onClose } = useDialog();
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'id',
        headerName: 'ID',
        width: 150,
        dataGridHeader: dataGridHeader,
        renderCell: (params) => (
          <Stack py="20px" justifyContent="flex-start" alignItems="flex-start">
            <Typography variant={'body/body5'} color={'gray/600'}>
              {params.row.id}
            </Typography>
          </Stack>
        ),
      },
      {
        field: 'title',
        headerName: '제목',
        flex: 1,
        dataGridHeader: dataGridHeader,
        renderCell: ({ row: { id, title } }) => (
          <Link href={`/example/${id}`} onClick={(e) => e.stopPropagation()}>
            <Stack
              py="20px"
              direction="row"
              gap={1}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography variant={'body/body5'} color={'gray/800'} ml={1}>
                {title}
              </Typography>
            </Stack>
          </Link>
        ),
      },
      {
        field: 'status',
        headerName: '상태',
        align: 'center',
        headerAlign: 'center',
        width: 90,
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          const { status, createdAt } = params.row;
          const result = getExampleStatusLabel(status, createdAt);
          return (
            <Stack
              height="100%"
              alignItems={'center'}
              justifyContent={'center'}
            >
              <DesignLabel variant={'filled'} color={result.color}>
                {result.label}
              </DesignLabel>
            </Stack>
          );
        },
      },
      {
        field: 'createdAt',
        headerName: '생성일',
        width: 180,
        dataGridHeader: dataGridHeader,
        renderCell: (params) => (
          <Stack py="20px" justifyContent="flex-start" alignItems="flex-start">
            <Typography variant={'body/body5'} color={'gray/600'}>
              {dayjs(params.row.createdAt).format('YYYY.MM.DD HH:mm')}
            </Typography>
          </Stack>
        ),
      },
    ];
  }, []);

  const rows: GridRowsProp = useMemo(() => {
    return list.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      status: item.status,
      createdAt: item.createdAt,
    }));
  }, [list]);

  const onSubmit = (data: ExampleFormValues) => {
    // Replace with actual API call or routing logic for examples
    console.log('Filter submitted:', data);
    // Example: router.replace(`/examples?${new URLSearchParams(data as any).toString()}`);
  };

  const onReset = () => {
    methods.reset();
    router.push('/example');
  };

  const handleExampleAction = (actionType: string) => {
    onOpen({
      key: 'dialog-example',
      onClose: () => onClose('dialog-example'),
      slotProps: { paper: { sx: { borderRadius: '8px' } } },
      children: (
        <ExampleDialogClient
          actionType={actionType}
          selectedIds={selectedIds as UUIDAsString[]}
          onClose={() => onClose('dialog-example')}
        />
      ),
    });
  };

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <LoadingClient /> */}
        <Stack gap={5}>
          <Stack gap={1}>
            <Typography
              variant={'title/title3'}
              fontWeight={700}
              width={'100%'}
            >
              {title}
            </Typography>
          </Stack>
          <Stack gap={2.5}>
            <FilterClient<ExampleFormValues>
              total={pagination.total}
              onSubmit={(event) => {
                event.preventDefault();
                methods.handleSubmit(onSubmit)();
              }}
              onReset={onReset}
              from="examples"
              fieldKeys={{
                title: 'title',
                status: 'status',
              }}
            />
            <Stack direction="column">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={(theme) => ({
                  width: '100%',
                  background: theme.palette['blue/50'],
                  p: '26px 16px',
                  gap: '8px',
                })}
              >
                <Typography variant="body/body5" fontWeight={600}>
                  {selectedIds.length}개 선택
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  color="augment/purple/600"
                  sx={{ ml: 'auto', width: 100 }}
                  disabled={selectedIds.length === 0}
                  startIcon={<DesignIcon variant="CheckFill" />}
                  onClick={() => handleExampleAction('approve')}
                >
                  승인
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="augment/purple/600"
                  sx={{ width: 100 }}
                  disabled={selectedIds.length === 0}
                  startIcon={<DesignIcon variant="CloseBold" />}
                  onClick={() => handleExampleAction('reject')}
                >
                  거부
                </Button>
              </Stack>
              <DataGridClient
                columns={columns}
                rows={rows}
                rowSelection
                checkboxSelection
                onRowSelectionModelChange={(newRowSelectionModel) => {
                  setSelectedIds(newRowSelectionModel);
                }}
                disableRowSelectionOnClick={false}
                disableMultipleRowSelection={false}
                rowCount={pagination.total}
                paginationMode="server"
                paginationModel={{ ...pagination, pageSize: pagination.size }}
                onPaginationModelChange={(newModel) => {
                  // methods.setValue('page', newModel.page);
                  // methods.setValue('size', newModel.pageSize);
                  methods.handleSubmit(onSubmit)();
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </LocalizationProvider>
    </FormProvider>
  );
};

export default ListClient;
