import { ReviewAdminSearchFilter } from '@/core/shared/service/admin/types/reviews';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis review (리뷰) */
export const REVIEW_URIS = {
  ['reviews']: (searchFilter?: ReviewAdminSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/reviews`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/reviews`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['reviews/:review']: (reviewId: string) => ({
    uri: `${BASE_URL}/reviews/${reviewId}`,
    tag: `${BASE_SERVICE}/reviews/${reviewId}`,
  }),
  ['reviews/:review/best']: (reviewId: string) => ({
    uri: `${BASE_URL}/reviews/${reviewId}/best`,
    tag: `${BASE_SERVICE}/reviews/${reviewId}/best`,
  }),
  ['reviews/:review/scrap']: (reviewId: string) => ({
    uri: `${BASE_URL}/reviews/${reviewId}/scrap`,
    tag: `${BASE_SERVICE}/reviews/${reviewId}/scrap`,
  }),
  ['reviews/:review/visible']: (reviewId: string) => ({
    uri: `${BASE_URL}/reviews/${reviewId}/visible`,
    tag: `${BASE_SERVICE}/reviews/${reviewId}/visible`,
  }),
  ['reviews/:review/reply']: (reviewId: string) => ({
    uri: `${BASE_URL}/reviews/${reviewId}/reply`,
    tag: `${BASE_SERVICE}/reviews/${reviewId}/reply`,
  }),
  ['reviews/:reviewId/reply/:replyId']: (reviewId: string, replyId: string) => ({
    uri: `${BASE_URL}/reviews/${reviewId}/reply/${replyId}`,
    tag: `${BASE_SERVICE}/reviews/${reviewId}/reply/${replyId}`,
  }),
} as const;
