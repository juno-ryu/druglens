import { ReviewSearchFilter } from '@/core/shared/service/acon/types/review';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis reviews (리뷰) */
export const REVIEWS_URIS = {
  ['reviews']: (searchFilter?: ReviewSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/reviews`, searchFilter ?? {}),
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['reviews/average-rating']: (searchFilter?: ReviewSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/reviews/average-rating`, searchFilter ?? {}),
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['reviews/:reviewId']: (reviewId: UUIDAsString) => ({
    uri: `${BASE_URL}/reviews/${reviewId}`,
    tag: `${BASE_SERVICE}/reviews/${reviewId}`,
  }),
  ['products/review/upload-image']: () => ({
    uri: `${BASE_URL}/products/review/upload-image`,
    tag: `${BASE_SERVICE}/products/review/upload-image`,
  }),
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
