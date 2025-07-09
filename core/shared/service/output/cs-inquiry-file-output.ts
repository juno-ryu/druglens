import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { FileOutput } from '@/core/shared/service/output/file-output';

/** 1:1 문의 첨부파일 정보를 반환 */
export type CsInquiryFileOutput = {
  /** ID */
  id: UUIDAsString;
  /** 파일 정보 */
  order: FileOutput;
};
