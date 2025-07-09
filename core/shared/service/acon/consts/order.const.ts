import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis order (주문) */
export const ORDER_URIS = {
  /** @apis orders/:orderId (주문(결제) 가능한 주문정보 조회) */
  ['order/:orderId']: (orderId: UUIDAsString) => ({
    uri: `${BASE_URL}/orders/${orderId}`,
    tag: `${BASE_SERVICE}/order/${orderId}`,
  }),
  ['order/:orderId/item-coupon']: (orderId: UUIDAsString) => ({
    uri: `${BASE_URL}/order/${orderId}/item-coupon`,
    tag: `order/${orderId}/item-coupon`,
  }),
} as const;
