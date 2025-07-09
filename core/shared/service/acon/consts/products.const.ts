import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis products (상품) */
export const PRODUCTS_URIS = {
  ['products/:productId/reviews']: (productId: UUIDAsString) => ({
    uri: `${BASE_URL}/products/${productId}/reviews`,
    tag: `${BASE_SERVICE}/product/${productId}/reviews`,
  }),
  ['products/:productId/reviews/:reviewId']: (productId: UUIDAsString, reviewId: UUIDAsString) => ({
    uri: `${BASE_URL}/products/${productId}/reviews/${reviewId}`,
    tag: `${BASE_SERVICE}/product/${productId}/reviews/${reviewId}`,
  }),
  ['products/:productId/reviews/:reviewId/favorite']: (productId: UUIDAsString, reviewId: UUIDAsString) => ({
    uri: `${BASE_URL}/products/${productId}/reviews/${reviewId}/favorite`,
    tag: `${BASE_SERVICE}/product/${productId}/reviews/${reviewId}/favorite`,
  }),
} as const;
