import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 리뷰를 좋아요(도움이 돼요) 한 유저의 정보를 반환 */
export type ReviewFavoriteOutput = {
  /** ID */
  id: UUIDAsString;
  /** 조회 한 유저가 좋아요 했는지 여부 */
  isUserFavorite: boolean;
  /** 좋아요 한 시간 (UTC) */
  createdAt: ISODateString;
};
