import { DoubleAsNumber } from '@/core/utils/types/overridable/primitive';
import { PresignedUploadedInput } from '@/core/shared/service/input/presigned-input/presigned-uploaded-input';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';

/** 신규 에셋을 생성 */
export type AssetCreateInput = {
  /** 에셋 이름
   * @example "초록색 3D 자동차 모델"
   */
  name: string;

  /** 파일 목록
   * @example [{ key: "uploads/3dmodel.glb", size: 123456 }]
   */
  files: PresignedUploadedInput[];

  /** 확장자 ID 목록 (콤마로 구분된 문자열)
   * @example "ext-glb,ext-usdz"
   */
  extensionIds: DoubleAsNumber[];

  /** 응용프로그램 ID 목록 (콤마로 구분된 문자열)
   * @example "app-blender,app-maya"
   */
  applicationIds: DoubleAsNumber[];
};
