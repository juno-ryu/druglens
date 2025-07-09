import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 에이콘에서 1:1 문의하기 첨부 파일 정보 */
export type CsInquiryCreateAttributesFileInput = {
  /** ID */
  fileIds: Array<UUIDAsString>;
};
