/** 상품의 심사 상태 정보 */
export enum ProductRevisionStatus {
  /** 대기 */
  WAITING = 'WAITING',
  /** 심사요청 */
  REQUEST = 'REQUEST',
  /** 심사중 */
  IN_PROGRESS = 'IN_PROGRESS',
  /** 거절 -> 아무것도 못함.*/
  DENIED = 'DENIED',
  /** 반려 -> 상품 재 편집 가능*/
  REJECT = 'REJECT',
  /** 승인 */
  APPROVE = 'APPROVE',
}
