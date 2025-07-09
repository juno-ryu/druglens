import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';

/** 마일리지 수입/지출 항목 내역 정보를 반환 */
export type MileageTransactionOutput = {
  /** ID
   * @example "194f90a-9349-766a-99b9-57a146ef5c5f"
   */
  id: UUIDAsString;

  /** 거래 타입
   * @example "CHARGE"
   */
  transactionType: WalletTransactionTypes;

  /** 금액
   * @example 5000
   */
  amount: BigDecimalAsNumber;

  /** 거래 시점의 잔액
   * @example 15000
   */
  balance: BigDecimalAsNumber;

  /** 처리자 ID
   * @example "b9f8a22e-5932-4fcd-8a5a-d8f5d1a16c77"
   */
  operatorId: UUIDAsString;

  /** 처리자 타입
   * @example "ADMIN"
   */
  operatorType: string;

  /** 생성일시
   * @example "2025-02-26T07:38:29Z"
   */
  createdAt: string;
};
