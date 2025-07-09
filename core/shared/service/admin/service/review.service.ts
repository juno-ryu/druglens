import { PostReviewReplyPayload, ReviewAdminSearchFilter } from '@/core/shared/service/admin/types/reviews';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { SortOutput } from '@/core/shared/service/output/common/sort-output';
import { ReviewAdminOutput } from '@/core/shared/service/output/review-admin-output';
import { ReviewReplyOutput } from '@/core/shared/service/output/review-reply-output';

/** @api review (리뷰) */
const REVIEW_APIS = {
  ['reviews']: {
    get: async (queryString: ReviewAdminSearchFilter) => {
      const { uri } = ADMIN_URIS['reviews'](queryString);
      return await requestWithAuth<{ data: ReviewAdminOutput[]; pagination: PaginationOutput; sort: SortOutput }>(Operation.GET, uri);
    },
  },
  ['reviews/:review']: {
    get: async (reviewId: string) => {
      const { uri } = ADMIN_URIS['reviews/:review'](reviewId);
      return await requestWithAuth<{ data: ReviewAdminOutput }>(Operation.GET, uri);
    },
  },
  ['reviews/:review/best']: {
    patch: async (reviewId: string, body: { best: boolean }) => {
      const { uri } = ADMIN_URIS['reviews/:review/best'](reviewId);
      return await requestWithAuth<{ data: boolean }>(Operation.PATCH, uri, body);
    },
  },
  ['reviews/:review/scrap']: {
    patch: async (reviewId: string) => {
      const { uri } = ADMIN_URIS['reviews/:review/scrap'](reviewId);
      return await requestWithAuth<{ data: boolean }>(Operation.PATCH, uri);
    },
  },
  ['reviews/:review/visible']: {
    patch: async (reviewId: string, body: { visible: boolean }) => {
      const { uri } = ADMIN_URIS['reviews/:review/visible'](reviewId);
      return await requestWithAuth<{ data: boolean }>(Operation.PATCH, uri, body);
    },
  },
  ['reviews/:review/reply']: {
    post: async (reviewId: string, body: PostReviewReplyPayload) => {
      const { uri } = ADMIN_URIS['reviews/:review/reply'](reviewId);
      return await requestWithAuth<ReviewReplyOutput>(Operation.POST, uri, body);
    },
  },
  ['reviews/:reviewId/reply/:replyId']: {
    delete: async (reviewId: string, replyId: string) => {
      const { uri } = ADMIN_URIS['reviews/:reviewId/reply/:replyId'](reviewId, replyId);
      return await requestWithAuth<void>(Operation.DELETE, uri); // 204 No Content
    },
  },
};
export default REVIEW_APIS;
