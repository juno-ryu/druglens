// asset-release-output.ts

import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { AssetFileComponentOutput } from '@/core/shared/service/output/asset-file-component-output';

/** 에셋 버전 정보 */
export type AssetReleaseOutput = {
  /** ID
   * @example "0194f90a-9349-766a-99b9-57a146ef5c5f"
   */
  id: UUIDAsString;

  /** 이 버전의 상품 파일 목록
   * @example [{ name: "car.glb", size: 102400 }]
   */
  fileComponents: AssetFileComponentOutput[];
};
