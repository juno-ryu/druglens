import { ISODateString } from 'next-auth';
import { BigDecimalAsString, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { OrderItemStatus } from '@/core/shared/service/enum/order-item-status';
import { OrderableType } from '@/core/shared/service/enum/orderable-type';
import { AssetOrderableOutput } from '@/core/shared/service/output/aseet-orderable-output';
import { CouponPublicOutput } from '@/core/shared/service/output/coupon-public-output';
import { OrderOutput } from '@/core/shared/service/output/order-output';
import { SerialOrderableOutput } from '@/core/shared/service/output/serial-orderable-output';

/** 주문 상품 정보를 반환 (개별 상품 기준 - 판매자 사이드) */
export type OrderItemRootOutput = {
  /** ID */
  id: UUIDAsString;
  /** ? */
  regularPrice: BigDecimalAsString;
  /** 파트너 부담할인 */
  partnerBurdenDiscountAmount: BigDecimalAsString;
  /** ? */
  priceAmount: BigDecimalAsString;
  /** 상품 상태 */
  status: OrderItemStatus;
  /** 할인액 */
  discountAmount: BigDecimalAsString;
  /** ? */
  isConfirmed: boolean;
  /** 쿠폰 정보 */
  coupon: Nullable<CouponPublicOutput>;
  /** 주문 정보 */
  order: Nullable<OrderOutput>;
  orderableId: Nullable<UUIDAsString>;
  /** 주문 완료 시간 */
  completedAt: Nullable<ISODateString>;
  /** 주문 취소 시간 */
  canceledAt: Nullable<ISODateString>;
  /** 주문 취소 시간 */
  terminatedAt: Nullable<ISODateString>;
  /** 주문 대상 상품 타입 */
  orderableType: OrderableType;
  /** 주문 대상 상품 정보 */
  orderable: AssetOrderableOutput | SerialOrderableOutput; // SketchupOrderableOutput 미구현
};
