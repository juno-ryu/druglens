import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis assets (상품) */
export const ASSETS_URIS = {
  ['assets']: (assetIds?: string[]) => ({
    uri: transformQueryUri(`${BASE_URL}/assets`, { ids: (assetIds ?? []).join(',') }),
    tag: `${BASE_SERVICE}/assets`,
    filter: transformQueryUri('', { ids: (assetIds ?? []).join(',') }),
  }),
  ['assets/:assetId']: (assetId: string) => ({
    uri: `${BASE_URL}/assets/${assetId}`,
    tag: `${BASE_SERVICE}/assets/:assetId`,
  }),
  ['asset/grants/:assetGrantId']: (assetGrantId: string) => ({
    uri: `${BASE_URL}/asset/grants/${assetGrantId}`,
    tag: `${BASE_SERVICE}/asset/grants/:assetGrantId`,
  }),
} as const;
