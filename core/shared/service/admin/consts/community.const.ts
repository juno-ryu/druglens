import { CommunitiesCommentsSearchFilter, CommunitiesSearchFilter } from '@/core/shared/service/admin/types/community';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis community (커뮤니티) */
export const COMMUNITY_URIS = {
  ['communities']: (searchFilter?: CommunitiesSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/communities`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/communities`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['communities/comments']: (searchFilter?: CommunitiesCommentsSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/communities/comments`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/communities/comments`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['communities/tags']: (searchFilter?: CommunitiesCommentsSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/communities/tags`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/communities/tags`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['communities/:postId']: (postId: string) => ({
    uri: `${BASE_URL}/communities/${postId}`,
    tag: `${BASE_SERVICE}/communities/${postId}`,
  }),
  ['communities/:postId/block']: (postId: string) => ({
    uri: `${BASE_URL}/communities/${postId}/block`,
    tag: `${BASE_SERVICE}/communities/${postId}/block`,
  }),
  ['communities/:postId/unblock']: (postId: string) => ({
    uri: `${BASE_URL}/communities/${postId}/unblock`,
    tag: `${BASE_SERVICE}/communities/${postId}/unblock`,
  }),
  ['communities/comments/:commentId']: (commentId: string) => ({
    uri: `${BASE_URL}/communities/comments/${commentId}`,
    tag: `${BASE_SERVICE}/communities/comments/${commentId}`,
  }),
  ['communities/comments/:commentId/block']: (commentId: string) => ({
    uri: `${BASE_URL}/communities/comments/${commentId}/block`,
    tag: `${BASE_SERVICE}/communities/comments/${commentId}/block`,
  }),
  ['communities/comments/:commentId/unblock']: (commentId: string) => ({
    uri: `${BASE_URL}/communities/comments/${commentId}/unblock`,
    tag: `${BASE_SERVICE}/communities/comments/${commentId}/unblock`,
  }),
  ['communities/tags/:postTagId']: (postTagId: string) => ({
    uri: `${BASE_URL}/communities/tags/${postTagId}`,
    tag: `${BASE_SERVICE}/communities/tags/${postTagId}`,
  }),
} as const;
