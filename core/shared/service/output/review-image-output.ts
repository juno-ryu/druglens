import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { ImageOutput } from '@/core/shared/service/output/image-output';

/** 리뷰에 포함된 이미지 정보를 반환 */
export type ReviewImageOutput = {
  /** ID */
  id: UUIDAsString;
  /** 이미지 정보 */
  image: ImageOutput;
};
