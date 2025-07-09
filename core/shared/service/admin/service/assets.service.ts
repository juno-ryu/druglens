import { get } from 'lodash';
import { AssetGrantsPostInput } from '@/core/shared/service/admin/types/assts';
import { PostSendLoginTwoFactorCodePayload, PostVerifyCodePayload } from '@/core/shared/service/admin/types/auths';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { AssetGrantOutput } from '@/core/shared/service/output/asset-grant-output';
import { AssetOutput } from '@/core/shared/service/output/asset-output';

/** @apis assets (상품) */
const ASSETS_APIS = {
  ['assets']: {
    /** @method GET 에셋 리스트 */
    get: async (assetIds: string[]) => {
      const { uri } = ADMIN_URIS['assets'](assetIds);
      return await requestWithAuth<{ data: AssetOutput[] }>(Operation.GET, uri);
    },
  },
  ['assets/:assetId']: {
    /** @method GET 에셋 상세 */
    get: async (assetId: UUIDAsString) => {
      const { uri } = ADMIN_URIS['assets/:assetId'](assetId);
      return await requestWithAuth<{ data: AssetOutput }>(Operation.GET, uri);
    },
  },
  ['asset/grants/:assetGrantId']: {
    /** @method POST 주문한 상품의 사용권을 변경합니다.(공동사용권1회 <-> 개인사용권만 가능) */
    post: async (assetGrantId: UUIDAsString, payload: AssetGrantsPostInput) => {
      const { uri } = ADMIN_URIS['asset/grants/:assetGrantId'](assetGrantId);
      return await requestWithAuth<{ data: AssetGrantOutput }>(Operation.POST, uri, payload);
    },
  },
};

export default ASSETS_APIS;
