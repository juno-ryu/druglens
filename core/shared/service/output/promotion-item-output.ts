import { ISODateString } from 'next-auth';
import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';

export type PromotionItemOutput = {
  // 설명: ID
  // 예시: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  id: UUIDAsString;

  // 설명: 상품 ID
  // 예시: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  productId: UUIDAsString;

  // 설명: 통화
  // 예시: "KRW"
  currency: Nullable<CurrencyCode>;

  // 설명: 할인방식
  // 예시: "RATE"
  discountMethod: Nullable<DiscountMethod>;

  // 설명: 할인율 또는 금액
  // 예시: 0.15
  discountValue: Nullable<DoubleAsNumber>;

  // 설명: 중단일시
  // 예시: "2025-01-01T15:00:00Z"
  suspendedAt: Nullable<ISODateString>;

  // 설명: 상품 정보
  product: Nullable<AssetProductOutput>;
};
