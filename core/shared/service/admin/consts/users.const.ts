import { UsersSearchFilter } from '@/core/shared/service/admin/types/users';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { DAY_PATTERN, FOUR_DIGIT_YEAR, MONTH_PATTERN } from '@/core/utils/yup/regex/auth';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis users (유저) */
export const USERS_URIS = {
  ['users']: (searchFilter?: UsersSearchFilter) => {
    const pattern = new RegExp(`(?<date>${FOUR_DIGIT_YEAR}-${MONTH_PATTERN}-${DAY_PATTERN})`);
    const formattedSearchFilter = structuredClone({
      ...(searchFilter ?? {}),
      ...(searchFilter?.registerStartAt && { registerStartAt: searchFilter.registerStartAt.match(pattern)?.groups?.date }),
      ...(searchFilter?.registerEndAt && { registerEndAt: searchFilter.registerEndAt.match(pattern)?.groups?.date }),
    });
    return {
      uri: transformQueryUri(`${BASE_URL}/users`, formattedSearchFilter ?? {}),
      tag: `${BASE_SERVICE}/users`,
      filter: transformQueryUri('', formattedSearchFilter ?? {}),
    };
  },
  ['users/:userId']: (userId: string) => ({
    uri: `${BASE_URL}/users/${userId}`,
    tag: `${BASE_SERVICE}/users/${userId}`,
  }),
  ['users/:userId/order-stats']: (userId: string) => ({
    uri: `${BASE_URL}/users/${userId}/order-stats`,
    tag: `${BASE_SERVICE}/users/${userId}/order-stats`,
  }),
} as const;
