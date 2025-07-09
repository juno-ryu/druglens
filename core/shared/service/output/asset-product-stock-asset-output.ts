import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

/** 상품 구매단위에 포함된 에셋 정보를 반환 */
export type AssetProductStockAssetOutput = {
  /** ID */
  id: UUIDAsString;
  /** 에셋 이름 */
  name: Nullable<string>;
};
