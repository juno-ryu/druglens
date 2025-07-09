import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';

/** 상품 구매 단위 */
export type StockInput = {
  /** ID */
  id: Nullable<UUIDAsString>;
  /** 에셋 ID */
  assetIds: Array<UUIDAsString>;
  /** 라이센스 종류 */
  license: AssetLicense;
  /** 판매가격 */
  price: DoubleAsNumber;
  /** 비활성화 여부 */
  isDisabled: boolean;
};
