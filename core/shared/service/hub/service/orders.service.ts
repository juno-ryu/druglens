import { OrdersSearchFilter } from '@/core/shared/service/hub/types/orders';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { OrderItemRootOutput } from '@/core/shared/service/output/order-item-root-output';

/** @apis orders (판매 내역) */
const ORDERS_APIS = {
  /** @apis orders (판매된 주문 기록을 조회) */
  ['orders']: {
    /** @method get 판매된 주문 목록 */
    get: async (searchFilter: OrdersSearchFilter) => {
      const { uri } = HUB_URIS['orders'](searchFilter);
      return await requestWithAuth<{ data: OrderItemRootOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
};

export default ORDERS_APIS;
