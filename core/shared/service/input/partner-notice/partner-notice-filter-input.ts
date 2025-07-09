import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

/** 어드민에서 게시글 목록을 필터링 할 조건 */
export type PartnerNoticeFilterInput = {
  /** 특정 카테고리에 해당하는 게시글을 조회 하려고 할 때 전달 */
  categoryNodeId: Nullable<UUIDAsString>;
  /** 특정 사용자가 작성한 게시글을 조회 하려고 할 때 전달 */
  user: Nullable<UUIDAsString>;
  /** 특정 문구가 포함된 게시글을 조회 하려고 할 때 전달 */
  text: Nullable<string>;
};
