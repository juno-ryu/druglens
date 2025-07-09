import { ISODateString } from 'next-auth';
import { BigDecimalAsNumber, BigDecimalAsString, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';

/** 캐시 수입/지출 항목 내역 정보를 반환 */
export type DepositTransactionOutput = {
  /** ID
   * @example "194f90a-9349-766a-99b9-57a146ef5c5f"
   */
  id: UUIDAsString;

  /** 거래 타입
   * @example "INCOME"
   */
  transactionType: WalletTransactionTypes;

  /** 금액
   * @example 30000
   */
  amount: BigDecimalAsNumber;

  /** 거래 시점의 잔액
   * @example 50000
   */
  balance: BigDecimalAsNumber;

  /** 처리자 ID
   * @example "c22c712e-62cb-426b-a7a9-361ed95165d3"
   */
  operatorId: UUIDAsString;

  /** 처리자 타입
   * @example "SYSTEM"
   */
  operatorType: string;

  /** 생성일시
   * @example "2025-02-26T07:38:29Z"
   */
  createdAt: ISODateString;
};
