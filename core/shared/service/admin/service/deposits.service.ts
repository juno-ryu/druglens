import { DepositsSearchFilter, PostDepositsTransactionPayload } from '@/core/shared/service/admin/types/deposits';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { WalletTransactionAdminOutput } from '@/core/shared/service/output/wallet-transaction-admin-output';

/** @apis deposits (캐시) */
const DEPOSITS_APIS = {
  ['deposits']: {
    /** @method get 프로모션 조회 */
    get: async (queryString: DepositsSearchFilter) => {
      const { uri } = ADMIN_URIS['deposits'](queryString);
      return await requestWithAuth<{ data: WalletTransactionAdminOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['deposits/transaction/:userId']: {
    post: async (userId: string, payload: PostDepositsTransactionPayload) => {
      const { uri } = ADMIN_URIS['deposits/transaction/:userId'](userId);
      return await requestWithAuth<{ data: WalletTransactionAdminOutput[]; pagination: PaginationOutput }>(Operation.POST, uri, payload);
    },
  },
};

export default DEPOSITS_APIS;
