import { BigDecimalAsString, DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { DiscountType } from '@/core/shared/service/enum/discount-type';

/** 쿠폰 정보를 반환 */
export type CouponPublicOutput = {
  /** ID */
  id: UUIDAsString;
  /** 쿠폰 사용자 ID (front 임의추가) */
  couponUserId?: UUIDAsString;
  /** 커뮤니케이션에 사용하는 주문 번호 */
  title: string;
  /** 결제 화폐 */
  currency: CurrencyCode;
  /** 할인 적용 유형 */
  discountType: DiscountType;
  /** 할인 적용 방법 */
  discountMethod: DiscountMethod;
  /** 할인 금액 또는 할인율 */
  discountValue: DoubleAsNumber;
  /** 최대 할인 금액 */
  discountMax: DoubleAsNumber;
  /** 최소 결제 금액 */
  minPrice: DoubleAsNumber;
};
