import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis scrap (스크랩) */
export const SCRAP_URIS = {
  ['products/scrap']: () => ({
    uri: `${BASE_URL}/products/scrap`,
    tag: `${BASE_SERVICE}/products/scrap`,
  }),
  /** @apis /scrap-items (여러개 스크랩 또는 삭제) */
  ['products/scrap-items']: () => ({
    uri: `${BASE_URL}/products/scrap-items`,
    tag: `${BASE_SERVICE}/products/scrap-items`,
  }),
  /** @apis /unscraps (스크랩 여러개 삭제) */
  ['products/unscraps']: () => ({
    uri: `${BASE_URL}/products/unscraps`,
    tag: `${BASE_SERVICE}/products/unscraps`,
  }),
  ['products/:productId/scraps']: (productId: string) => ({
    uri: `${BASE_URL}/products/${productId}/scraps`,
    tag: `${BASE_SERVICE}/product/${productId}/scraps`,
  }),
} as const;
