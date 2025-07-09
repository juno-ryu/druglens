import { SettleSearchFilter } from '@/core/shared/service/hub/types/settle';
import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis settle (정산 내역) */
export const SETTLE_URIS = {
  ['settle']: (searchFilter?: SettleSearchFilter) => {
    return {
      uri: transformQueryUri(`${BASE_URL}/settle`, searchFilter ?? {}),
      tag: `${BASE_SERVICE}/settle`,
      filter: transformQueryUri('', searchFilter ?? {}),
    };
  },
  ['settle/download-detail']: (year: IntAsNumber, month: IntAsNumber) => ({
    uri: `${BASE_URL}/settle/download-detail?year=${year}&month=${month}`,
    tag: `${BASE_SERVICE}/settle/download-detail?year=${year}&month=${month}`,
  }),
} as const;
