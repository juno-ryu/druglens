import { MileagesSearchFilter } from '@/core/shared/service/admin/types/mileages';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis mileages (포인트) */
export const MILEAGES_URIS = {
  ['mileages']: (searchFilter?: MileagesSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/mileages`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/mileages`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['mileages/transaction/:userId']: (userId: string) => ({
    uri: `${BASE_URL}/mileages/transaction/${userId}`,
    tag: `${BASE_SERVICE}/mileages/transaction/${userId}`,
  }),
} as const;
