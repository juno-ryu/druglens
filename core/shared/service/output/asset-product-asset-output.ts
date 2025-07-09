// asset-product-asset-output.ts

import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { AssetReleaseOutput } from '@/core/shared/service/output/asset-release-output';

/** 상품에 적용된 에셋 정보를 반환 */
export type AssetProductAssetOutput = {
  /** ID
   * @example "0194f90a-9349-766a-99b9-57a146ef5c5f"
   */
  id: UUIDAsString;

  /** 에셋 이름
   * @example "강남역 좀비"
   */
  name: string;

  /** 기준 가격
   * @example 10000
   */
  price: DoubleAsNumber;

  /** 에셋 버전 정보 */
  release: AssetReleaseOutput;
};
