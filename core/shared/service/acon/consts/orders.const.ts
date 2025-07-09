import { OrdersSearchFilter } from '@/core/shared/service/acon/types/orders';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis orders (주문) */
export const ORDERS_URIS = {
  ['orders']: (searchFilter?: OrdersSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/orders`, searchFilter ?? {}),
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  /** @apis orders/is-ordered (특정 상품 주문 이력 유무 확인) */
  ['orders/is-ordered']: (assetProductId: string) => ({
    uri: transformQueryUri(`${BASE_URL}/orders/is-ordered`, { productId: assetProductId }),
    tag: `${BASE_SERVICE}/orders/is-ordered`,
    filter: transformQueryUri('', { productId: assetProductId }),
  }),
} as const;
