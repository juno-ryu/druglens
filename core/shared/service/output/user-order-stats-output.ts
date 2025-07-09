import { BigDecimalAsNumber, IntAsNumber } from '@/core/utils/types/overridable/primitive';

/** 유저의 주문 건수와 총 주문 금액을 조회 */
export type UserOrderStatsOutput = {
  /** 주문 건수 */
  orderCount: IntAsNumber;
  /** 총 주문 금액 */
  totalAmount: BigDecimalAsNumber;
};
