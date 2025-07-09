import { DepositsSearchFilter } from '@/core/shared/service/acon/types/deposits';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';
import { WalletOutput } from '@/core/shared/service/output/wallet-output';
import { WalletTransactionOutput } from '@/core/shared/service/output/wallet-transaction-output';

/** @apis deposits (캐시) */
const DEPOSITS_APIS = {
  /** @apis deposits/balance (잔액 조회) */
  ['deposits/balance']: {
    get: async () => {
      const { uri, tag } = ACON_URIS['deposits/balance']();
      return requestWithAuth<{ data: WalletOutput }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
  /** @apis deposits/transaction (내역 조회) */
  ['deposits/transaction']: {
    get: async (searchFilter?: DepositsSearchFilter) => {
      const { uri } = ACON_URIS['deposits/transaction'](searchFilter);
      return requestWithAuth<{
        data: WalletTransactionOutput[];
        currency: CurrencyCode;
        pagination: PaginationOutput;
        sort: SortOutput[];
      }>(Operation.GET, uri);
    },
  },
};

export default DEPOSITS_APIS;
