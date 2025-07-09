import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { PresignedUploadedInput } from '@/core/shared/service/input/presigned-input/presigned-uploaded-input';

/** 상품에 적용되는 대상 에셋 */
export type FileInput = {
  /** ID */
  id: Nullable<UUIDAsString>;
  /** 임시업로드 파일 정보 */
  uploaded: Nullable<PresignedUploadedInput>;
};
