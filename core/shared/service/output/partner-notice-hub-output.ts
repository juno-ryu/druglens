import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';

/** 게시글(판매자공지, 이벤트) 정보를 반환 */
export type PartnerNoticeHubOutput = {
  /** ID */
  id: UUIDAsString;
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
