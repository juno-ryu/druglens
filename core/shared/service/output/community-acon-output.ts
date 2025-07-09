import { ISODateString } from 'next-auth';
import { PostCommentOutput } from '@/core/shared/service/output/post-comment-output';
import { PostOutput } from '@/core/shared/service/output/post-output';
import { PostTagPostOutput } from '@/core/shared/service/output/post-tag-post-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 에이콘에서 게시글 정보를 반환 */
export type CommunityAconOutput = {
  /** 게시글 */
  post: PostOutput;
  /** 작성자 */
  user: UserOutput;
  /** 태그 */
  postTags: Array<PostTagPostOutput>;
  /** 댓글 */
  comments: Array<PostCommentOutput>;
  /** 공지 */
  isNotice: boolean;
  /** 좋아요수 */
  likes: number;
  /** 좋아요한 유저 ID */
  likeUserIds: Array<string>;
  /** 신고수 */
  reports: number;
  /** 신고한 유저 ID */
  reportUserIds: Array<string>;
  /** 조회수 */
  views: number;
  /** 생성일 */
  createdAt: ISODateString;
};
