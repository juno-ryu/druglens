import { DepositsSearchFilter } from '@/core/shared/service/acon/types/deposits';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis deposits (캐시) */
export const DEPOSITS_URIS = {
  /** @apis deposits/balance (잔액 조회) */
  ['deposits/balance']: () => ({
    uri: `${BASE_URL}/deposits/balance`,
    tag: `${BASE_SERVICE}/deposits/balance`,
  }),
  /** @apis deposits/transaction (내역 조회) */
  ['deposits/transaction']: (searchFilter?: DepositsSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/deposits/transaction`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/deposits/transaction`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
} as const;
