import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { CouponUserOutput } from '@/core/shared/service/output/coupon-user-output';
import { OrderItemOutput } from '@/core/shared/service/output/order-item-output';
import { OrderOutput } from '@/core/shared/service/output/order-output';

/** @apis order (주문) */
const ORDER_APIS = {
  /** @apis orders/:orderId (주문(결제) 가능한 주문정보 조회) */
  ['order/:orderId']: {
    get: async (orderId: UUIDAsString) => {
      const { uri, tag } = ACON_URIS['order/:orderId'](orderId);
      return await requestWithAuth<{ data: OrderOutput }>(Operation.GET, uri, undefined, {});
    },
  },
  /** @apis orders/:orderId/item-coupon (주문 상품에 적용 가능한 쿠폰 목록 조회) */
  ['order/:orderId/item-coupon']: {
    get: async ({ orderId }: { orderId: UUIDAsString }) => {
      const { uri } = ACON_URIS['order/:orderId/item-coupon'](orderId);
      return await requestWithAuth<{ data: Record<UUIDAsString, CouponUserOutput[]> }>(Operation.GET, uri);
    },
    patch: async ({ orderId, itemId, couponUserId }: { orderId: UUIDAsString; itemId: UUIDAsString; couponUserId: UUIDAsString }) => {
      const { uri } = ACON_URIS['order/:orderId/item-coupon'](orderId);
      return await requestWithAuth<{ data: OrderItemOutput }>(Operation.PATCH, uri, { itemId, couponUserId });
    },
  },
};

export default ORDER_APIS;
