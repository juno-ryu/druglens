import { SettleSearchFilter } from '@/core/shared/service/hub/types/settle';
import { IntAsNumber, IntAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SettlementOutput } from '@/core/shared/service/output/settlement-output';

/** @apis settle (정산 내역) */
const SETTLE_APIS = {
  /** @apis settle (파트너 월별 정산 목록 조회) */
  ['settle']: {
    /** @method get 파트너 월별 정산 목록 조회 */
    get: async (searchFilter: SettleSearchFilter) => {
      const { uri } = HUB_URIS['settle'](searchFilter);
      return await requestWithAuth<{ data: SettlementOutput[]; expected: SettlementOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['settle/download-detail']: {
    /** @method get 파트너 월별 정산 상세 다운로드 */
    get: async (year: IntAsNumber, month: IntAsNumber) => {
      const { uri } = HUB_URIS['settle/download-detail'](year, month);
      return await requestWithAuth<{ blob: Blob; filename?: string }>(Operation.GET, uri, undefined, { isBlob: true });
    },
  },
};

export default SETTLE_APIS;
