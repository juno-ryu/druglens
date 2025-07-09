/** 브랜드 승인 상태 */
export enum BrandApprovalStatus {
  /** 승인 요청 - 가입 후 관리자에게 승인 요청이 된 상태 */
  REQUEST = 'REQUEST',

  /** 승인 완료 - 관리자가 브랜드의 가입을 승인한 상태 */
  APPROVE = 'APPROVE',

  /** 반려 - 관리자가 브랜드의 가입을 거절한 상태 */
  REJECT = 'REJECT',

  /** 퇴점 - 브랜드가 퇴점한 상태 */
  LEAVE = 'LEAVE',
}
