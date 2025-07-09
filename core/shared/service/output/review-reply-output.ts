import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 관리자가 작성한 댓글의 정보를 반환 */
export type ReviewReplyOutput = {
  /** ID */
  id: UUIDAsString;
  /** 작성 언어 */
  language: LanguageCode;
  /** 댓글 내용 */
  content: Nullable<string>;
  /** 댓글을 작성한 관리자 정보 */
  user: UserOutput;
  /** 작성 시간 (UTC) */
  createdAt: ISODateString;
};
