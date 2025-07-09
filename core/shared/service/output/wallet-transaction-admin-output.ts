import { ISODateString } from 'next-auth';
import { BigDecimalAsString, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';
import { WalletOutput } from '@/core/shared/service/output/wallet-output';

/** 에이콘에서 사용하는 포인트나 캐시의 거래 정보를 관리자 페이지에서 조회 할 때 사용 */
export type WalletTransactionAdminOutput = {
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
  /** 거래내역의 화폐와 현재 잔액, 유저 정보를 포함해서 반환 */
  wallet: WalletOutput;
  /** 거래 내역이 발생한 시간 (UTC) */
  createdAt: ISODateString;
};
