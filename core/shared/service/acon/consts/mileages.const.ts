import { MileagesSearchFilter } from '@/core/shared/service/acon/types/mileages';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis mileages (포인트) */
export const MILEAGES_URIS = {
  /** @apis mileages/balance (잔액 조회) */
  ['mileages/balance']: () => ({
    uri: `${BASE_URL}/mileages/balance`,
    tag: `${BASE_SERVICE}/mileages/balance`,
  }),
  /** @apis mileages/transaction (내역 조회) */
  ['mileages/transaction']: (searchFilter?: MileagesSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/mileages/transaction`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/mileages/transaction`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
} as const;
