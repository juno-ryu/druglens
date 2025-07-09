import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/api/api.common';
import { IdentityReadyPayload } from '@/core/shared/service/api/type/identity-danal';

/** @apis identity-danal */
export const IDENTITY_DANAL_URIS = {
  ['identity-danal/ready']: (options?: IdentityReadyPayload) => ({
    uri: transformQueryUri(`${BASE_URL}/identity-danal/ready`, options ?? {}),
    tag: `${BASE_SERVICE}/identity-danal/ready`,
    filter: transformQueryUri('', options ?? {}),
  }),
  ['identity-danal/report']: {
    uri: `${BASE_URL}/identity-danal/report`,
    tag: `${BASE_SERVICE}/identity-danal/report`,
  },
  ['identity-danal/deliver']: {
    uri: `${BASE_URL}/identity-danal/deliver`,
    tag: `${BASE_SERVICE}/identity-danal/deliver`,
  },
  ['identity-danal/finally']: (options?: IdentityReadyPayload) => ({
    uri: transformQueryUri(`${BASE_URL}/identity-danal/finally`, options ?? {}),
    tag: `${BASE_SERVICE}/identity-danal/finally`,
    filter: transformQueryUri('', options ?? {}),
  }),
} as const;
