import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 상품에 적용되는 대상 에셋 */
export type AssetInput = {
  /** ID */
  id: UUIDAsString;
  /** 에셋의 기준 가격 */
  price: DoubleAsNumber;
};
