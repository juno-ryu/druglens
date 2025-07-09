import { RegionCode } from '@/core/shared/service/enum/region-code';
import { PostCommentOutput } from '@/core/shared/service/output/post-comment-output';

/** 게시글 댓글 정보 */
export type PostCommentAdminOutput = PostCommentOutput & {
  region: RegionCode;
  postTitle: string;
};
