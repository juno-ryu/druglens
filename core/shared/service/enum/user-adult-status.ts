/** 유저의 성인 인증 상태 */
export enum UserAdultStatus {
  /** 승인 완료 */
  CONFIRM = 'CONFIRM',
  /** 승인거절 */
  REJECT = 'REJECT',
  /** 승인중 (레거시,미사용) */
  VERIFY = 'VERIFY',
}
