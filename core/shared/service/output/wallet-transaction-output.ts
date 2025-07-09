import { ISODateString } from 'next-auth';
import { BigDecimalAsString, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';

/** 에이콘에서 사용하는 포인트나 캐시의 거래 정보를 반환 */
export type WalletTransactionOutput = {
  /** ID */
  id: UUIDAsString;
  /** 수입, 지출 구분 */
  transactionType: WalletTransactionTypes;
  /** 해당 거래에서 수입이나 지출 된 금액 */
  amount: BigDecimalAsString;
  /** 해당 거래 직후의 잔액 */
  balance: BigDecimalAsString;
  /** 다국어가 적용 된 수입, 지출 내역의 사유 */
  reason: string;
  /** 거래 내역이 발생한 시간 (UTC) */
  createdAt: ISODateString;
};
