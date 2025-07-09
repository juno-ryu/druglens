import { Nullable } from '@/core/utils/types/selector/flexible';
import { CommunityPostTagInput } from '@/core/shared/service/input/community-input/post-tag-input';

/** 게시글 추가 정보 */
export type CommunityPostAttributesInput = {
  /** 게시글 태그 정보 */
  tag: Nullable<CommunityPostTagInput>;
};
