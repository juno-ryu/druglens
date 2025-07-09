import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { AssetInput } from '@/core/shared/service/input/asset-product-input/asset-input';
import { CopyrightInput } from '@/core/shared/service/input/asset-product-input/copyright-input';
import { LicenseInput } from '@/core/shared/service/input/asset-product-input/license-input';
import { StockInput } from '@/core/shared/service/input/asset-product-input/stock-input';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { ProductCategoryInput } from '@/core/shared/service/input/product-input/product-category-input';
import { ProductImageInput } from '@/core/shared/service/input/product-input/product-image-input';

/** @api GET ['product/assets'] */
export interface ProductAssetsSearchFilter extends PageableInput {
  keyfield: 'TITLE' | 'PRODUCT_NO' | 'BRAND_NAME';
  statuses: ProductRevisionStatus[];
  keyword?: string;
  visible?: boolean;
}
/** 에셋 상품 생성 요청 Payload */
export interface PutProductAssetsDetailInput {
  /** 브랜드 id */
  brandId: UUIDAsString; // UUID
  /** 몰 구분 */
  regions: RegionCode[]; // RegionCode[]
  /** 상품명 */
  title: string;
  /** 상품 설명 */
  contentHead?: string;
  /** 상품 내용 */
  contentBody?: string;
  /** 노출 가격 */
  price: number;
  /** 성인 상품 여부 (default: false) */
  isAdult?: boolean;
  /** 카테고리 */
  categories: ProductCategoryInput[];
  /** 상품 이미지 */
  images: ProductImageInput[];
  /** 태그 */
  tags: UUIDAsString[];
  /** 대상 에셋 */
  assets: AssetInput[];
  /** 사용권 */
  licenses: LicenseInput[]; // License[]
  /** 구매단위 */
  stocks: StockInput[]; // Stock[]
  /** 저작권 관련 정보 */
  copyright: CopyrightInput; // Copyright
}
