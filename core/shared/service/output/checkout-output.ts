import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { DepositTransactionOutput } from '@/core/shared/service/output/deposit-transaction-output';
import { MileageTransactionOutput } from '@/core/shared/service/output/mileage-transaction-output';
import { PaymentLogOutput } from '@/core/shared/service/output/payment-log-output';

/** 결제 유형 타입*/
export enum PayableType {
  PaymentLog = 'PaymentLog',
  MileageTransaction = 'MileageTransaction',
  DepositTransaction = 'DepositTransaction',
}
/** 결제 유형 */
export type NarrowingPayable =
  | { payableType: PayableType.PaymentLog; payable: PaymentLogOutput } // 결제 로그
  | { payableType: PayableType.MileageTransaction; payable: MileageTransactionOutput } // 마일리지 거래
  | { payableType: PayableType.DepositTransaction; payable: DepositTransactionOutput }; // 예치금 거래

/** 결제 정보를 반환 */
export type CheckoutOutput = NarrowingPayable & {
  /** ID */
  id: UUIDAsString;
  /** ? */
  occurableType: string;
  /** ? */
  occurableId: UUIDAsString;

  /** ? */
  payableId: UUIDAsString;
  /** ? */
  isPending: boolean;
};
