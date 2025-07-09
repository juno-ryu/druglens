import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 1:1 문의 답변 정보를 반환 */
export type CsAnswerOutput = {
  /** ID */
  id: UUIDAsString;
  /** 답변 내용 */
  content: string;
};
