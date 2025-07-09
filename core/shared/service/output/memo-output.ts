import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 관리자가 작성한 메모의 정보를 반환 */
export type MemoOutput = {
  /** ID */
  id: UUIDAsString;
  /** 메모 내용 */
  content: string;
  /** 작성자 */
  user: Nullable<UserOutput>;
  /** 작성일 */
  createdAt: ISODateString;
};
