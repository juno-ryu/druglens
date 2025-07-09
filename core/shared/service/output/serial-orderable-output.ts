import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { PromotionItemPublicOutput } from '@/core/shared/service/output/promotion-item-public-output';
import { SerialProductPublicOutput } from '@/core/shared/service/output/serial-product-public-output';
import { SerialProductStockOutput } from '@/core/shared/service/output/serial-product-stock-output';

/** 시리얼키 구매상품 정보 반환 */
export type SerialOrderableOutput = {
  /** ID */
  id: UUIDAsString;

  /** 상품명(번역X) */
  title: string;

  /** 가격 */
  price: number;

  /** 통화 */
  currency: CurrencyCode; // CurrencyCode

  /** 상품 정보 */
  product: Nullable<SerialProductPublicOutput>; // SerialProductPublicOutput

  /** 구매 단위 정보 */
  duration: Nullable<SerialProductStockOutput>; // SerialProductStockOutput

  /** 적용 프로모션 정보 */
  promotion: Nullable<PromotionItemPublicOutput>; // PromotionItemPublicOutput
};
