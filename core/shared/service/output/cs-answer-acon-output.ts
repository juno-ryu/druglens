import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 1:1 문의 답변 정보를 반환 */
export type CsAnswerAconOutput = {
  /** ID */
  id: UUIDAsString;
  /** 답변 내용 */
  content: string;
  /** 답변 시각 */
  createdAt: ISODateString;
  /** 답변 수정 시각 */
  updatedAt: ISODateString;
};
