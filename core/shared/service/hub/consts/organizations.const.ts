import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis organizations (조직) */
export const ORGANIZATIONS_URIS = {
  /** @apis bank/banks 은행 목록 */
  ['organizations']: () => ({
    uri: `${BASE_URL}/organizations`,
    tag: `${BASE_SERVICE}/organizations`,
  }),
} as const;
