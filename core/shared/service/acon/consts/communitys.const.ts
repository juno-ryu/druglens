import { CommunitiesSearchFilter } from '@/core/shared/service/admin/types/community';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis communities (커뮤니티) */
export const COMMUNITIES_URIS = {
  ['communities']: (searchFilter?: CommunitiesSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/communities`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/communities`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  /** @apis communities/:postId (커뮤니티 포스트) */
  ['communities/:postId']: (postId: string) => ({
    uri: `${BASE_URL}/communities/${postId}`,
    tag: `${BASE_SERVICE}/communities/${postId}`,
  }),
  ['communities/:postId/report']: (postId: string) => ({
    uri: `${BASE_URL}/communities/${postId}/report`,
    tag: `${BASE_SERVICE}/communities/${postId}/report`,
  }),
  /** @apis communities/tags (커뮤니티 태그) */
  ['communities/tags']: () => ({
    uri: `${BASE_URL}/communities/tags`,
    tag: `${BASE_SERVICE}/communities/tags`,
  }),
  ['communities/comments/:postId']: (postId: string) => ({
    uri: `${BASE_URL}/communities/comments/${postId}`,
    tag: `${BASE_SERVICE}/communities/comments/${postId}`,
  }),
  ['communities/comments/:postId/report']: (postId: string) => ({
    uri: `${BASE_URL}/communities/comments/${postId}/report`,
    tag: `${BASE_SERVICE}/communities/comments/${postId}/report`,
  }),
  ['communities/:postId/like']: (postId: string) => ({
    uri: `${BASE_URL}/communities/${postId}/like`,
    tag: `${BASE_SERVICE}/communities/${postId}/like`,
  }),
  ['communities/comments/:commentId']: (commentId: string) => ({
    uri: `${BASE_URL}/communities/comments/${commentId}`,
    tag: `${BASE_SERVICE}/communities/comments/${commentId}`,
  }),
  ['communities/comments/:commentId/report']: (commentId: string) => ({
    uri: `${BASE_URL}/communities/comments/${commentId}/report`,
    tag: `${BASE_SERVICE}/communities/comments/${commentId}/report`,
  }),
  ['communities/comments/:commentId/like']: (commentId: string) => ({
    uri: `${BASE_URL}/communities/comments/${commentId}/like`,
    tag: `${BASE_SERVICE}/communities/comments/${commentId}/like`,
  }),
} as const;
