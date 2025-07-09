import { MileagesSearchFilter, PostMileagesTransactionPayload } from '@/core/shared/service/admin/types/mileages';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { WalletTransactionAdminOutput } from '@/core/shared/service/output/wallet-transaction-admin-output';

/** @apis mileages (포인트) */
const MILEAGES_APIS = {
  ['mileages']: {
    get: async (queryString: MileagesSearchFilter) => {
      const { uri } = ADMIN_URIS['mileages'](queryString);
      return await requestWithAuth<{ data: WalletTransactionAdminOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['mileages/transaction/:userId']: {
    post: async (userId: string, payload: PostMileagesTransactionPayload) => {
      const { uri } = ADMIN_URIS['mileages/transaction/:userId'](userId);
      return await requestWithAuth<{ data: WalletTransactionAdminOutput[]; pagination: PaginationOutput }>(Operation.POST, uri, payload);
    },
  },
};

export default MILEAGES_APIS;
