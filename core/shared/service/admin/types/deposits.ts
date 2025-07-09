import { ISODateString } from 'next-auth';
import { BigDecimalAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable, Optional } from '@/core/utils/types/selector/flexible';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';
import { PageableInput } from '@/core/shared/service/input/common/pageable';

export interface DepositsSearchFilter extends Partial<PageableInput> {
  email?: Optional<string>;
  userName?: Optional<string>;
  startDate?: Optional<ISODateString>;
  endDate?: Optional<ISODateString>;
  type?: Nullable<WalletTransactionTypes>;
  currency?: Nullable<CurrencyCode>;
}

export interface PostDepositsTransactionPayload {
  type: WalletTransactionTypes;
  currency: CurrencyCode;
  amount: BigDecimalAsNumber;
  reason: string;
  expireDate: ISODateString;
}
