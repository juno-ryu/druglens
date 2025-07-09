'use client';

import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { orderBy, sortBy } from 'lodash';
import dayjs from 'dayjs';
import Paper from '@mui/material/Paper';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid-pro';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, DesignIcon, DesignLabel, Link, Stack, Typography } from '@/core/design-systems';
import { PromotionSearchFilter } from '@/core/shared/service/admin/types/promotions';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { PromotionStatus } from '@/core/shared/service/enum/promotion-status';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { ProductApprovalOutput } from '@/core/shared/service/output/product-approval-output';
import { PromotionOutput } from '@/core/shared/service/output/promotion-output';
import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import FilterClient from '@/shared/atom-components/common/filter/filter.client';
import { getRevisionStatusLabel } from '@/shared/business-components/product/product.const';

type HistoryClientProps = {
  approvals: ProductApprovalOutput[];
};

const HistoryClient = (props: HistoryClientProps) => {
  const { approvals } = props;
  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; productId?: string; comparisonId?: string }>();
  const { productId, comparisonId } = params;

  const [visibleHistory, setVisibleHistory] = useState<boolean>(true);

  const columns: GridColDef[] = useMemo(() => {
    return [
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
        field: 'message',
        headerName: '내용',
        flex: 1,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: ({ row: { message } }) => (
          <Typography variant={'body/body6'} fontWeight={500}>
            {message}
          </Typography>
        ),
      },
      {
        field: 'createdAt',
        headerName: '작성 날짜',
        width: 200,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          return (
            <Typography variant={'body/body5'} color={'gray/800'}>
              {dayjs(params.row.createdAt).format('YYYY.MM.DD HH:mm:ss')}
            </Typography>
          );
        },
      },
      {
        field: 'user',
        headerName: '작성자',
        width: 200,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          return (
            <Typography variant={'body/body5'} color={'gray/800'}>
              {params.row?.user?.name}
            </Typography>
          );
        },
      },
    ];
  }, []);

  const rows: GridRowsProp = useMemo(() => {
    const sortedDesc = orderBy(approvals, [(a) => dayjs(a.createdAt).valueOf()], ['desc']);
    return sortedDesc
      .filter((approval) => {
        if (productId) {
          // return ![ProductRevisionStatus.REQUEST, ProductRevisionStatus.WAITING].includes(approval.status);
          return true;
        } else {
          return [ProductRevisionStatus.REQUEST].includes(approval.status);
        }
      })
      .map((approval) => ({
        id: `${approval.status}-${approval.createdAt}`,
        ...approval,
      }));
  }, [approvals, productId]);

  return (
    <Paper elevation={4} sx={{ width: '100%', padding: '30px 20px', gap: '20px', display: 'flex', flexDirection: 'column' }}>
      <Stack width="100%" direction="row" gap="20px">
        <Typography variant="body/body3" fontWeight={700}>
          상품 히스토리
        </Typography>
        <DesignIcon variant={visibleHistory ? 'ChevronDownBold' : 'ChevronUpBold'} sx={{ cursor: 'pointer' }} onClick={() => setVisibleHistory(!visibleHistory)} />
      </Stack>
      {visibleHistory && <DataGridClient columns={columns} rows={rows} disableRowSelectionOnClick={false} disableMultipleRowSelection={false} getRowHeight={() => 50} hideFooter />}
    </Paper>
  );
};

export default HistoryClient;
