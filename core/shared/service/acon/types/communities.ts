import { PostStatus } from '@/core/shared/service/enum/post-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { CommunityPostAttributesInput } from '@/core/shared/service/input/community-input/post-attributes-input';

export interface PostCommunitiesInput {
  status: PostStatus;
  region: RegionCode;
  isNotice: boolean;
  nickname: string;
  title: string;
  content?: string;
  attributes?: CommunityPostAttributesInput;
}

export interface PostCommunitiesCommentsInput {
  nickname: string;
  content: string;
}
