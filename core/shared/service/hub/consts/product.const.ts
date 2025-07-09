import { ProductAssetsSearchFilter } from '@/core/shared/service/hub/types/product';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis product  */
export const PRODUCT_URIS = {
  // 목록
  ['product/assets']: (searchFilter?: ProductAssetsSearchFilter) => {
    return {
      uri: transformQueryUri(`${BASE_URL}/product/assets`, searchFilter ?? {}),
      tag: `${BASE_SERVICE}/product/assets`,
      filter: transformQueryUri('', searchFilter ?? {}),
    };
  },
  // 상세
  ['product/assets/:assetProductId']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}`,
  }),
  // 심사 요청
  ['product/assets/:assetProductId/request-review']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/request-review`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/request-review`,
  }),
  // 반려 후 편집
  ['product/assets/:assetProductId/correct']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/correct`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/correct`,
  }),
} as const;
