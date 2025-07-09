import { ISODateString } from 'next-auth';
import { PostStatus } from '@/core/shared/service/enum/post-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { CommunityAconOutput } from '@/core/shared/service/output/community-acon-output';
import { PostCommentAdminOutput } from '@/core/shared/service/output/post-comment-admin-output';

/** 어드민에서 게시글 정보를 반환 */
export type CommunityAdminOutput = Omit<CommunityAconOutput, 'comments'> & {
  comments: Array<PostCommentAdminOutput>;
  /** 상태 */
  status: PostStatus;
  /** 몰 */
  region: RegionCode;
  /** 수정일 */
  updatedAt: ISODateString;
};
