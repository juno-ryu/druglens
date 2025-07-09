import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CurrencyCode } from '../enum/currency-code';

/** 상품 정보를 반환 */
export type ProductRevisionOutput = {
  id: UUIDAsString;
  title: string;
  contentHead: string;
  currency: CurrencyCode;
  price: BigDecimalAsNumber;
};
