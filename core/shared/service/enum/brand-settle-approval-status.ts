/** 브랜드 정산 정보 승인 상태 */
export enum BrandSettleApprovalStatus {
  /** 승인요청 (브랜드 정산 정보를 등록하고 관리자의 승인을 기다리는 상태) */
  REQUEST = 'REQUEST',
  /** 승인완료 (관리자가 브랜드 정산 정보를 승인한 상태) */
  APPROVE = 'APPROVE',
  /** 반려 (관리자가 브랜드 정산 정보 등록을 반려한 상태) */
  REJECT = 'REJECT',
}
