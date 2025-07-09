import { useMemo } from 'react';
import { groupBy, orderBy } from 'lodash';
import { Stack, Typography } from '@mui/material';
import { DesignLabel } from '@/core/design-systems';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import LocalizedPrice from '@/core/utils/helpers/localized-price';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

type DiscountSummaryProps = {
  fields: FormValues['products'];
};
const DiscountSummary = (props: DiscountSummaryProps) => {
  const { fields } = props;
  const { discount: displayDiscount } = LocalizedPrice({ lang: EnumLanguageCode.KO });

  const saleGrouped = useMemo(() => {
    const grouped = groupBy(fields, (product) => product.discountValue);
    const sortedKeys = orderBy(Object.keys(grouped), (key) => Number(key), 'desc');

    const sortedGrouped: Record<string, FormValues['products']> = {};
    for (const key of sortedKeys) {
      sortedGrouped[key] = grouped[key];
    }

    return sortedGrouped;
  }, [fields]);

  return (
    <Stack
      p="24px"
      direction="column"
      gap="24px"
      sx={(theme) => ({
        background: theme.palette['gray/50'],
        borderRadius: '16px',
      })}
    >
      <Stack direction="column" gap="12px">
        <Typography variant="body/body5" fontWeight={400} color="gray/600">
          설정된 할인
        </Typography>
        <Stack direction="row" gap="24px" flexWrap="wrap">
          {Object.entries(saleGrouped).map(([discountValue, productList]) => {
            return (
              <Stack key={discountValue} direction="row" gap="12px" alignItems="center">
                <DesignLabel color="augment/purple/200" sx={{ height: '30px' }}>
                  <Typography variant="body/body6" fontWeight={700} color="purple/900">
                    {displayDiscount(0, {
                      discountMethod: DiscountMethod.RATE,
                      discountValue: Number(discountValue),
                    })}
                  </Typography>
                </DesignLabel>
                <Typography variant="body/body5" fontWeight={700} color="gray/800">
                  {productList && `${productList.length}개 상품`}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DiscountSummary;
