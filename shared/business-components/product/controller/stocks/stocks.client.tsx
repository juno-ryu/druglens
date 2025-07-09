'use client';

import React, { useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { findIndex, minBy } from 'lodash';
import { GridColDef, GridRenderEditCellParams, GridRowsProp } from '@mui/x-data-grid';
import { useGridApiRef } from '@mui/x-data-grid-pro';
import { FormControlLabel, Stack, Typography } from '@/core/design-systems';
import LocalizedPrice from '@/core/utils/helpers/localized-price';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { LicenseInput } from '@/core/shared/service/input/asset-product-input/license-input';
import ControlledCheckbox from '@/core/shared/components/hook-form/controlled-checkbox/controlled-checkbox';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import { LICENSE_OPTIONS } from '@/shared/business-components/orders/order.const';
import { groupByAssetIds } from '@/shared/business-components/product/controller/stocks/stocks.const';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

type StocksClientProps = {};

const StocksClient = (props: StocksClientProps) => {
  const {} = props;
  const { control, setValue, getValues } = useFormContext<ProductFormValues>();
  const apiRef = useGridApiRef();

  const licenses = useWatch({ control, name: 'licenses' });
  const stocks = useWatch({ control, name: 'stocks' });
  const cheapestStock = useMemo(() => minBy(stocks, 'price'), [stocks]);

  const { params } = useDynamicRoute();
  const { lang } = params;
  const { price: displayPrice, unit } = LocalizedPrice({ lang });

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: 'name',
        headerName: '상품명',
        flex: 1,
        disableColumnMenu: true,
        sortable: false,
        align: 'left',
        headerAlign: 'center',
        display: 'flex',
        renderHeader: dataGridHeader,
        renderCell: (params: GridRenderEditCellParams) => {
          const { value } = params;
          return (
            <Typography variant="body/body3" fontWeight={400} color="gray/800" ml="8px">
              {value}
            </Typography>
          );
        },
      },
      {
        field: 'price',
        headerName: '기본가격',
        flex: 1,
        height: '100%',
        sortable: false,
        disableColumnMenu: true,
        headerAlign: 'center',
        align: 'center',
        display: 'flex',
        renderHeader: dataGridHeader,
        renderCell: (params: GridRenderEditCellParams) => {
          const { id } = params;
          const index = findIndex(stocks, (item) => item.assetIds.join('/') === String(id));
          return (
            <ControlledTextField
              name={`stocks.${index}.price`}
              control={control}
              variant="outlined"
              sx={{ display: 'block' }}
              size="small"
              placeholder="금액 입력"
              hiddenLabel
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const value = Number(event.target.value) || 0;
                licenses.forEach((license: LicenseInput, licenseIdx: number) => {
                  const finalIndex = index + licenseIdx;
                  setValue(`stocks.${finalIndex}.price`, value * license.multiple);
                });
              }}
            />
          );
        },
      },
      {
        field: 'license',
        headerName: '사용권',
        width: 200,
        disableColumnMenu: true,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        display: 'flex',
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          return (
            <Stack direction="column" gap="25px" py="10px" alignItems="left" justifyContent="center" height="100%">
              {LICENSE_OPTIONS.map((option, index) => {
                const disabled = Boolean(index < 2);
                return (
                  <FormControlLabel
                    key={option.value}
                    label={option.label}
                    control={
                      <ControlledCheckbox
                        //
                        name={`stocks.${index}.isDisabled`}
                        control={control}
                        disabled={disabled}
                        color="augment/primary/600"
                        isReverseCheckboxValue
                      />
                    }
                    sx={{ paddingLeft: '20px' }}
                    slotProps={{
                      typography: {
                        marginLeft: '4px',
                        textAlign: 'left',
                      },
                    }}
                  />
                );
              })}
            </Stack>
          );
        },
      },
      {
        field: 'realPrice',
        headerName: '실판매가',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        display: 'flex',
        disableColumnMenu: true,
        sortable: false,
        renderHeader: dataGridHeader,
        renderCell: (params) => {
          const { value } = params;
          return (
            <Stack direction="column" gap="25px" py="10px" alignItems="left" justifyContent="center" height="100%">
              {value.map((realPrice: string, index: number) => {
                return (
                  <Typography key={`${realPrice}_${index}`} textAlign="left" variant="body/body3" color="gray/800" fontWeight={400}>
                    {displayPrice(Number(realPrice))}
                  </Typography>
                );
              })}
            </Stack>
          );
        },
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocks, licenses]);

  const rows: GridRowsProp = useMemo(() => {
    const groups = groupByAssetIds(stocks);
    const title = getValues('title');
    const result = [];
    for (const key in groups) {
      const basePrice = cheapestStock?.price || 0;
      result.push({
        id: key,
        name: title,
        price: basePrice,
        realPrice: licenses.map(({ license, multiple }) => basePrice * multiple),
      });
    }

    return result;
  }, [stocks, cheapestStock]);

  useEffect(() => {
    const cheapestStock = minBy(stocks, 'price');
    if (cheapestStock) setValue('price', cheapestStock.price);
  }, [cheapestStock]);

  return <DataGridClient apiRef={apiRef} rows={rows} columns={columns} rowHeight={!rows.length ? 112 : 224} pagination={false} hideFooter />;
};

export default StocksClient;
