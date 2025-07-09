import { ProductAssetsSearchFilter } from '@/core/shared/service/admin/types/product';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

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
  // 이전 버전 상세
  ['product/assets/:assetProductId/prev']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/prev`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/prev`,
  }),
  // 심사 시작
  ['product/assets/:assetProductId/start-review']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/start-review`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/start-review`,
  }),
  // 심사 반려
  ['product/assets/:assetProductId/reject-review']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/reject-review`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/reject-review`,
  }),
  // 심사 거절
  ['product/assets/:assetProductId/denied-review']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/denied-review`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/denied-review`,
  }),
  // 심사 완료
  ['product/assets/:assetProductId/approve-review']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/approve-review`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/approve-review`,
  }),
  // 게시
  ['product/assets/:assetProductId/publish']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/publish`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/publish`,
  }),
  // 판매 중지
  ['product/assets/:assetProductId/suspend']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/suspend`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/suspend`,
  }),
  // 판매 재개
  ['product/assets/:assetProductId/resume']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/resume`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/resume`,
  }),
  // 번역본 등록
  ['product/assets/:assetProductId/localize']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/localize`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/localize`,
  }),
} as const;
