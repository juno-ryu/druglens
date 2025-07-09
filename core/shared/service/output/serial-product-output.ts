import { ISODateString } from 'next-auth';
import { DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { BrandAdminOutput } from '@/core/shared/service/output/brand-output/brand-admin-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';
import { ProductCategoryOutput } from '@/core/shared/service/output/product-category-output';
import { ProductImageOutput } from '@/core/shared/service/output/product-image-output';
import { ProductTagOutput } from '@/core/shared/service/output/product-tag-output';
import { SerialOutput } from '@/core/shared/service/output/serial-output';
import { SerialProductStockOutput } from '@/core/shared/service/output/serial-product-stock-output';

/** 시리얼코드 상품 정보 */
export type SerialProductOutput = {
  /** ID */
  id: UUIDAsString;
  /** 상품 고유 번호 */
  productNo: string;
  /** 판매자 조직 ID */
  organizationId: UUIDAsString;
  /** 상품 종류 */
  dtype: string;
  /** 개정 버전 */
  version: IntAsNumber;
  /** 판매 몰 */
  regions: Array<RegionCode>;
  /** 등록 언어 */
  lang: LanguageCode;
  /** 상품명 */
  title: string;
  /** 상품 설명 */
  contentHead: Nullable<string>;
  /** 상품 내용 */
  contentBody: Nullable<string>;
  /** 통화 */
  currency: CurrencyCode;
  /** 노출 가격 */
  price: DoubleAsNumber;
  /** 상태 */
  status: ProductRevisionStatus;
  /** 조회수 */
  viewCnt: IntAsNumber;
  /** 판매개시 일시 */
  publishedAt: Nullable<ISODateString>;
  /** 판매중단 일시 */
  suspendedAt: Nullable<ISODateString>;
  /** 현 개정 활성화 여부 */
  revEnabled: boolean;
  /** 브랜드 정보 */
  brand: Nullable<BrandAdminOutput>;
  /** 상품 이미지 */
  images: Nullable<Array<ProductImageOutput>>;
  /** 분류(카테고리) */
  nodes: Nullable<Array<ProductCategoryOutput>>;
  /** 태그 */
  tags: Nullable<Array<ProductTagOutput>>;
  /** 시리얼코드 */
  serial: Nullable<SerialOutput>;
  /** 구매단위 */
  stocks: Nullable<Array<SerialProductStockOutput>>;
  /** 번역본 리스트 */
  localizes: Nullable<Array<LocalizeOutput>>;
};
