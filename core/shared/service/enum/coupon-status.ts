export enum CouponStatus {
  /** 정보 입력 및 수정 가능한 상태 */
  DRAFT = 'DRAFT',
  /** 활성화 했으나 발행일 이전인 상태 */
  WAITING = 'WAITING',
  /** 쿠폰 발급 및 사용이 가능한 상태 */
  ACTIVE = 'ACTIVE',
  /** 쿠폰이 발행이 일시 정지된 상태 (사용은 가능) */
  SUSPENDED = 'SUSPENDED',
  /** 사용 기한이 지나 사용할 수 없는 상태 */
  EXPIRED = 'EXPIRED',
}
