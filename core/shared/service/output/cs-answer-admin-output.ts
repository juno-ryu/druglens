import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 1:1 문의하기 답변 정보를 반환 */
export type CsAnswerAdminOutput = {
  /** ID */
  id: UUIDAsString;
  /** 유저 정보 */
  user: UserOutput;
  /** 답변 내용 */
  content: string;
  /** 답변 시각 */
  createdAt: ISODateString;
  /** 답변 수정 시각 */
  updatedAt: ISODateString;
};
