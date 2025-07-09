import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { DepositTransactionOutput } from '@/core/shared/service/output/deposit-transaction-output';

/** 1:1 문의 캐시 충전 정보를 반환 */
export type CsInquiryDepositOutput = {
  /** ID */
  id: UUIDAsString;
  /** 주문 정보 */
  order: DepositTransactionOutput;
};
