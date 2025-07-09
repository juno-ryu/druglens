import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { BankOutput } from '@/core/shared/service/output/bank-output';

/** @apis bank (은행) */
const BANK_APIS = {
  /** @apis bank/banks 은행 목록 */
  ['bank/banks']: {
    get: async () => {
      const { uri, tag } = HUB_URIS['bank/banks']();
      return await request<{ data: Array<BankOutput> }>(Operation.GET, uri, undefined, { next: { tags: [tag], revalidate: 3600 } });
    },
  },
};

export default BANK_APIS;
