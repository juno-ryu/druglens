import { PostTagOutput } from '@/core/shared/service/output/post-tag-output';

/** 게시글 태그 연결 관계 */
export type PostTagPostOutput = {
  /** 태그 */
  tag: PostTagOutput;
};
