import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis partners (판매자) */
export const PARTNERS_URIS = {
  /** @apis partners/partner-data (판매자 정보 조회) */
  ['partners/partner-data']: () => ({
    uri: `${BASE_URL}/partners/partner-data`,
    tag: `${BASE_SERVICE}/partners/partner-data`,
  }),
} as const;
