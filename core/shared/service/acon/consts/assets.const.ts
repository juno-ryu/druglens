import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis assets (에셋 리스트) */
export const ASSETS_URIS = {
  ['assets']: (assetIds?: string[]) => ({
    uri: transformQueryUri(`${BASE_URL}/assets`, { ids: (assetIds ?? []).join(',') }),
    tag: `${BASE_SERVICE}/assets`,
    filter: transformQueryUri('', { ids: (assetIds ?? []).join(',') }),
  }),
} as const;
