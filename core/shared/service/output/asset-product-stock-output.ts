import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';
import { AssetProductStockAssetOutput } from '@/core/shared/service/output/asset-product-stock-asset-output';

/** 상품에서 구매 가능한 구매단위에 대한 정보를 반환 */
export type AssetProductStockOutput = {
  /** ID */
  id: UUIDAsString;
  /** 라이센스 종류 */
  license: AssetLicense;
  /** 판매 가격 */
  price: DoubleAsNumber;
  /** 비활성화 여부 */
  isDisabled: boolean;
  /** 대상 에셋 목록 */
  assets: Array<AssetProductStockAssetOutput>;
};
