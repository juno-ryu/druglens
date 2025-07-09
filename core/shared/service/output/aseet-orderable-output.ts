import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { AssetGrantOutput } from '@/core/shared/service/output/asset-grant-output';
import { AssetProductPublicOutput } from '@/core/shared/service/output/asset-product-public-output';
import { AssetProductStockOutput } from '@/core/shared/service/output/asset-product-stock-output';
import { PromotionItemPublicOutput } from '@/core/shared/service/output/promotion-item-public-output';

/** 에셋 구매상품 정보 반환 */
export type AssetOrderableOutput = {
  /** ID */
  id: UUIDAsString;

  /** 상품명(번역X) */
  title: string;

  /** 가격 */
  price: number;

  /** 통화 */
  currency: CurrencyCode; // CurrencyCode

  /** 상품 정보 */
  product: Nullable<AssetProductPublicOutput>; // AssetProductPublicOutput

  /** 구매 단위 정보 */
  stock: Nullable<AssetProductStockOutput>; // AssetProductStockOutput

  /** 적용 프로모션 정보 */
  promotion: Nullable<PromotionItemPublicOutput>; // PromotionItemPublicOutput

  /** 사용권 권한 정보 */
  grants: Nullable<AssetGrantOutput[]>; // AssetGrantOutput
};
