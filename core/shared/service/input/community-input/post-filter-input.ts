import { ISODateString } from 'next-auth';
import { PostField } from '@/core/shared/service/enum/post-field';
import { PostStatus } from '@/core/shared/service/enum/post-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';

/** 에이콘에서 게시글 목록을 필터링 할 조건 */
export type PostFilterInput = {
  /** 특정 몰 해당하는 게시글을 조회 하려고 할 때 전달 */
  region?: RegionCode;
  /** 특정 상태의 게시글을 조회 하려고 할 때 전달, 어드민에서만 사용 */
  status?: PostStatus;
  /** 특정 문구 검색 대상 */
  fields?: PostField[];
  /** 특정 문구가 포함된 게시글을 조회 하려고 할 때 전달 */
  value?: string;
  /** 특정 태그가 사용된 게시글을 조회 하려고 할 때 전달 */
  tag?: string;
  /** 특정 기간 내 등록 된 게시글을 조회 하려고 할 때 전달 */
  startAt?: ISODateString;
  /** 특정 기간 내 등록 된 게시글을 조회 하려고 할 때 전달 */
  endAt?: ISODateString;
};
