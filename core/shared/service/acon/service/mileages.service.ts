import { MileagesSearchFilter } from '@/core/shared/service/acon/types/mileages';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';
import { WalletOutput } from '@/core/shared/service/output/wallet-output';
import { WalletTransactionOutput } from '@/core/shared/service/output/wallet-transaction-output';

/** @apis mileages (포인트) */
const MILEAGES_APIS = {
  /** @apis mileages/balance (잔액 조회) */
  ['mileages/balance']: {
    get: async () => {
      const { uri, tag } = ACON_URIS['mileages/balance']();
      return requestWithAuth<{ data: WalletOutput }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
  /** @apis mileages/transaction (내역 조회) */
  ['mileages/transaction']: {
    get: async (searchFilter?: MileagesSearchFilter) => {
      const { uri } = ACON_URIS['mileages/transaction'](searchFilter);
      return requestWithAuth<{
        data: WalletTransactionOutput[];
        currency: CurrencyCode;
        pagination: PaginationOutput;
        sort: SortOutput[];
      }>(Operation.GET, uri);
    },
  },
};

export default MILEAGES_APIS;
