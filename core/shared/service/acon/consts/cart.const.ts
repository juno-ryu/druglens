import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis cart (장바구니) */
export const CART_URIS = {
  /** @apis cart (장바구니 목록 조회) */
  ['cart']: () => ({
    uri: `${BASE_URL}/cart`,
    tag: `${BASE_SERVICE}/cart`,
  }),
  /** @apis cart/count (장바구니 카운트 조회) */
  ['cart/count']: () => ({
    uri: `${BASE_URL}/cart/count`,
    tag: `${BASE_SERVICE}/cart/count`,
  }),
  /** @apis cart/order (장바구니 목록 주문) */
  ['cart/order']: () => ({
    uri: `${BASE_URL}/cart/order`,
    tag: `${BASE_SERVICE}/cart/order`,
  }),
  /** @apis cart/destroy (장바구니 목록 삭제) */
  ['cart/destroy']: () => ({
    uri: `${BASE_URL}/cart/destroy`,
    tag: `${BASE_SERVICE}/cart/destroy`,
  }),
} as const;
