import { CouponsIssuedSearchFilter } from '@/core/shared/service/admin/types/coupons';
import { CouponStatus } from '@/core/shared/service/enum/coupon-status';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { IssueType } from '@/core/shared/service/enum/issue-type';

export const INITIAL_FILTER_STATE_FOR_COUPON: CouponsIssuedSearchFilter = {
  couponId: '',
  page: 0,
  size: 20,
  // status: CouponStatus.ACTIVE,
  userEmail: '',
};

export const ISSUE_TYPE_TEXT: Record<IssueType, string> = {
  [IssueType.RANDOM]: '쿠폰 코드',
  [IssueType.KEYWORD]: '쿠폰 코드',
  [IssueType.DOWNLOAD]: '다운로드',
  [IssueType.EVENT]: '이벤트',
  [IssueType.MANAGER]: '관리자 발급',
};

export const DISCOUNT_METHOD_TEXT: Record<DiscountMethod, string> = {
  [DiscountMethod.SUBTRACT]: '고정금액 할인',
  [DiscountMethod.RATE]: '비율 할인',
};

export const COUPON_STATUS_TEXT: Record<CouponStatus, string> = {
  [CouponStatus.DRAFT]: '작성중',
  [CouponStatus.WAITING]: '대기',
  [CouponStatus.ACTIVE]: '활성화',
  [CouponStatus.SUSPENDED]: '중지',
  [CouponStatus.EXPIRED]: '종료',
};
