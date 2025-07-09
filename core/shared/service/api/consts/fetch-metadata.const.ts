import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/api/api.common';

/** @apis fetch-metadata */
export const FETCH_METADATA_URIS = {
  ['fetch-metadata']: () => ({
    uri: `${BASE_URL}/fetch-metadata`,
    tag: `${BASE_SERVICE}/fetch-metadata`,
  }),
} as const;
