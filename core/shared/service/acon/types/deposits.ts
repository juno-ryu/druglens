import { ISODateString } from 'next-auth';
import { Nullable, Optional } from '@/core/utils/types/selector/flexible';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';

export type GetBalancePayload = {
  //
};

export interface DepositsSearchFilter extends PageableInput, SortInput {
  startDate?: Optional<ISODateString>;
  endDate?: Optional<ISODateString>;
  type?: Nullable<WalletTransactionTypes>;
}
