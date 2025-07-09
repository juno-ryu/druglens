import { PutProductAssetsDetailInput } from '@/core/shared/service/admin/types/product';
import { ProductAssetsInput, ProductAssetsSearchFilter } from '@/core/shared/service/hub/types/product';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';

/** @apis product (상품) */
const PRODUCT_APIS = {
  ['product/assets']: {
    /** @method get 상품 목록 */
    get: async (searchFilter: ProductAssetsSearchFilter) => {
      const { uri } = HUB_URIS['product/assets'](searchFilter);
      return await requestWithAuth<{ data: AssetProductOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
    /** @method post 상품 생성 */
    post: async (payload: ProductAssetsInput) => {
      const { uri } = HUB_URIS['product/assets']();
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.POST, uri, payload);
    },
  },
  ['product/assets/:assetProductId']: {
    /** @method get 상품 상세 */
    get: async (assetProductId: string) => {
      const { uri, tag } = HUB_URIS['product/assets/:assetProductId'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.GET, uri, undefined, {
        next: { tags: [tag] },
      });
    },
    /** @method put 상품 수정 */
    put: async (assetProductId: string, data: ProductAssetsInput) => {
      const { uri } = HUB_URIS['product/assets/:assetProductId'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PUT, uri, data);
    },
  },
  ['product/assets/:assetProductId/request-review']: {
    /** @method patch 심사 요청 */
    patch: async (assetProductId: string, message?: string) => {
      const { uri } = HUB_URIS['product/assets/:assetProductId/request-review'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri, { message });
    },
  },
  ['product/assets/:assetProductId/correct']: {
    /** @method patch 반려 후 편집 */
    patch: async (assetProductId: string) => {
      const { uri } = HUB_URIS['product/assets/:assetProductId/correct'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri);
    },
  },
};

export default PRODUCT_APIS;
