'use client';

import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { GridColDef, GridRowId, GridRowSelectionModel, GridRowsProp } from '@mui/x-data-grid-pro';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, DesignIcon, DesignLabel, IconButton, Link, Stack, Typography } from '@/core/design-systems';
import { useSnackbar } from 'notistack';
import { EnumPromotionStatus, PromotionSearchFilter } from '@/core/shared/service/admin/types/promotions';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CustomNetworkError } from '@/core/utils/errors/custom-network-error';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { PromotionOutput } from '@/core/shared/service/output/promotion-output';
import Loading from '@/core/shared/components/general/loading/loading';
import SnackbarError from '@/core/shared/components/overlay/snackbar-error/snackbar-error';
import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import FilterClient from '@/shared/atom-components/common/filter/filter.client';
import { getPromotionStatusLabel, REGION_OPTIONS } from '@/shared/business-components/promotions/promotions.const';
import { revalidatePromotions } from '@/app/[lang]/promotions/actions';

type ListClientProps = {
  title: string;
  list: PromotionOutput[];
  filterProps: PromotionSearchFilter;
  pagination: PaginationOutput;
};

const ListClient = (props: ListClientProps) => {
  const { title, list, filterProps, pagination } = props;

  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm<PromotionSearchFilter>({
    defaultValues: filterProps,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);

  const columns: GridColDef<PromotionOutput & { index: number }>[] = useMemo(() => {
    return [
      {
        field: 'index',
        headerName: '번호',
        width: 40,
        renderHeader: dataGridHeader,
        renderCell: ({ row: { index } }) => (
          <Typography variant={'body/body6'} fontWeight={500}>
            {index + 1}
          </Typography>
        ),
      },
      {
        field: 'title',
        headerName: '기획전 명',
        flex: 1,
        renderHeader: dataGridHeader,
        renderCell: ({ row: { id, title } }) => (
          <Stack width="100%" height="100%" lineHeight="normal" justifyContent={'center'} alignItems="flex-start">
            <Link href={`/promotions/${id}`} onClick={(e) => e.stopPropagation()}>
              <Typography
                variant={'body/body6'}
                fontWeight={500}
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {title}
              </Typography>
            </Link>
          </Stack>
        ),
      },
      {
        field: 'status',
        headerName: '상태',
        width: 80,
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          const { createdAt, updatedAt, publishedAt, suspendedAt, since, until } = params.row;
          const { status, label, color } = getPromotionStatusLabel(createdAt, updatedAt, publishedAt, suspendedAt, since, until);
          return (
            <DesignLabel variant={'filled'} color={color}>
              {label}
            </DesignLabel>
          );
        },
      },
      {
        field: 'regions',
        headerName: '진행 몰',
        width: 200,
        renderHeader: dataGridHeader,
        renderCell: ({ value }) => {
          return (
            <Stack direction="row" height="100%" justifyContent="flex-start" alignItems="center" gap="8px">
              {REGION_OPTIONS.map((region) => {
                const isActive = value?.includes(region.value);
                return (
                  <DesignLabel key={region.value} variant={'outlined'} sx={{ opacity: isActive ? 1 : 0.3 }}>
                    {region.value}
                  </DesignLabel>
                );
              })}
            </Stack>
          );
        },
      },
      {
        field: 'preiod',
        headerName: '진행 기간',
        width: 200,
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          return (
            <Typography variant={'body/body5'} color={'gray/800'}>
              {dayjs(params.row.since).format('YYYY.MM.DD')} - {dayjs(params.row.until).format('YYYY.MM.DD')}
            </Typography>
          );
        },
      },
    ];
  }, []);

  const rows: GridRowsProp = useMemo(() => list.map((item, index) => ({ ...item, index })), [list]);

  const deletablePromotionIds: GridRowSelectionModel = useMemo(() => {
    return list
      .filter((item) => {
        const { createdAt, updatedAt, publishedAt, suspendedAt, since, until } = item;
        const { status } = getPromotionStatusLabel(createdAt, updatedAt, publishedAt, suspendedAt, since, until);
        return Boolean(status !== EnumPromotionStatus.DRAFT);
      })
      .map((item) => item.id);
  }, [list]);

  const onSubmit = (data: PromotionSearchFilter) => {
    const { filter } = ADMIN_URIS['promotions'](data);
    router.replace(`?${filter}`);
  };

  const onReset = () => {
    methods.reset();
    router.push('/promotions');
  };

  const onCheckSelectionModel = (newRowSelectionModel: GridRowSelectionModel) => {
    if (newRowSelectionModel.some((id) => deletablePromotionIds.includes(id))) {
      enqueueSnackbar('프로모션은 진행기간이 오늘 이후 이면서, 작성중인 프로모션만 삭제가 가능합니다.', { variant: 'error', mode: 'dark' });
    } else {
      setSelectedIds(newRowSelectionModel);
    }
  };

  const handleOnDeletePromotion = async () => {
    setIsLoading(true);
    try {
      await ADMIN_APIS['promotions'].delete(selectedIds as UUIDAsString[]);
      await revalidatePromotions(filterProps);
      enqueueSnackbar(`선택한 ${selectedIds.length}개 프로모션을 삭제했습니다`, { variant: 'success', mode: 'dark' });
    } catch (error) {
      if (error instanceof CustomNetworkError) {
        enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Loading isLoading={isLoading} />
        <Stack gap={5}>
          <Stack gap={1} direction="row" justifyContent="space-between" alignItems={'center'}>
            <Typography variant={'title/title3'} fontWeight={700}>
              {title}
            </Typography>
            <Link href={'/promotions/create'}>
              <Button color={'augment/purple/600'} size={'extraLarge'} startIcon={<DesignIcon variant={'Plus'} />}>
                신규 기획전 추가
              </Button>
            </Link>
          </Stack>
          <Stack gap={2.5}>
            <FilterClient<PromotionSearchFilter>
              total={pagination.total}
              onSubmit={(event) => {
                event.preventDefault();
                methods.handleSubmit(onSubmit)();
              }}
              onReset={onReset}
              from="promotions"
              fieldKeys={{
                title: 'title',
                since: 'since',
                until: 'until',
                status: 'status',
                periodField: 'periodField',
              }}
            />
            <Stack direction="column">
              {Boolean(selectedIds.length) && (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={(theme) => ({
                    width: '100%',
                    background: theme.palette['blue/50'],
                    p: '26px 16px',
                  })}
                >
                  <Typography variant="body/body5" fontWeight={600}>
                    {selectedIds.length}개 선택
                  </Typography>
                  <Typography variant="body/body6" ml="10px" mr="auto">
                    상품은 바로 삭제됩니다.
                  </Typography>
                  <IconButton color="augment/gray/800" sx={{ px: '16px' }} onClick={handleOnDeletePromotion}>
                    <DesignIcon variant="Trash" width="18px" height="18px" />
                  </IconButton>
                </Stack>
              )}
              <DataGridClient
                columns={columns}
                rows={rows}
                rowSelection
                checkboxSelection
                disableMultipleRowSelection={false}
                getRowHeight={() => 58}
                rowCount={pagination.total}
                paginationMode="server"
                pagination={true}
                paginationModel={{ ...pagination, pageSize: pagination.size }}
                rowSelectionModel={selectedIds}
                onRowSelectionModelChange={onCheckSelectionModel}
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
