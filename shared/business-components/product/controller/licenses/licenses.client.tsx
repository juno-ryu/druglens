'use client';

import React, { useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { cloneDeep } from 'lodash';
import { Alert, DesignIcon, Divider, MenuItem, Stack, TextField, Typography } from '@/core/design-systems';
import { PutProductAssetsDetailInput } from '@/core/shared/service/admin/types/product';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';
import { LicenseInput } from '@/core/shared/service/input/asset-product-input/license-input';
import { groupByAssetIds } from '@/shared/business-components/product/controller/stocks/stocks.const';

const initialLimitedLicenses: LicenseInput[] = [
  { license: AssetLicense.PERSONAL, multiple: 1 },
  { license: AssetLicense.LIMITED1, multiple: 1 },
  { license: AssetLicense.LIMITED5, multiple: 5 },
];
const initialUnlimitedLicenses: LicenseInput[] = [
  { license: AssetLicense.UNLIMITED, multiple: 10 },
  { license: AssetLicense.UNLIMITED, multiple: 15 },
  { license: AssetLicense.UNLIMITED, multiple: 20 },
  { license: AssetLicense.UNLIMITED, multiple: 25 },
];

type LicensesClientProps = {};

const LicensesClient = (props: LicensesClientProps) => {
  const {} = props;
  const { control, setValue } = useFormContext<PutProductAssetsDetailInput>();
  const licenses = useWatch({ control, name: 'licenses' });
  const stocks = useWatch({ control, name: 'stocks' });

  const selectedUnlimited = useMemo(() => licenses.find((license) => license.license === AssetLicense.UNLIMITED), [licenses]);

  const handleUnlimitedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selectedLicense = initialUnlimitedLicenses.find((item) => item.multiple === Number(value));

    if (selectedLicense) {
      const resultLicenses = [...initialLimitedLicenses, selectedLicense];
      // 무제한 라이센스가 변경되면 해당 라이센스에 해당하는 stocks의 가격을 변경해야 함...
      const resultStocks = [];
      const groups = groupByAssetIds(cloneDeep(stocks));
      for (const key in groups) {
        const group = groups[key];
        const basePrice = Number(group[0].price);

        resultStocks.push(
          ...group.map((stock) => {
            if (stock.license === AssetLicense.UNLIMITED) {
              return {
                ...stock,
                price: basePrice * selectedLicense.multiple,
              };
            }
            return stock;
          }),
        );
      }
      setValue('stocks', resultStocks);
      setValue('licenses', resultLicenses);
    }
  };

  return (
    <Stack direction="column" gap="12px">
      <Typography variant="body/body3" fontWeight={700} color="gray/800">
        구성 및 판매가
      </Typography>
      <Stack direction="column" gap="8px">
        <Alert color="augment/cyan/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
              · 모든 상품의 가격은 최소 2,000원 이상이어야 합니다. (단 0원은 설정 가능)
            </Typography>
            <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
              · 실 판매가 기준 40,000원 이상 상품이 1개 이상일 경우,
              <Typography variant="body/body6" color="cyan/600" fontWeight={700} ml="4px" sx={{ textDecoration: 'underline' }}>
                오픈런 프로모션
              </Typography>
              을 신청할 수 있습니다.
            </Typography>
          </Stack>
        </Alert>

        <Alert color="augment/yellow/500" icon={<DesignIcon variant="AlertOutline" />} sx={{ width: '100%' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" color="yellow/600" fontWeight={500}>
              · 기업 사용권은 프로모션이 적용되지 않습니다.
            </Typography>
          </Stack>
        </Alert>
      </Stack>
      <Stack
        p="24px 24px 16px 24px"
        direction="column"
        gap="8px"
        mt="12px"
        sx={(theme) => ({
          borderRadius: '8px',
          border: `1px solid ${theme.palette['gray/200']}`,
          background: theme.palette['white'],
        })}
      >
        <Typography variant="body/body3" fontWeight={700} color="gray/800">
          기업 사용권 설정
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap="20%">
          <Stack sx={{ width: '100%' }} justifyContent="space-between" alignItems="center" direction="row">
            <Typography variant="body/body3" color="gray/800" fontWeight={400}>
              5회 사용권
            </Typography>
            <Typography variant="body/body3" color="gray/800" fontWeight={500}>
              5배
            </Typography>
          </Stack>
          <Divider orientation="vertical" sx={{ height: '30px' }} />
          <Stack sx={{ width: '100%' }} justifyContent="space-between" alignItems="center" direction="row">
            <Typography variant="body/body3" color="gray/800" fontWeight={400}>
              무제한 사용권
            </Typography>
            <TextField select variant="outlined" size="small" label="선택해주세요" value={selectedUnlimited?.multiple} onChange={handleUnlimitedChange}>
              {initialUnlimitedLicenses.map((license) => (
                <MenuItem key={`${license.license}_${license.multiple}`} value={license.multiple}>
                  {license.multiple}배
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LicensesClient;
