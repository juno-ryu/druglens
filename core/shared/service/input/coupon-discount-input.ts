import { BigDecimalAsNumber } from '@/core/utils/types/overridable/primitive';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { DiscountType } from '@/core/shared/service/enum/discount-type';

export type CouponDiscountInput = {
  type: DiscountType;
  currency: CurrencyCode;
  method: DiscountMethod;
  value: BigDecimalAsNumber;
  max: BigDecimalAsNumber;
  minPrice: BigDecimalAsNumber;
};
