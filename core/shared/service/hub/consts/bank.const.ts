import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis bank (은행) */
export const BANK_URIS = {
  /** @apis bank/banks 은행 목록 */
  ['bank/banks']: () => ({
    uri: `${BASE_URL}/banks`,
    tag: `${BASE_SERVICE}/bank/banks`,
  }),
} as const;
