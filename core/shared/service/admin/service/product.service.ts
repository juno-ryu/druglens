import { ISODateString } from 'next-auth';
import { ProductAssetsSearchFilter, PutProductAssetsDetailInput } from '@/core/shared/service/admin/types/product';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';

/** @apis product (상품) */
const PRODUCT_APIS = {
  ['product/assets']: {
    /** @method get 상품 목록 */
    get: async (searchFilter: ProductAssetsSearchFilter) => {
      const { uri } = ADMIN_URIS['product/assets'](searchFilter);
      return await requestWithAuth<{ data: AssetProductOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  // 상세
  ['product/assets/:assetProductId']: {
    /** @method get 상품 상세 */
    get: async (assetProductId: string) => {
      const { uri, tag } = ADMIN_URIS['product/assets/:assetProductId'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.GET, uri, undefined, {
        next: { tags: [tag] },
      });
    },
    /** @method put 상품 상세 수정 */
    put: async (assetProductId: string, payload: PutProductAssetsDetailInput) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PUT, uri, payload);
    },
  },
  ['product/assets/:assetProductId/prev']: {
    /** @method get 이전버전 상세 */
    get: async (assetProductId: string) => {
      const { uri, tag } = ADMIN_URIS['product/assets/:assetProductId/prev'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.GET, uri, undefined, {});
    },
  },
  ['product/assets/:assetProductId/start-review']: {
    /** @method patch 상품 심사 시작 */
    patch: async (assetProductId: string, message?: string) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/start-review'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri, { message });
    },
  },
  ['product/assets/:assetProductId/reject-review']: {
    /** @method patch 상품 심사 반려 */
    patch: async (assetProductId: string, message?: string) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/reject-review'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri, { message });
    },
  },
  ['product/assets/:assetProductId/denied-review']: {
    /** @method patch 상품 심사 거절 */
    patch: async (assetProductId: string, message?: string) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/denied-review'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri, { message });
    },
  },
  ['product/assets/:assetProductId/approve-review']: {
    /** @method patch 상품 심사 완료 */
    patch: async (assetProductId: string, message?: string) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/approve-review'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri, { message });
    },
  },
  ['product/assets/:assetProductId/publish']: {
    /** @deplicated 2025-05-28 */
    /** @method patch 상품 게시 */
    patch: async (assetProductId: string, payload: { publishAt: ISODateString }) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/publish'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri, payload);
    },
  },
  ['product/assets/:assetProductId/suspend']: {
    /** @method patch 상품 판매 중지 */
    patch: async (assetProductId: string) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/suspend'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri);
    },
  },
  ['product/assets/:assetProductId/resume']: {
    /** @method patch 상품 판매 재개 */
    patch: async (assetProductId: string) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/resume'](assetProductId);
      return await requestWithAuth<{ data: AssetProductOutput }>(Operation.PATCH, uri);
    },
  },
  ['product/assets/:assetProductId/localize']: {
    /** @method post 상품 번역본 등록 */
    patch: async (assetProductId: string, payload: Pick<PutProductAssetsDetailInput, 'title' | 'contentHead' | 'contentBody' | 'copyright'> & { lang: LanguageCode }) => {
      const { uri } = ADMIN_URIS['product/assets/:assetProductId/localize'](assetProductId);
      return await requestWithAuth(Operation.PATCH, uri, payload);
    },
  },
};

export default PRODUCT_APIS;
