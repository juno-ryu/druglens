import { ISODateString } from 'next-auth';
import { DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { AssetProductAssetOutput } from '@/core/shared/service/output/asset-product-asset-output';
import { AssetProductCopyrightOutput } from '@/core/shared/service/output/asset-product-copyright-output';
import { AssetProductLicenseOutput } from '@/core/shared/service/output/asset-product-license-output';
import { AssetProductStockOutput } from '@/core/shared/service/output/asset-product-stock-output';
import { BrandAdminOutput } from '@/core/shared/service/output/brand-output/brand-admin-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';
import { ProductApprovalOutput } from '@/core/shared/service/output/product-approval-output';
import { ProductCategoryOutput } from '@/core/shared/service/output/product-category-output';
import { ProductImageOutput } from '@/core/shared/service/output/product-image-output';
import { ProductTagOutput } from '@/core/shared/service/output/product-tag-output';

export enum DtypeOutput {
  Asset = 'Asset',
  Serial = 'Serial',
  Sketchup = 'Sketchup',
}

/** 에셋 상품 정보 */
export type AssetProductOutput = {
  /** 상품 고유 ID */
  id: UUIDAsString;
  /** 상품 고유 번호 */
  productNo: string;
  /** 판매자 조직 Id */
  organizationId: UUIDAsString;
  /** 상품 종류 */
  dtype: DtypeOutput;
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
  /** 성인상품 여부 */
  isAdult: boolean;
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
  /** 번역본 리스트 */
  localizes: Nullable<Array<LocalizeOutput>>;
  /** 상품 노출 일시 */
  exposedAt: Nullable<ISODateString>;
  /** 가격 변경 일시 */
  pricingAt: Nullable<ISODateString>;
  /**  상품 검수 기록 */
  approvals: Nullable<ProductApprovalOutput[]>;
};
