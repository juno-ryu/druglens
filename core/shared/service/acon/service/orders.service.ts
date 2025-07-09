import { OrdersSearchFilter } from '@/core/shared/service/acon/types/orders';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { OrderOutput } from '@/core/shared/service/output/order-output';
import { SimpleOutput } from '@/core/shared/service/output/simple-output';

/** @apis orders (주문) */
const ORDERS_APIS = {
  ['orders']: {
    get: async (queryString: OrdersSearchFilter) => {
      const { uri } = ACON_URIS['orders'](queryString);
      return await requestWithAuth<{ data: OrderOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  /** @apis orders/is-ordered (특정 상품 주문 이력 유무 확인) */
  ['orders/is-ordered']: {
    get: async (assetProductId: string) => {
      const { uri } = ACON_URIS['orders/is-ordered'](assetProductId);
      return await requestWithAuth<{ data: SimpleOutput }>(Operation.GET, uri);
    },
  },
};

export default ORDERS_APIS;
