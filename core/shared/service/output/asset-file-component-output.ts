// asset-file-component-output.ts

import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 에셋 파일 */
export type AssetFileComponentOutput = {
  /** ID
   * @example "0194f90a-9349-766a-99b9-57a146ef5c5f"
   */
  id: UUIDAsString;

  /** 파일 이름
   * @example "zombie-model.glb"
   */
  name: string;

  /** 파일 사이즈
   * @example 2048576
   */
  size: number;
};
