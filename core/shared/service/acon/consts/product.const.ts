import { ProductAssetsSearchFilter, ProductAssetsTagsSearchFilter } from '@/core/shared/service/acon/types/product';
import { GetProductAssetsDetailPayload } from '@/core/shared/service/acon/types/products';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis product (상품) */
export const PRODUCT_URIS = {
  /** @apis product/assets (에셋 상품 목록) */
  ['product/assets']: (searchFilter?: ProductAssetsSearchFilter) => {
    const formattedSearchFilter = structuredClone({
      ...(searchFilter ?? {}),
      priceRange: null,
    });
    return {
      uri: transformQueryUri(`${BASE_URL}/product/assets`, formattedSearchFilter ?? {}),
      tag: `${BASE_SERVICE}/product/assets`,
      filter: transformQueryUri('', formattedSearchFilter ?? {}),
    };
  },
  /** @apis product/assets/:assetProductId (에셋 상품 디테일) */
  ['product/assets/:assetProductId']: (assetProductId: GetProductAssetsDetailPayload['assetProductId']) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}`,
  }),
  /** @apis product/assets/:assetProductId/coupon (에셋 상품 제안 쿠폰리스트) */
  ['product/assets/:assetProductId/coupons']: (assetProductId: GetProductAssetsDetailPayload['assetProductId']) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/coupons`,
    tag: `product/assets/${assetProductId}/coupons`,
  }),
  /** @apis product/assets/:assetProductId (에셋 상품 장바구니 담기) */
  ['product/assets/:assetProductId/cart']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/cart`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/cart`,
  }),
  /** @apis product/assets/:assetProductId/order (에셋 상품 바로 구매) */
  ['product/assets/:assetProductId/order']: (assetProductId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetProductId}/order`,
    tag: `${BASE_SERVICE}/product/assets/${assetProductId}/order`,
  }),
  /** @apis product/assets/:assetOrderableId/grants (사용권 정보 조회) */
  ['product/assets/:assetOrderableId/grants']: (assetOrderableId: string) => ({
    uri: `${BASE_URL}/product/assets/${assetOrderableId}/grants`,
  }),
  // product/assets/tags
  /** @apis product/assets/tags (에셋 상품 태그) */
  ['product/assets/tags']: (searchFilter?: ProductAssetsTagsSearchFilter) => {
    const formattedSearchFilter = structuredClone({
      ...(searchFilter ?? {}),
      priceRange: null,
      size: searchFilter?.tagsSize ?? null,
    });
    return {
      uri: transformQueryUri(`${BASE_URL}/product/assets/tags`, formattedSearchFilter ?? {}),
      tag: `${BASE_SERVICE}/product/assets/tags`,
      filter: transformQueryUri('', formattedSearchFilter ?? {}),
    };
  },
  /** @apis product/assets/carts (여러개 장바구니 담기) */
  ['product/assets/carts']: () => ({
    uri: `${BASE_URL}/product/assets/carts`,
    tag: `${BASE_SERVICE}/product/assets/carts`,
  }),
} as const;
