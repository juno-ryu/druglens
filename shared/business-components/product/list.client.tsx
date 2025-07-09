'use client';

import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { GridColDef, GridRowSelectionModel, GridRowsProp } from '@mui/x-data-grid-pro';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, DesignIcon, DesignLabel, IconButton, Link, Stack, Typography } from '@/core/design-systems';
import { ProductAssetsSearchFilter } from '@/core/shared/service/admin/types/product';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import FilterClient from '@/shared/atom-components/common/filter/filter.client';
import VisibleDialogClient from '@/shared/business-components/product/dialog/visible-dialog.client';
import LoadingClient from '@/shared/business-components/product/layout/loading.client';
import { getExposureStatusLabel, getPublishStatusLabel, getRevisionStatusLabel } from '@/shared/business-components/product/product.const';

type ListClientProps = {
  title: string;
  list: AssetProductOutput[];
  filterProps: ProductAssetsSearchFilter;
  pagination: PaginationOutput;
};

const ListClient = (props: ListClientProps) => {
  const { title, list, filterProps, pagination } = props;
  const router = useRouter();
  const methods = useForm<ProductAssetsSearchFilter>({
    defaultValues: filterProps,
  });

  const { onOpen, onClose } = useDialog();
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'productNo',
        headerName: '상품 번호',
        width: 150,
        dataGridHeader: dataGridHeader,
        renderCell: (params) => (
          <Stack py="20px" justifyContent="flex-start" alignItems="flex-start">
            <Typography variant={'body/body5'} color={'gray/600'}>
              {params.row.productNo}
            </Typography>
          </Stack>
        ),
      },
      {
        field: 'isAdult',
        headerName: '19+',
        width: 70,
        dataGridHeader: dataGridHeader,
        renderCell: (params) => (
          <Stack py="20px" justifyContent="flex-start" alignItems="flex-start">
            <Typography variant={'body/body5'} color={'gray/600'}>
              {!params.row.isAdult && (
                <DesignLabel variant={'filled'} color="augment/red/600">
                  19+
                </DesignLabel>
              )}
            </Typography>
          </Stack>
        ),
      },
      {
        field: 'title',
        headerName: '제목',
        flex: 3,
        dataGridHeader: dataGridHeader,
        renderCell: ({ row: { id, title, regions } }) => (
          <Link href={`/product/${id}`} onClick={(e) => e.stopPropagation()}>
            <Stack py="20px" direction="row" gap={1} justifyContent="flex-start" alignItems="flex-start">
              {regions.map((region: string) => (
                <DesignLabel key={region} variant={'outlined'}>
                  {region}
                </DesignLabel>
              ))}
              <Typography variant={'body/body5'} color={'gray/800'} ml={1}>
                {title}
              </Typography>
            </Stack>
          </Link>
        ),
      },
      {
        field: 'brand',
        headerName: '브랜드',
        flex: 1,
        dataGridHeader: dataGridHeader,
        renderCell: (params) => (
          <Stack py="20px" justifyContent="flex-start" alignItems="flex-start">
            <Typography variant={'body/body5'} color={'gray/600'}>
              {params.row.brand.name}
            </Typography>
          </Stack>
        ),
      },
      {
        field: 'publish',
        headerName: '등록 여부',
        align: 'center',
        headerAlign: 'center',
        width: 90,
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          const { suspendedAt, publishedAt } = params.row;
          const result = getPublishStatusLabel(suspendedAt, publishedAt);
          return (
            <Stack height="100%" alignItems={'center'} justifyContent={'center'}>
              <DesignLabel variant={'filled'} color={result.color}>
                {result.label}
              </DesignLabel>
            </Stack>
          );
        },
      },
      {
        field: 'status',
        headerName: '상태',
        align: 'center',
        headerAlign: 'center',
        width: 90,
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          const { status, suspendedAt, exposedAt } = params.row;
          const result = getRevisionStatusLabel(status, suspendedAt, exposedAt);
          return (
            <Stack height="100%" alignItems={'center'} justifyContent={'center'}>
              <DesignLabel variant={'filled'} color={result.color}>
                {result.label}
              </DesignLabel>
            </Stack>
          );
        },
      },
      {
        field: 'visible',
        headerName: '노출 여부',
        align: 'center',
        headerAlign: 'center',
        width: 90,
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          const { suspendedAt, exposedAt } = params.row;
          const result = getExposureStatusLabel(suspendedAt, exposedAt);
          return (
            <Stack height="100%" alignItems={'center'} justifyContent={'center'}>
              <DesignLabel variant={'filled'} color={result.color}>
                {result.label}
              </DesignLabel>
            </Stack>
          );
        },
      },
    ];
  }, []);

  const rows: GridRowsProp = useMemo(() => {
    return list.map((product) => ({
      productNo: product.productNo,
      isAdult: product.isAdult,
      title: product.title,
      brand: product.brand,
      status: product.status,
      regions: product.regions,
      id: product.id,
      suspendedAt: product.suspendedAt,
      publishedAt: product.publishedAt,
      exposedAt: product.exposedAt,
    }));
  }, [list]);

  const onSubmit = (data: ProductAssetsSearchFilter) => {
    const { filter } = ADMIN_URIS['product/assets'](data);
    router.replace(`?${filter}`);
  };

  const onReset = () => {
    methods.reset();
    router.push('/product');
  };

  const handleOnChangeVisible = (visible: boolean) => {
    onOpen({
      key: 'dialog-visible',
      onClose: () => onClose('dialog-visible'),
      slotProps: { paper: { sx: { borderRadius: '8px' } } },
      children: <VisibleDialogClient visible={visible} selectedIds={selectedIds as UUIDAsString[]} onClose={() => onClose('dialog-visible')} />,
    });
  };

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <LoadingClient />
        <Stack gap={5}>
          <Stack gap={1}>
            <Typography variant={'title/title3'} fontWeight={700} width={'100%'}>
              {title}
            </Typography>
          </Stack>
          <Stack gap={2.5}>
            <FilterClient<ProductAssetsSearchFilter>
              total={pagination.total}
              onSubmit={(event) => {
                event.preventDefault();
                methods.handleSubmit(onSubmit)();
              }}
              onReset={onReset}
              from="product"
              fieldKeys={{
                keyfield: 'keyfield',
                keyword: 'keyword',
                statuses: 'statuses',
                visible: 'visible',
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
                  startIcon={<DesignIcon variant="Eye" />}
                  onClick={() => handleOnChangeVisible(true)}
                >
                  노출
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="augment/purple/600"
                  sx={{ width: 100 }}
                  disabled={selectedIds.length === 0}
                  startIcon={<DesignIcon variant="EyeOff" />}
                  onClick={() => handleOnChangeVisible(false)}
                >
                  비노출
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
                  methods.setValue('page', newModel.page);
                  methods.setValue('size', newModel.pageSize);
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
