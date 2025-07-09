import { ISODateString } from 'next-auth';

/** 게시글 태그 정보 */
export type PostTagFilterInput = {
  name?: string;
  startAt?: ISODateString;
  endAt?: ISODateString;
};
