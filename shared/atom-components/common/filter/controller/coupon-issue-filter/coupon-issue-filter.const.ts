import { CouponStatus } from '@/core/shared/service/enum/coupon-status';

export const COUPON_STATUS_TEXT: Record<CouponStatus, string> = {
  [CouponStatus.DRAFT]: '작성중',
  [CouponStatus.WAITING]: '대기',
  [CouponStatus.ACTIVE]: '활성화',
  [CouponStatus.SUSPENDED]: '중지',
  [CouponStatus.EXPIRED]: '종료',
};
