import { PostCommunitiesCommentsInput, PostCommunitiesInput } from '@/core/shared/service/acon/types/communities';
import { CommunitiesCommentsSearchFilter, CommunitiesSearchFilter, CommunitiesTagsSearchFilter } from '@/core/shared/service/admin/types/community';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { CommunityAdminOutput } from '@/core/shared/service/output/community-admin-output';
import { PostCommentAdminOutput } from '@/core/shared/service/output/post-comment-admin-output';
import { PostTagOutput } from '@/core/shared/service/output/post-tag-output';

const COMMUNITY_APIS = {
  ['communities']: {
    get: async (queryString: CommunitiesSearchFilter) => {
      const { uri } = ADMIN_URIS['communities'](queryString);
      return await requestWithAuth<{ data: CommunityAdminOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
    post: async (payload: PostCommunitiesInput) => {
      const { uri } = ADMIN_URIS['communities']();
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.POST, uri, payload);
    },
  },
  ['communities/comments']: {
    get: async (queryString: CommunitiesCommentsSearchFilter) => {
      const { uri } = ADMIN_URIS['communities/comments'](queryString);
      return await requestWithAuth<{ data: PostCommentAdminOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['communities/tags']: {
    get: async (queryString: CommunitiesTagsSearchFilter) => {
      const { uri } = ADMIN_URIS['communities/tags'](queryString);
      return requestWithAuth<{ data: PostTagOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },

  ['communities/:postId']: {
    get: async (postId: string) => {
      const { uri } = ADMIN_URIS['communities/:postId'](postId);
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.GET, uri);
    },
    patch: async (postId: string, payload: PostCommunitiesInput) => {
      const { uri } = ADMIN_URIS['communities/:postId'](postId);
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.PATCH, uri, payload);
    },
    del: async (postId: string) => {
      const { uri } = ADMIN_URIS['communities/:postId'](postId);
      return requestWithAuth<{
        data: string;
      }>(Operation.DELETE, uri);
    },
  },
  ['communities/:postId/block']: {
    patch: async (postId: string) => {
      const { uri } = ADMIN_URIS['communities/:postId/block'](postId);
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.PATCH, uri);
    },
  },
  ['communities/:postId/unblock']: {
    patch: async (postId: string) => {
      const { uri } = ADMIN_URIS['communities/:postId/unblock'](postId);
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.PATCH, uri);
    },
  },
  ['communities/comments/:commentId']: {
    get: async (commentId: string) => {
      const { uri } = ADMIN_URIS['communities/comments/:commentId'](commentId);
      return requestWithAuth<{
        data: PostCommentAdminOutput;
      }>(Operation.GET, uri);
    },
    patch: async (commentId: string, payload: PostCommunitiesCommentsInput) => {
      const { uri } = ADMIN_URIS['communities/comments/:commentId'](commentId);
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.PATCH, uri, payload);
    },
    del: async (commentId: string) => {
      const { uri } = ADMIN_URIS['communities/comments/:commentId'](commentId);
      return requestWithAuth<{
        data: string;
      }>(Operation.DELETE, uri);
    },
  },
  ['communities/comments/:commentId/block']: {
    patch: async (commentId: string) => {
      const { uri } = ADMIN_URIS['communities/comments/:commentId/block'](commentId);
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.PATCH, uri);
    },
  },
  ['communities/comments/:commentId/unblock']: {
    patch: async (commentId: string) => {
      const { uri } = ADMIN_URIS['communities/comments/:commentId/unblock'](commentId);
      return requestWithAuth<{
        data: CommunityAdminOutput;
      }>(Operation.PATCH, uri);
    },
  },
  ['communities/tags/:postTagId']: {
    get: async (postTagId: string) => {
      const { uri } = ADMIN_URIS['communities/tags/:postTagId'](postTagId);
      return requestWithAuth<{
        data: PostTagOutput;
      }>(Operation.GET, uri);
    },
    patch: async (postTagId: string, payload: { name: string }) => {
      const { uri } = ADMIN_URIS['communities/tags/:postTagId'](postTagId);
      return requestWithAuth<{
        data: PostTagOutput;
      }>(Operation.PATCH, uri, payload);
    },
    del: async (postTagId: string) => {
      const { uri } = ADMIN_URIS['communities/tags/:postTagId'](postTagId);
      return requestWithAuth<{
        data: string;
      }>(Operation.DELETE, uri);
    },
  },
};

export default COMMUNITY_APIS;
