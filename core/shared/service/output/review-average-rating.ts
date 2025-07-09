import { DoubleAsNumber, IntAsNumber } from '@/core/utils/types/overridable/primitive';

/** 조회 된 리뷰의 전체 개수와 평점을 반환 */
export type ReviewAverageRating = {
  /** 전체 개수 */
  totalCount: IntAsNumber;
  /** 평균 */
  average: DoubleAsNumber;
};
