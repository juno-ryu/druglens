import { DepositsSearchFilter } from '@/core/shared/service/admin/types/deposits';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis deposits (캐시) */
export const DEPOSITS_URIS = {
  ['deposits']: (searchFilter?: DepositsSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/deposits`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/deposits`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['deposits/transaction/:userId']: (userId: string) => ({
    uri: `${BASE_URL}/deposits/transaction/${userId}`,
    tag: `${BASE_SERVICE}/deposits/transaction/${userId}`,
  }),
} as const;
