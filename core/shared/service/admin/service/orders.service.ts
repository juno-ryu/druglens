import { CouponCreateInput, CouponSearchFilter, CouponsIssuedSearchFilter } from '@/core/shared/service/admin/types/coupons';
import { OrderRefundPatchInput, OrdersSearchFilter } from '@/core/shared/service/admin/types/orders';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { CouponOutput } from '@/core/shared/service/output/coupon-output';
import { CouponUserOutput } from '@/core/shared/service/output/coupon-user-output';
import { OrderOutput } from '@/core/shared/service/output/order-output';

/** @apis orders (주문) */
const ORDERS_APIS = {
  ['orders']: {
    get: async (queryString: OrdersSearchFilter) => {
      const { uri } = ADMIN_URIS['orders'](queryString);
      return await requestWithAuth<{ data: OrderOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['orders/:orderId']: {
    get: async (orderId: UUIDAsString) => {
      const { uri, tag } = ADMIN_URIS['orders/:orderId'](orderId);
      return await requestWithAuth<{ data: OrderOutput }>(Operation.GET, uri, undefined, {
        next: {
          tags: [tag],
          revalidate: 1000,
        },
      });
    },
  },
  ['orders/:orderId/refund']: {
    patch: async (orderId: UUIDAsString, payload: OrderRefundPatchInput) => {
      const { uri } = ADMIN_URIS['orders/:orderId/refund'](orderId);
      return await requestWithAuth<{ data: OrderOutput }>(Operation.PATCH, uri, payload);
    },
  },
  ['orders/:orderId/memos']: {
    post: async (orderId: UUIDAsString, payload: { content: string }) => {
      const { uri } = ADMIN_URIS['orders/:orderId/memos'](orderId);
      return await requestWithAuth<{ data: OrderOutput }>(Operation.POST, uri, payload);
    },
  },
};

export default ORDERS_APIS;
