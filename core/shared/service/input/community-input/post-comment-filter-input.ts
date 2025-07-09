import { ISODateString } from 'next-auth';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { PostStatus } from '@/core/shared/service/enum/post-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';

/** 게시글 댓글을 필터링 할 조건 */
export type PostCommentFilterInput = {
  /** 특정 몰 해당하는 댓글을 조회 하려고 할 때 전달 */
  region?: Nullable<RegionCode>;
  /** 특정 상태의 댓글을 조회 하려고 할 때 전달, 어드민에서만 사용 */
  status?: Nullable<PostStatus>;
  /** 특정 문구가 포함된 댓글을 조회 하려고 할 때 전달 */
  text?: Nullable<string>;
  /** 특정 태그가 사용된 댓글을 조회 하려고 할 때 전달 */
  tag?: Nullable<string>;
  /** 특정 기간 내 등록 된 댓글을 조회 하려고 할 때 전달 */
  startAt?: Nullable<ISODateString>;
  /** 특정 기간 내 등록 된 댓글을 조회 하려고 할 때 전달 */
  endAt?: Nullable<ISODateString>;
};
