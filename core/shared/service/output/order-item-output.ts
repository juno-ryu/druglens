import { ISODateString } from 'next-auth';
import { BigDecimalAsString, DoubleAsNumber, IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { FilterOrderItemStatus } from '@/core/shared/service/enum/filter-order-item-status';
import { OrderItemStatus } from '@/core/shared/service/enum/order-item-status';
import { OrderableType } from '@/core/shared/service/enum/orderable-type';
import { AssetOrderableOutput } from '@/core/shared/service/output/aseet-orderable-output';
import { CouponUserOutput } from '@/core/shared/service/output/coupon-user-output';
import { SerialOrderableOutput } from '@/core/shared/service/output/serial-orderable-output';

/** 주문 상품 정보를 반환 */
export type OrderItemOutput = {
  /** ID */
  id: UUIDAsString;
  /** 주문 ID */
  orderId: UUIDAsString;
  /** 상품 금액 */
  regularPrice: DoubleAsNumber;
  /** 최종 결제 금액 */
  priceAmount: DoubleAsNumber;
  /** 수량 */
  quantity: IntAsNumber;
  /** 배송비 */
  shipAmount: BigDecimalAsString;
  /** 상품 ID */
  orderableId: UUIDAsString;
  /** 상품 상태 */
  status: OrderItemStatus;
  filterStatus: FilterOrderItemStatus;
  /** [쿠폰 할인 금액](https://www.notion.so/api-response-1e0e0c5ba98480469a24c6e4b209e56e?d=1e7e0c5ba984802a95dc001c2b6a6933&pvs=4#1e7e0c5ba98480189bbafc698146d372) */
  discountAmount: BigDecimalAsString;
  /** 환불액 */
  refundAmount: BigDecimalAsString;
  /** ? */
  isConfirmed: boolean;
  /** 사용 가능 쿠폰 정보 */
  couponUsers: CouponUserOutput[];
  /** 선택된 쿠폰 정보 (front에서 임의로 추가함)*/
  coupon: Nullable<CouponUserOutput>;
  availableCoupons: CouponUserOutput[];

  /** 구매완료 일시 */
  completedAt: Nullable<ISODateString>;
  /** 구매확정 일시 */
  terminatedAt: Nullable<ISODateString>;
  /** 구매취소 일시 */
  canceledAt: Nullable<ISODateString>;

  /** 주문 대상 상품 타입 */
  orderableType: OrderableType;
  /** 주문 대상 상품 정보 */
  orderable: AssetOrderableOutput | SerialOrderableOutput; // SketchupOrderableOutput 미구현
};
