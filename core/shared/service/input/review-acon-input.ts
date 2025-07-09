/** 에이콘에서 리뷰를 필터링 할 조건 */

import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

/** 에이콘에서 조회 할 때는 공개 상태인 리뷰만 조회 가능 (기본 조건으로 적용 되어 있음) */
export type ReviewAconInput = {
  /** 특정 카테고리에 해당하는 상품들의 리뷰를 조회 하려고 할 때 전달 */
  productCategories: Nullable<Array<UUIDAsString>>;
  /** 특정 상품의 리뷰를 조회 하려고 할 때 전달 */
  productId: Nullable<UUIDAsString>;
  /** 특정 브랜드의 리뷰를 조회 하려고 할 때 전달 */
  brandId: Nullable<UUIDAsString>;
  /** 이미지가 등록 된 리뷰만 조회 하려고 할 때 전달 */
  hasImage: Nullable<boolean>;
  /** 특정 평점의 리뷰만 조회 하려고 할 때 전달 */
  rating: Nullable<IntAsNumber>;
  /** 베스트 리뷰로 등록 된 리뷰만 조회 하려고 할 때 전달 */
  isBest: Nullable<boolean>;
  /** 특정 날짜 이후로 등록 된 리뷰만 조회 하려고 할 때 전달 */
  startDate: Nullable<Date>;
  /** 특정 날짜 이전에 등록 된 리뷰만 조회 하려고 할 때 전달 */
  endDate: Nullable<Date>;
};
