import { UsersSearchFilter } from '@/core/shared/service/admin/types/users';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';
import { UserOrderStatsOutput } from '@/core/shared/service/output/user-order-stats-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** @apis users (유저) */
const USERS_APIS = {
  ['users']: {
    /** @method get 유저 조회 */
    get: async (searchFilter?: UsersSearchFilter) => {
      const { uri } = ADMIN_URIS['users'](searchFilter);
      return await requestWithAuth<{ data: UserOutput[]; pagination: PaginationOutput; sort: SortOutput }>(Operation.GET, uri.toString());
    },
  },
  ['users/:userId']: {
    /** @method get 유저 상세 조회 */
    get: async (userId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['users/:userId'](userId);
      return await requestWithAuth<{ data: UserOutput }>(Operation.GET, uri);
    },
  },
  ['users/:userId/order-stats']: {
    /** @method get 회원 주문 통계 조회 */
    get: async (userId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['users/:userId/order-stats'](userId);
      return await requestWithAuth<{ data: UserOrderStatsOutput }>(Operation.GET, uri);
    },
  },
};

export default USERS_APIS;
