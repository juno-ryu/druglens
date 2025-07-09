import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { identity, pickBy } from 'lodash';
import { GridColDef, GridRowSelectionModel, GridRowsProp, useGridApiRef } from '@mui/x-data-grid-pro';
import { Button, DesignIcon, Stack, TextField, Typography } from '@/core/design-systems';
import { ProductAssetsSearchFilter } from '@/core/shared/service/admin/types/product';
import { DoubleAsNumber, NumberAsString } from '@/core/utils/types/overridable/primitive';
import { Optional } from '@/core/utils/types/selector/flexible';
import { comma } from '@/core/utils/helpers/comma';
import useFetch from '@/core/shared/hooks/data/use-fetch/use-fetch';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { PromotionItemOutput } from '@/core/shared/service/output/promotion-item-output';
import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import { INITIAL_FILTER_STATE_FOR_PRODUCT } from '@/shared/atom-components/common/filter/controller/product-filter/product-filter.const';
import FilterClient from '@/shared/atom-components/common/filter/filter.client';

type SearchProductDialogProps = {
  onSelect: (rows: AssetProductOutput[], discountRate: DoubleAsNumber) => Promise<void>;
  onClose: () => void;
};

type FormValues = ProductAssetsSearchFilter;

const INITIAL_FORM_VALUES = {
  ...INITIAL_FILTER_STATE_FOR_PRODUCT,
  statuses: [ProductRevisionStatus.APPROVE],
  visible: true,
  size: 10,
};

const SearchProductDialog = (props: SearchProductDialogProps) => {
  const { onSelect, onClose } = props;
  const apiRef = useGridApiRef();

  const [discountRate, setDiscountRate] = useState<DoubleAsNumber>(0);
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);

  const methods = useForm<FormValues>({ defaultValues: INITIAL_FORM_VALUES });

  const filterProps = pickBy(methods.getValues(), identity) as FormValues;
  const { data, isLoading } = useFetch(ADMIN_APIS['product/assets'].get, {
    params: filterProps,
  });

  const { products, pagination } = useMemo(() => {
    return { products: data?.data || [], pagination: data?.pagination };
  }, [data]);

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'title',
        headerName: '제목',
        flex: 1,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => (
          <Typography variant={'body/body5'} color={'gray/800'}>
            {params.row.title}
          </Typography>
        ),
      },
      {
        field: 'price',
        headerName: '판매가',
        width: 124,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => (
          <Typography variant={'body/body5'} color={'gray/600'}>
            {comma(params.row.price)}원
          </Typography>
        ),
      },
      {
        field: 'brand',
        headerName: '파트너',
        width: 200,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          return (
            <Typography variant={'body/body5'} color={'gray/600'}>
              {params.row.brand.name}
            </Typography>
          );
        },
      },
      {
        field: 'isAdult',
        headerName: '19+',
        width: 56,
        sortable: false,
        titleAlign: 'center',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          if (!params.row.isAdult) return null;
          return (
            <Stack justifyContent="center" alignItems="center" height="100%">
              <DesignIcon variant="Adult" color="red/600" />
            </Stack>
          );
        },
      },
      // {
      //   field: 'discountRate',
      //   headerName: '할인 적용',
      //   width: 88,
      //   sortable: false,
      //   pinnable: true,
      //   align: 'left',
      //   headerAlign: 'left',
      //   renderHeader: dataGridHeader,
      //   renderCell: (params) => {
      //     return (
      //       <Typography variant={'body/body5'} color={'gray/600'}>
      //         {params.row.discountRate * 100}%
      //       </Typography>
      //     );
      //   },
      // },
    ];
  }, []);

  const rows: GridRowsProp = useMemo(() => {
    return products;
  }, [products]);

  const handleOnSubmitFilter = (data: ProductAssetsSearchFilter) => {
    methods.reset(data);
  };

  const handleOnResetFilter = () => {
    methods.reset(INITIAL_FORM_VALUES);
  };

  const handleOnSelectRow = (newRowSelectionModel: GridRowSelectionModel) => {
    setSelectedIds(newRowSelectionModel);
  };

  const handleOnAppendProducts = async () => {
    const resultRows = rows.filter((product) => selectedIds.includes(product.id)) as AssetProductOutput[];
    const rate = Number(discountRate);
    if (!resultRows.length) {
      alert('상품을 선택해주세요.');
      return;
    }

    onSelect(resultRows, rate);
    onClose();
  };

  if (!pagination) return null;

  return (
    <FormProvider {...methods}>
      <Stack p="24px 48px" width="100%" direction="column" gap="24px">
        <Typography variant="title/title5" fontWeight={700}>
          검색 추가
        </Typography>
        <Stack gap={2.5}>
          <FilterClient<ProductAssetsSearchFilter>
            from="product"
            total={pagination?.size || 0}
            onSubmit={(event) => {
              event.preventDefault();
              methods.handleSubmit(handleOnSubmitFilter)();
            }}
            onReset={handleOnResetFilter}
            fieldKeys={{ keyfield: 'keyfield', keyword: 'keyword' }}
          />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap="8px">
              <Typography variant="body/body4" fontWeight={700} whiteSpace="pre">
                선택한 상품에
              </Typography>
              <TextField
                value={discountRate}
                type="number"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const value = Number(event.target.value) as DoubleAsNumber;
                  if (value > 100) return;
                  setDiscountRate(value);
                }}
                placeholder="할인율"
                hiddenLabel
                sx={{ minWidth: '100px', maxWidth: '100px' }}
                slotProps={{
                  htmlInput: { min: 0, max: 100, step: 1 },
                }}
              />
              <Typography variant="body/body4" fontWeight={700} whiteSpace="pre">
                % 할인 적용하기
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={(theme) => ({ maxHeight: 650, minHeight: 280, width: '100%', borderBottom: `1px solid ${theme.palette['gray/dim/200']}` })}>
            <DataGridClient
              apiRef={apiRef}
              columns={columns}
              rows={rows}
              loading={isLoading}
              rowSelection
              checkboxSelection
              disableRowSelectionOnClick={false}
              disableMultipleRowSelection={false}
              getRowHeight={() => 50}
              paginationMode="server"
              rowCount={pagination.total}
              pagination={true}
              paginationModel={{ ...pagination, pageSize: pagination.size }}
              onPaginationModelChange={(newModel) => {
                methods.setValue('page', newModel.page);
                methods.setValue('size', newModel.pageSize);
                methods.handleSubmit(handleOnSubmitFilter)();
              }}
              onRowSelectionModelChange={handleOnSelectRow}
            />
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center">
          <Button variant="contained" color="augment/purple/600" size="extraLarge" onClick={handleOnAppendProducts}>
            선택 상품 추가하기
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default SearchProductDialog;
