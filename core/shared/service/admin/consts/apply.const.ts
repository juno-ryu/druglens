import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis apply (관리자 등록) */
export const APPLY_URIS = {
  ['apply']: () => ({
    uri: `${BASE_URL}/apply`,
    tag: `${BASE_SERVICE}/apply`,
  }),
} as const;
