import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { ReviewFilterKeywordType } from '@/core/shared/service/enum/review-filter-keyword-type';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';

export interface ReviewAdminSearchFilter extends Partial<PageableInput>, Partial<SortInput> {
  /** 키워드로 검색할 대상, 키워드로 검색 할 경우 필수 */
  keywordType: Nullable<ReviewFilterKeywordType>;
  /** 검색할 키워드 */
  keyword: Nullable<string>;
  /** 특정 상품의 리뷰를 조회 하려고 할 때 전달 */
  productId: Nullable<UUIDAsString>;
  /** 특정 브랜드의 리뷰를 조회 하려고 할 때 전달 */
  brandId: Nullable<UUIDAsString>;
  /** 특정 날짜 이후로 등록 된 리뷰만 조회 하려고 할 때 전달 */
  startDate: Nullable<string>;
  /** 특정 날짜 이전에 등록 된 리뷰만 조회 하려고 할 때 전달 */
  endDate: Nullable<string>;
  /** 이미지가 등록 된 리뷰만 조회 하려고 할 때 전달 */
  hasImage: Nullable<boolean>;
  /** 리뷰의 노출 상태로 조회 하려고 할 때 전달 */
  isVisible: Nullable<boolean>;
  /** 베스트 리뷰로 등록 된 리뷰만 조회 하려고 할 때 전달 */
  isBest: Nullable<boolean>;
  /** 특정 평점의 리뷰만 조회 하려고 할 때 전달 */
  rating: Nullable<number>;
  /** 관리자가 스크랩 한 리뷰만 조회 하려고 할 때 전달 */
  isScraped: Nullable<boolean>;
}

export interface PostReviewReplyPayload {
  content: {
    lang: LanguageCode;
    text: string;
  };
}
