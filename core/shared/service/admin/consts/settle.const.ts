import { SettleExportHistoriesSearchFilter } from '@/core/shared/service/admin/types/settle';
import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis users (유저) */
export const SETTLE_URIS = {
  ['settle/export-histories']: (searchFilter?: SettleExportHistoriesSearchFilter) => {
    return {
      uri: transformQueryUri(`${BASE_URL}/settle/export-histories`, searchFilter ?? {}),
      tag: `${BASE_SERVICE}/settle/export-histories`,
      filter: transformQueryUri('', searchFilter ?? {}),
    };
  },
  ['settle/download']: (year: IntAsNumber, month: IntAsNumber) => ({
    uri: `${BASE_URL}/settle/download?year=${year}&month=${month}`,
    tag: `${BASE_SERVICE}/settle/download?year=${year}&month=${month}`,
  }),
  ['settle/download-detail']: (year: IntAsNumber, month: IntAsNumber) => ({
    uri: `${BASE_URL}/settle/download-detail?year=${year}&month=${month}`,
    tag: `${BASE_SERVICE}/settle/download-detail?year=${year}&month=${month}`,
  }),
} as const;
