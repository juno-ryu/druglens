/** 캐시 충전 주문 상태 */
export enum CashChargeOrderStatus {
  /** 결제 대기 중 */
  PENDING = 'PENDING',
  /** 결제 완료 */
  PAID = 'PAID',
  /** 결제 실패 */
  FAILED = 'FAILED',
  /** 환불 완료 */
  REFUNDED = 'REFUNDED',
}
