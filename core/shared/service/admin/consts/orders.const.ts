import { OrdersSearchFilter } from '@/core/shared/service/admin/types/orders';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

export const ORDERS_URIS = {
  /** @apis orders (주문 내역) */
  ['orders']: (searchFilter?: OrdersSearchFilter) => {
    return {
      uri: transformQueryUri(`${BASE_URL}/orders`, searchFilter ?? {}),
      tag: `${BASE_SERVICE}/orders`,
      filter: transformQueryUri('', searchFilter ?? {}),
    };
  },
  ['orders/:orderId']: (orderId: UUIDAsString) => ({
    uri: `${BASE_URL}/orders/${orderId}`,
    tag: `${BASE_SERVICE}/orders/${orderId}`,
  }),
  ['orders/:orderId/refund']: (orderId: UUIDAsString) => ({
    uri: `${BASE_URL}/orders/${orderId}/refund`,
    tag: `${BASE_SERVICE}/orders/${orderId}/refund`,
  }),
  ['orders/:orderId/memos']: (orderId: UUIDAsString) => ({
    uri: `${BASE_URL}/orders/${orderId}/memos`,
    tag: `${BASE_SERVICE}/orders/${orderId}/memos`,
  }),
} as const;
