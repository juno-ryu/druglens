'use client';

import React, { useMemo, useState } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { differenceBy, get, groupBy, orderBy } from 'lodash';
import { Stack, Typography } from '@mui/material';
import { DataGridPro, GridColDef, GridRowSelectionModel, GridRowsProp, useGridApiRef } from '@mui/x-data-grid-pro';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, DesignIcon, DesignLabel, IconButton } from '@/core/design-systems';
import { useSnackbar } from 'notistack';
import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { CustomNetworkError } from '@/core/utils/errors/custom-network-error';
import { comma } from '@/core/utils/helpers/comma';
import LocalizedPrice from '@/core/utils/helpers/localized-price';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import { TypeCsvUploadOptions } from '@/core/shared/hooks/upload/use-csv-upload/use-csv-upload.type';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { PromotionItemOutput } from '@/core/shared/service/output/promotion-item-output';
import Loading from '@/core/shared/components/general/loading/loading';
import SnackbarError from '@/core/shared/components/overlay/snackbar-error/snackbar-error';
import FileUpload from '@/core/shared/components/upload/file-upload/file-upload';
import { FileUploadProps } from '@/core/shared/components/upload/file-upload/file-upload.type';
import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import { COUPON_CONTENTS_STRING_MAX_LENGTH } from '@/shared/business-components/coupons/coupon.const';
import CsvUpload from '@/shared/business-components/promotions/controller/selection-products/csv-upload';
import DiscountSummary from '@/shared/business-components/promotions/controller/selection-products/discount-summary';
import SearchProductDialog from '@/shared/business-components/promotions/dialog/search-product.dialog';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';
import { revalidatePromotionItems } from '@/app/[lang]/promotions/[promotionId]/actions';

type SelectionProductsClientProps = {};

const DIALOG_PRODUCT_SEARCH = 'dialog-product-search';

const SelectionProductsClient = (props: SelectionProductsClientProps) => {
  const {} = props;
  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; promotionId: string }>();
  const { discount: displayDiscount } = LocalizedPrice({ lang: EnumLanguageCode.KO });

  const { onOpen, onClose } = useDialog();
  const { enqueueSnackbar } = useSnackbar();
  const { control, getValues } = useFormContext<FormValues>();

  const { fields, swap } = useFieldArray({ control, name: 'products', keyName: '_id' });

  const [isLoading, setIsLoading] = useState(false);
  const [inputKey, setInputKey] = useState(0);
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);
  const apiRef = useGridApiRef();

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'order',
        headerName: '순서',
        width: 72,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => (
          <Typography variant={'body/body5'} color={'gray/600'} pl="6px">
            {params.row.index}
          </Typography>
        ),
      },
      {
        field: 'title',
        headerName: '제목',
        flex: 1,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => (
          <Typography variant={'body/body5'} color={'gray/800'} pl="6px">
            {params.row.product.title}
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
          <Typography variant={'body/body5'} color={'gray/600'} pl="6px">
            {comma(params.row?.product?.price || 0)}원
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
            <Typography variant={'body/body5'} color={'gray/600'} pl="6px">
              {params.row?.product.brand?.name || ''}
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
          if (!params.row?.product?.isAdult) return null;
          return (
            <Stack justifyContent="center" alignItems="center" height="100%" pl="6px">
              <DesignIcon variant="Adult" color="red/600" />
            </Stack>
          );
        },
      },
      {
        field: 'discountRate',
        headerName: '할인 적용',
        width: 88,
        sortable: false,
        align: 'left',
        headerAlign: 'left',
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          return (
            <Typography variant={'body/body5'} color={'gray/600'} pl="6px">
              {displayDiscount(0, { discountMethod: params.row.discountMethod, discountValue: params.row.discountValue })}
            </Typography>
          );
        },
      },
    ];
  }, []);

  const rows: GridRowsProp = useMemo(() => {
    return fields.map((field, index) => {
      return { ...field, index: index + 1 };
    });
  }, [fields]);

  const uploadOptions: TypeCsvUploadOptions = {
    id: params.promotionId,
    initialStructure: {
      status: null,
      percentage: 0,
    },
    accept: ['text/csv'],
    uploadApi: ADMIN_APIS['promotions/:promotionId/items/bulk-store-csv'].post,
    onFinally: async () => {
      setIsLoading(true);
      try {
        setInputKey((prev) => (prev += 1));
        await revalidatePromotionItems(params.promotionId);
        enqueueSnackbar('엑셀 업로드 완료', { variant: 'success', mode: 'dark' });
      } catch (error) {
        if (error instanceof CustomNetworkError) {
          enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
        }
      } finally {
        setIsLoading(false);
      }
    },
  };
  const handleOnClickSearchProduct = () => {
    onOpen({
      key: DIALOG_PRODUCT_SEARCH,
      onClose: () => onClose(DIALOG_PRODUCT_SEARCH),
      slotProps: { paper: { sx: { width: '90%' } } },
      children: (
        <SearchProductDialog
          onSelect={async (rows: AssetProductOutput[], discountRate: DoubleAsNumber) => {
            setIsLoading(true);
            try {
              const [currency, discountMethod] = getValues(['currency', 'discountMethod']);
              const appendedRowsData = rows.map((row) => {
                return {
                  id: row.id,
                  productId: row.id,
                  currency,
                  discountMethod,
                  discountValue: discountRate / 100,
                  suspendedAt: null,
                  product: row,
                };
              });
              const differenceRowsData = differenceBy(appendedRowsData, fields, 'productId');

              const productsPayload = (differenceRowsData || []).map((payload) => {
                const { currency, discountMethod, discountValue, product } = payload;
                return {
                  productId: product?.id || '',
                  currency: currency || CurrencyCode.KRW,
                  discountMethod: discountMethod || DiscountMethod.RATE,
                  discountValue: discountValue || 0,
                };
              });

              await ADMIN_APIS['promotions/:promotionId/items'].post(params.promotionId, productsPayload);
              await revalidatePromotionItems(params.promotionId);
              enqueueSnackbar(`${productsPayload.length}개 상품 등록 완료`, { variant: 'success', mode: 'dark' });
            } catch (error) {
              if (error instanceof CustomNetworkError) {
                enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
              }
            } finally {
              setIsLoading(false);
            }
          }}
          onClose={() => onClose(DIALOG_PRODUCT_SEARCH)}
        />
      ),
    });
  };

  const handleOnDeleteProduct = async () => {
    setIsLoading(true);
    try {
      await ADMIN_APIS['promotions/:promotionId/items'].delete(params.promotionId, selectedIds as UUIDAsString[]);
      await revalidatePromotionItems(params.promotionId);
      enqueueSnackbar(`선택한 ${selectedIds.length}개 상품을 삭제했습니다`, { variant: 'success', mode: 'dark' });
    } catch (error) {
      if (error instanceof CustomNetworkError) {
        enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack direction="column" gap="23px">
      <Loading isLoading={isLoading} />
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        <Stack direction="row" gap="8px">
          <CsvUpload inputKey={inputKey} id={params.promotionId} name="products" uploadOptions={uploadOptions} />
          <Button variant="contained" size="medium" sx={{ px: '16px' }} onClick={handleOnClickSearchProduct}>
            검색 추가
          </Button>
        </Stack>
      </Stack>
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
            <IconButton color="augment/gray/800" sx={{ px: '16px' }} onClick={handleOnDeleteProduct}>
              <DesignIcon variant="Trash" width="18px" height="18px" />
            </IconButton>
          </Stack>
        )}
        <Stack sx={(theme) => ({ maxHeight: 600, minHeight: 280, width: '100%', borderBottom: `1px solid ${theme.palette['gray/dim/200']}` })}>
          <DataGridClient
            apiRef={apiRef}
            rows={rows}
            columns={columns}
            pagination={false}
            checkboxSelection
            rowReordering
            rowSelection
            disableRowSelectionOnClick={false}
            disableMultipleRowSelection={false}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setSelectedIds(newRowSelectionModel);
            }}
            onRowOrderChange={(newRowOrder) => {
              const { targetIndex, oldIndex } = newRowOrder;
              swap(targetIndex, oldIndex);
            }}
            getRowHeight={() => 56}
            hideFooter
          />
        </Stack>
      </Stack>
      {fields.length ? <DiscountSummary fields={fields} /> : null}
    </Stack>
  );
};

export default SelectionProductsClient;
