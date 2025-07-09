import { DepositsSearchFilter } from '@/core/shared/service/admin/types/deposits';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';
import { SelectOption } from '@/shared/atom-components/common/filter/filter.const';

export const INITIAL_FILTER_STATE_FOR_DEPOSITS_MILEAGES: DepositsSearchFilter = {
  page: 0,
  size: 20,
  // sort: [],
  // status: undefined,
};

export const TYPE_OPTIONS_FOR_DEPOSITS_MILEAGES: SelectOption<WalletTransactionTypes>[] = [
  { value: WalletTransactionTypes.INCOME, label: '지급' },
  { value: WalletTransactionTypes.EXPENSE, label: '차감' },
] as const;

export const CURRENCY_OPTIONS_FOR_DEPOSITS_MILEAGES = [
  { label: '한국몰', value: CurrencyCode.KRW },
  { label: '일본몰', value: CurrencyCode.JPY },
  { label: '글로벌몰', value: CurrencyCode.USD },
];
