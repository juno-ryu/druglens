import { ISODateString } from 'next-auth';
import { DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { BrandAdminOutput } from '@/core/shared/service/output/brand-output/brand-admin-output';
import { ProductCategoryOutput } from '@/core/shared/service/output/product-category-output';
import { ProductImageOutput } from '@/core/shared/service/output/product-image-output';
import { ProductTagOutput } from '@/core/shared/service/output/product-tag-output';
import { PromotionItemPublicOutput } from '@/core/shared/service/output/promotion-item-public-output';
import { SerialProductStockOutput } from '@/core/shared/service/output/serial-product-stock-output';

/** 시리얼코드 상품 정보 */
export type SerialProductPublicOutput = {
  /** 상품 고유 ID */
  id: UUIDAsString;

  /** 상품 고유 번호 */
  productNo: string;

  /** 상품명 */
  title: string;

  /** 상품 설명 */
  contentHead: Nullable<string>;

  /** 상품 내용 */
  contentBody: Nullable<string>;

  /** 통화 */
  currency: CurrencyCode; // CurrencyCode

  /** 노출 가격 */
  price: DoubleAsNumber;

  /** 성인 상품 여부 */
  isAdult: boolean;

  /** 조회수 */
  viewCnt: IntAsNumber;

  /** 판매개시 일시 */
  publishedAt: Nullable<ISODateString>; // Datetime

  /** 판매중단 일시 */
  suspendedAt: Nullable<ISODateString>; // Datetime

  /** 브랜드 정보 */
  brand: Nullable<BrandAdminOutput>; // BrandAdminOutput

  /** 상품 이미지 */
  images: Nullable<ProductImageOutput[]>; // ProductImageOutput[]

  /** 분류(카테고리) */
  nodes: Nullable<ProductCategoryOutput[]>; // ProductCategoryOutput[]

  /** 태그 */
  tags: Nullable<ProductTagOutput[]>; // ProductTagOutput[]

  /** 구매단위 */
  stocks: Nullable<SerialProductStockOutput[]>; // SerialProductStockOutput[]

  /** 적용중인 프로모션 */
  promotion: Nullable<PromotionItemPublicOutput>; // PromotionItemPublicOutput
};
