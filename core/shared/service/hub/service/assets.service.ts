import { AssetCreateInput } from '@/core/shared/service/hub/types/assets';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { AssetOutput } from '@/core/shared/service/output/asset-output';

/** @apis assets (상품 파일) */
const ASSETS_APIS = {
  ['assets']: {
    get: async (assetIds: string[]) => {
      const { uri } = HUB_URIS['assets'](assetIds);
      return await requestWithAuth<{ data: AssetOutput[] }>(Operation.GET, uri, undefined, {});
    },
    post: async (payload: AssetCreateInput) => {
      const { uri } = HUB_URIS['assets']();
      return await requestWithAuth<{ data: AssetOutput }>(Operation.POST, uri, payload);
    },
  },
  ['assets/:assetId']: {
    get: async (assetId: string) => {
      const { uri } = HUB_URIS['assets/:assetId'](assetId);
      return await requestWithAuth<{ data: AssetOutput }>(Operation.GET, uri);
    },
    // put: async (id: string, data: StoreAssetData) => {
    //   const { uri } = HUB_URIS['assets/:assetId'](id);
    //   return await requestWithAuth<{ data: Asset }>(Operation.PUT, uri, data);
    // },
  },
};

export default ASSETS_APIS;
