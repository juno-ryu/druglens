import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 커뮤니티 게시글 정보를 반환 */
export type PostOutput = {
  /** ID */
  id: UUIDAsString;
  /** 작성자 */
  nickName: string;
  /** 제목 */
  title: string;
  /** 내용 */
  content?: string;
};
