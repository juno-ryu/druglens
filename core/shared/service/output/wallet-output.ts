import { BigDecimalAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 에이콘에서 사용하는 포인트나 캐시의 잔액 정보를 반환 */
export type WalletOutput = {
  /** 조회 된 화폐 */
  currency: CurrencyCode;
  /** 잔액 */
  balance: BigDecimalAsNumber;
  /** 잔액을 조회 한 유저 정보 */
  user: Nullable<UserOutput>;
};
