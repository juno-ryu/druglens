/** 주문 상품 필터용 상태 */
export enum FilterOrderItemStatus {
  /** 대기 */
  PENDING = 'PENDING',
  /** 완료 */
  COMPLETED = 'COMPLETED',
  /** 구매확정 */
  TERMINATED = 'TERMINATED',
  /** 취소 */
  CANCELED = 'CANCELED',
  /** 환불 */
  REFUNDED = 'REFUNDED',
}
