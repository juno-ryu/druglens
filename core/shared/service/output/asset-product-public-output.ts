import { ISODateString } from 'next-auth';
import { DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { AssetProductAssetOutput } from '@/core/shared/service/output/asset-product-asset-output';
import { AssetProductCopyrightOutput } from '@/core/shared/service/output/asset-product-copyright-output';
import { AssetProductLicenseOutput } from '@/core/shared/service/output/asset-product-license-output';
import { AssetProductStockOutput } from '@/core/shared/service/output/asset-product-stock-output';
import { BrandAdminOutput } from '@/core/shared/service/output/brand-output/brand-admin-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';
import { ProductCategoryOutput } from '@/core/shared/service/output/product-category-output';
import { ProductImageOutput } from '@/core/shared/service/output/product-image-output';
import { ProductTagOutput } from '@/core/shared/service/output/product-tag-output';
import { PromotionItemPublicOutput } from '@/core/shared/service/output/promotion-item-public-output';

/** 에셋 상품 정보 (공개형, Acon 사이드) */
export type AssetProductPublicOutput = {
  /** 상품 고유 ID */
  id: UUIDAsString;
  /** 상품 고유 번호 */
  productNo: UUIDAsString;
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
  /** 성인상품 여부 */
  isAdult: boolean;
  /** 조회수 */
  viewCnt: IntAsNumber;
  /** 판매개시 일시 */
  publishedAt: Nullable<ISODateString>;
  /** 브랜드 정보 */
  brand: Nullable<BrandAdminOutput>;
  /** 상품 이미지 */
  images: Nullable<Array<ProductImageOutput>>;
  /** 분류(카테고리) */
  nodes: Nullable<Array<ProductCategoryOutput>>;
  /** 태그 */
  tags: Nullable<Array<ProductTagOutput>>;
  /** 상품에 적용된 에셋 */
  assets: Nullable<Array<AssetProductAssetOutput>>;
  /** 라이센스 정보 */
  licenses: Nullable<Array<AssetProductLicenseOutput>>;
  /** 구매단위 */
  stocks: Nullable<Array<AssetProductStockOutput>>;
  /** 저작권 정보 */
  copyright: Nullable<AssetProductCopyrightOutput>;
  /** 확장자 리스트 */
  extensions: Nullable<Array<ExtensionOutput>>;
  /** 응용프로그램 리스트 */
  applications: Nullable<Array<ApplicationOutput>>;
  /** 적용중인 프로모션 */
  promotion: Nullable<PromotionItemPublicOutput>;
};
