import { ProductAssetsSearchFilter, ProductAssetsTagsSearchFilter } from '@/core/shared/service/acon/types/product';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { AssetOrderableOutput } from '@/core/shared/service/output/aseet-orderable-output';
import { AssetProductPublicOutput } from '@/core/shared/service/output/asset-product-public-output';
import { AssetProductTagListOutput } from '@/core/shared/service/output/asset-product-tag-list-output';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';

/** @apis product (상품) */
const PRODUCT_APIS = {
  /** @apis product/assets (에셋 상품 목록) */
  ['product/assets']: {
    get: async (searchFilter?: ProductAssetsSearchFilter) => {
      const { uri, tag } = ACON_URIS['product/assets'](searchFilter);
      return await request<{ data: AssetProductPublicOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  /** @apis product/assets/:assetProductId (에셋 상품 디테일) */
  ['product/assets/:assetProductId']: {
    get: async (assetProductId: string) => {
      const { uri, tag } = ACON_URIS['product/assets/:assetProductId'](assetProductId);
      return await request<{ data: AssetProductPublicOutput }>(Operation.GET, uri, undefined, {
        next: {},
      });
    },
  },
  /** @apis product/assets/:assetProductId/coupons (에셋 상품 쿠폰제안 리스트) */
  ['product/assets/:assetProductId/coupons']: {
    get: async (assetProductId: UUIDAsString) => {
      const { uri, tag } = ACON_URIS['product/assets/:assetProductId/coupons'](assetProductId);
      return await request<{ data: AssetProductPublicOutput }>(Operation.GET, uri, undefined, {
        next: {},
      });
    },
  },
  /** @apis product/assets/:assetProductId (에셋 상품 장바구니 담기) */
  ['product/assets/:assetProductId/cart']: {
    post: async (assetProductId: string, stockIds: string[]) => {
      const { uri } = ACON_URIS['product/assets/:assetProductId/cart'](assetProductId);
      return await requestWithAuth(Operation.POST, uri, { stocks: stockIds });
    },
  },
  /** @apis product/assets/:assetProductId/order (에셋 상품 바로 구매) */
  ['product/assets/:assetProductId/order']: {
    post: async (assetProductId: string, stockIds: string[]) => {
      const { uri } = ACON_URIS['product/assets/:assetProductId/order'](assetProductId);
      return await requestWithAuth<{ data: UUIDAsString }>(Operation.POST, uri, { stocks: stockIds });
    },
  },
  /** @apis product/assets/:assetOrderableId/grants (사용권 정보 조회) */
  ['product/assets/:assetOrderableId/grants']: {
    get: async (assetOrderableId: string) => {
      const { uri } = ACON_URIS['product/assets/:assetOrderableId/grants'](assetOrderableId);
      return await requestWithAuth<{ data: AssetOrderableOutput }>(Operation.GET, uri);
    },
  },
  /** @apis product/assets/tags (태그 리스트) */
  ['product/assets/tags']: {
    get: async (searchFilter?: ProductAssetsTagsSearchFilter) => {
      const { uri } = ACON_URIS['product/assets/tags'](searchFilter);
      return await request<{ data: AssetProductTagListOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  /** @apis product/assets/carts (여러개 장바구니 담기) */
  ['product/assets/carts']: {
    post: async (
      payload: {
        productId: UUIDAsString;
        stocks: UUIDAsString[];
      }[],
    ) => {
      const { uri } = ACON_URIS['product/assets/carts']();
      return await requestWithAuth<{ data: string }>(Operation.POST, uri, payload);
    },
  },
};

export default PRODUCT_APIS;
