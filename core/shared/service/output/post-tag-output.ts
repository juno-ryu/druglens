/** 게시글 태그 정보 */
export type PostTagOutput = {
  id: string;
  name: string;
  /** 태그가 사용 된 게시글 수 */
  postCount: number;
};
