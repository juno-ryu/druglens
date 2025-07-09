import { ISODateString } from 'next-auth';
import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { PostStatus } from '@/core/shared/service/enum/post-status';
import { UserOutput } from '@/core/shared/service/output/user-output';

export type PostCommentOutput = {
  /** ID */
  id: UUIDAsString;
  /** 작성자 */
  user: UserOutput;
  /** 원게시글 ID */
  postId: UUIDAsString;
  status: PostStatus;
  /** 닉네임 */
  nickname: string;
  /** 내용 */
  content: string;
  /** 좋아요수 */
  likes: IntAsNumber;
  /** 좋아요 한 유저 ID */
  likeUserIds?: Array<UUIDAsString>;
  /** 신고수 */
  reports: IntAsNumber;
  /** 신고 한 유저 ID */
  reportUserIds?: Array<UUIDAsString>;
  /** 수정일 */
  updatedAt: ISODateString;
  /** 생성일 */
  createdAt: ISODateString;
};
