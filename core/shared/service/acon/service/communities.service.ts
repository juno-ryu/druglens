import { PostCommunitiesCommentsInput, PostCommunitiesInput } from '@/core/shared/service/acon/types/communities';
import { CommunitiesSearchFilter, CommunitiesTagsSearchFilter } from '@/core/shared/service/admin/types/community';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { CommunityAconOutput } from '@/core/shared/service/output/community-acon-output';
import { PostTagOutput } from '@/core/shared/service/output/post-tag-output';

/** @apis communities (커뮤니티) */
const COMMUNITIES_APIS = {
  ['communities']: {
    get: async (queryString: CommunitiesSearchFilter) => {
      const { uri } = ACON_URIS['communities']({ ...queryString });
      const uriWithQueryParams = new URL(uri);
      uriWithQueryParams.searchParams.append('sort', 'isNotice,desc');
      uriWithQueryParams.searchParams.append('sort', 'createdAt,desc');

      return await request<{ data: CommunityAconOutput[]; pagination: PaginationOutput }>(Operation.GET, uriWithQueryParams.toString());
    },

    post: async (payload: PostCommunitiesInput) => {
      const { uri } = ACON_URIS['communities']();
      return requestWithAuth<{ data: CommunityAconOutput }>(Operation.POST, uri, payload);
    },
  },
  ['communities/comments/:postId']: {
    post: async (postId: string, payload: PostCommunitiesCommentsInput) => {
      const { uri } = ACON_URIS['communities/comments/:postId'](postId);
      return requestWithAuth<{ data: CommunityAconOutput }>(Operation.POST, uri, payload);
    },
  },
  ['communities/tags']: {
    get: async (queryString: CommunitiesTagsSearchFilter) => {
      const { uri } = ACON_URIS['communities/tags']();
      const uriWithQueryParams = new URL(uri);

      const { name, startAt, endAt, page, size } = queryString;
      if (name) uriWithQueryParams.searchParams.append('name', name);
      if (startAt) uriWithQueryParams.searchParams.append('startAt', startAt);
      if (endAt) uriWithQueryParams.searchParams.append('endAt', endAt);
      if (page) uriWithQueryParams.searchParams.append('page', page.toString());
      if (size) uriWithQueryParams.searchParams.append('size', size.toString());

      return requestWithAuth<{ data: PostTagOutput[]; pagination: PaginationOutput }>(Operation.GET, uriWithQueryParams.toString());
    },
  },
  ['communities/:postId']: {
    get: async (postId: string) => {
      const { uri } = ACON_URIS['communities/:postId'](postId);
      return request<{ data: CommunityAconOutput }>(Operation.GET, uri);
    },

    patch: async (postId: string, payload: PostCommunitiesInput) => {
      const { uri } = ACON_URIS['communities/:postId'](postId);
      return requestWithAuth<{ data: CommunityAconOutput }>(Operation.PATCH, uri, payload);
    },

    del: async (postId: string) => {
      const { uri } = ACON_URIS['communities/:postId'](postId);
      return requestWithAuth<{ data: string }>(Operation.DELETE, uri);
    },
  },
  ['communities/:postId/report']: {
    post: async (postId: string) => {
      const { uri } = ACON_URIS['communities/:postId/report'](postId);
      return requestWithAuth<{ data: string }>(Operation.POST, uri);
    },
  },
  ['communities/:postId/like']: {
    post: async (postId: string) => {
      const { uri } = ACON_URIS['communities/:postId/like'](postId);
      return requestWithAuth<{ data: CommunityAconOutput }>(Operation.POST, uri);
    },
  },
  ['communities/comments/:commentId']: {
    del: async (commentId: string) => {
      const { uri } = ACON_URIS['communities/comments/:commentId'](commentId);
      return requestWithAuth<{ data: string }>(Operation.DELETE, uri);
    },

    patch: async (commentId: string, payload: PostCommunitiesCommentsInput) => {
      const { uri } = ACON_URIS['communities/comments/:commentId'](commentId);
      return requestWithAuth<{ data: CommunityAconOutput }>(Operation.PATCH, uri, payload);
    },
  },
  ['communities/comments/:commentId/report']: {
    post: async (commentId: string) => {
      const { uri } = ACON_URIS['communities/comments/:commentId/report'](commentId);
      return requestWithAuth<{ data: string }>(Operation.POST, uri);
    },
  },
  ['communities/comments/:commentId/like']: {
    post: async (commentId: string) => {
      const { uri } = ACON_URIS['communities/comments/:commentId/like'](commentId);
      return requestWithAuth<{ data: string }>(Operation.POST, uri);
    },
  },
};

export default COMMUNITIES_APIS;
