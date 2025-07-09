import { UsersSearchFilter } from '@/core/shared/service/admin/types/users';
import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';
import { SettlementExportHistoryOutput } from '@/core/shared/service/output/settlement-export-history-output';
import { UserOrderStatsOutput } from '@/core/shared/service/output/user-order-stats-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** @apis settle (정산) */
const SETTLE_APIS = {
  ['settle/export-histories']: {
    /** @method get 정산 내역 엑셀파일 다운로드 기록 목록 조회 */
    get: async (searchFilter?: any) => {
      const { uri } = ADMIN_URIS['settle/export-histories'](searchFilter);
      return await requestWithAuth<{ data: SettlementExportHistoryOutput[]; pagination: PaginationOutput }>(Operation.GET, uri.toString());
    },
  },
  ['settle/download']: {
    /** @method get 브랜드별 정산 내역 다운로드 */
    get: async (year: IntAsNumber, month: IntAsNumber) => {
      const { uri } = ADMIN_URIS['settle/download'](year, month);
      return await requestWithAuth<{ blob: Blob; filename?: string }>(Operation.GET, uri, undefined, { isBlob: true });
    },
  },
  ['settle/download-detail']: {
    /** @method get 정산 세부 주문 내역 다운로드 */
    get: async (year: IntAsNumber, month: IntAsNumber) => {
      const { uri } = ADMIN_URIS['settle/download-detail'](year, month);
      return await requestWithAuth<{ blob: Blob; filename?: string }>(Operation.GET, uri, undefined, { isBlob: true });
    },
  },
};

export default SETTLE_APIS;
