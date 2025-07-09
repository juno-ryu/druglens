import { PostProductReviewPayload, ReviewSearchFilter, ReviewUploadImagePayload } from '@/core/shared/service/acon/types/review';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';
import { ImageOutput } from '@/core/shared/service/output/image-output';
import { ReviewAconOutput } from '@/core/shared/service/output/review-acon-output';
import { ReviewAverageRating } from '@/core/shared/service/output/review-average-rating';

/** @apis reviews (리뷰) */
const REVIEWS_APIS = {
  ['reviews']: {
    get: async (queryString: ReviewSearchFilter, hasLoggedIn?: boolean) => {
      const { uri } = ACON_URIS['reviews'](queryString);

      // request애는 Bearer Token이 없으므로 로그인 한 상태에서는 requestWithAuth를 사용해야 어떤 유저가 보냈는지 알 수 있음 -> 내가 좋아요 눌렀는지 여부때문에 필요함
      return hasLoggedIn
        ? await requestWithAuth<{ data: ReviewAconOutput[]; averageRating: ReviewAverageRating; pagination: PaginationOutput; sort: SortOutput }>(Operation.GET, uri)
        : await request<{ data: ReviewAconOutput[]; averageRating: ReviewAverageRating; pagination: PaginationOutput; sort: SortOutput }>(Operation.GET, uri);
    },
  },
  ['reviews/average-rating']: {
    get: async (queryString: ReviewSearchFilter) => {
      const { uri } = ACON_URIS['reviews/average-rating'](queryString);
      return await request<ReviewAverageRating>(Operation.GET, uri);
    },
  },
  ['reviews/:reviewId']: {
    get: async (reviewId: UUIDAsString, hasLoggedIn?: boolean) => {
      const { uri } = ACON_URIS['reviews/:reviewId'](reviewId);
      return hasLoggedIn ? await requestWithAuth<{ data: ReviewAconOutput }>(Operation.GET, uri) : await request<{ data: ReviewAconOutput }>(Operation.GET, uri);
    },
  },
  ['products/review/upload-image']: {
    post: async (payload: ReviewUploadImagePayload) => {
      const { uri } = ACON_URIS['products/review/upload-image']();
      const formData = new FormData();
      formData.append('file', payload.file);
      return await requestWithAuth<{ data: ImageOutput }>(Operation.POST, uri, formData);
    },
  },
  ['products/:productId/reviews']: {
    get: async (assetProductId: UUIDAsString) => {
      const { uri } = ACON_URIS['products/:productId/reviews'](assetProductId);
      return await requestWithAuth<{ data: ReviewAconOutput }>(Operation.GET, uri);
    },
    post: async (assetProductId: UUIDAsString, data: PostProductReviewPayload) => {
      const { uri } = ACON_URIS['products/:productId/reviews'](assetProductId);
      return await requestWithAuth<{ data: ReviewAconOutput }>(Operation.POST, uri, data);
    },
  },
  ['products/:productId/reviews/:reviewId']: {
    patch: async (assetProductId: UUIDAsString, reviewId: UUIDAsString, data: PostProductReviewPayload) => {
      const { uri } = ACON_URIS['products/:productId/reviews/:reviewId'](assetProductId, reviewId);
      return await requestWithAuth<{ data: ReviewAconOutput }>(Operation.PATCH, uri, data);
    },
    del: async (assetProductId: UUIDAsString, reviewId: UUIDAsString) => {
      const { uri } = ACON_URIS['products/:productId/reviews/:reviewId'](assetProductId, reviewId);
      return await requestWithAuth<{ data: string }>(Operation.DELETE, uri);
    },
  },
  ['products/:productId/reviews/:reviewId/favorite']: {
    patch: async (assetProductId: UUIDAsString, reviewId: UUIDAsString) => {
      const { uri } = ACON_URIS['products/:productId/reviews/:reviewId/favorite'](assetProductId, reviewId);
      return await requestWithAuth<{ data: string }>(Operation.PATCH, uri);
    },
  },
};

export default REVIEWS_APIS;
