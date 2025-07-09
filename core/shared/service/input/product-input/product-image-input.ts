import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { PresignedUploadedInput } from '@/core/shared/service/input/presigned-input/presigned-uploaded-input';

/** 상품 이미지 등록 */
export type ProductImageInput = {
  /** 파일id(대상이 이미 등록된 경우) */
  id: Nullable<UUIDAsString>;
  /** 신규업로드파일 정보 */
  uploaded: Nullable<PresignedUploadedInput>;
  /** 메인이미지 여부 */
  isMain: boolean;
};
