/** 주문 상품 상태 */
export enum OrderItemStatus {
  /** 대기 */
  PENDING = 'PENDING',
  /** 결제완료 */
  PAID = 'PAID',
  /** 상품준비 */
  STANDBY = 'STANDBY',
  /** 배송중 */
  SHIPPING = 'SHIPPING',
  /** 완료 */
  COMPLETED = 'COMPLETED',
}
