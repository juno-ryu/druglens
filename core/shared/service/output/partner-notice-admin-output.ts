import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 어드민에서 게시글 정보를 반환 */
export type PartnerNoticeAdminOutput = {
  /** ID */
  id: UUIDAsString;
  /** 유저 정보 */
  user: UserOutput;
  /** 게시글 유형(카테고리) */
  categoryNode: CategoryNodeOutput;
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
  /** 생성일 */
  createdAt: ISODateString;
  /** 수정일 */
  updatedAt: ISODateString;
};
