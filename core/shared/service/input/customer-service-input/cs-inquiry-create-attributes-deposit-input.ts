import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 에이콘에서 1:1 문의하기 캐시 충전 정보 */
export type CsInquiryCreateAttributesDepositInput = {
  /** ID */
  transactionIds: Array<UUIDAsString>;
};
