import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { AssetPublicOutput } from '@/core/shared/service/output/asset-public-output';

/** @apis assets (에셋 리스트) */
const ASSETS_APIS = {
  ['assets']: {
    get: async (assetIds: string[]) => {
      const { uri } = ACON_URIS['assets'](assetIds);
      return await request<{ data: AssetPublicOutput[] }>(Operation.GET, uri);
    },
  },
};

export default ASSETS_APIS;
