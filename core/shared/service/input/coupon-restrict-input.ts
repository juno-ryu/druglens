import { CouponRestrictDetailInput } from '@/core/shared/service/input/coupon-restrict-detail-input';

export type CouponRestrictInput = {
  brand: CouponRestrictDetailInput;
  category: CouponRestrictDetailInput;
  product: CouponRestrictDetailInput;
  promotion: CouponRestrictDetailInput;
};
