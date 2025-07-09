import { ReviewAdminSearchFilter } from '@/core/shared/service/admin/types/reviews';
import { BooleanAsString } from '@/core/utils/types/overridable/primitive';
import { ReviewFilterKeywordType } from '@/core/shared/service/enum/review-filter-keyword-type';
import { SelectOption } from '@/shared/atom-components/common/filter/filter.const';

export const INITIAL_FILTER_STATE_FOR_REVIEWS: ReviewAdminSearchFilter = {
  brandId: null,
  endDate: null,
  hasImage: null,
  isBest: null,
  isScraped: null,
  isVisible: null,
  keyword: null,
  keywordType: ReviewFilterKeywordType.CONTENT,
  productId: null,
  rating: null,
  startDate: null,
  page: 0,
  size: 20,
  sort: [],
};

export const HAS_IMAGE_OPTIONS_FOR_REVIEW: SelectOption<BooleanAsString>[] = [
  { value: 'true', label: '이미지 포함' },
  { value: 'false', label: '이미지 없음' },
] as const;

export const IS_VISIBLE_OPTIONS_FOR_REVIEW: SelectOption<BooleanAsString>[] = [
  { value: 'true', label: '노출' },
  { value: 'false', label: '미노출' },
] as const;

export const IS_BEST_OPTIONS_FOR_REVIEW: SelectOption<BooleanAsString>[] = [
  { value: 'true', label: '베스트만' },
  { value: 'false', label: '베스트 제외' },
] as const;

export const SEARCH_OPTIONS_FOR_REVIEW: SelectOption<ReviewFilterKeywordType>[] = [
  { value: ReviewFilterKeywordType.CONTENT, label: '리뷰 내용' },
  { value: ReviewFilterKeywordType.PRODUCT_NAME, label: '상품명' },
  { value: ReviewFilterKeywordType.USER_EMAIL, label: '아이디(이메일)' },
] as const;
