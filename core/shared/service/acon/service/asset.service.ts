import { PostDownloadUrlOutput, PostGrantWorksPayload } from '@/core/shared/service/acon/types/asset';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { AssetGrantOutput } from '@/core/shared/service/output/asset-grant-output';
import { AssetGrantTargetOutput } from '@/core/shared/service/output/asset-grant-target-output';
import { SimpleOutput } from '@/core/shared/service/output/simple-output';

/** @apis asset (에셋 공통) */
const ASSET_APIS = {
  /** @apis asset/grants/:grantId/download (다운로드) */
  ['asset/grants/:grantId/download-url']: {
    post: async (grantId: string, assetId: string) => {
      const { uri } = ACON_URIS['asset/grants/:grantId/download-url'](grantId);
      const uriWithQueryParams = new URL(uri);

      uriWithQueryParams.searchParams.append('assetId', assetId);

      return await requestWithAuth<{ data: PostDownloadUrlOutput }>(Operation.POST, uriWithQueryParams.toString());
    },
  },
  /** @apis asset/grants/:grantId/download-reset (다운로드 횟수 초기화) */
  ['asset/grants/:grantId/download-reset']: {
    post: async (grantId: string, assetId: string) => {
      const { uri } = ACON_URIS['asset/grants/:grantId/download-reset'](grantId);
      const uriWithQueryParams = new URL(uri);

      uriWithQueryParams.searchParams.append('assetId', assetId);

      return await requestWithAuth<{ data: AssetGrantTargetOutput }>(Operation.POST, uriWithQueryParams.toString());
    },
  },
  /** @apis asset/grants/:grantId/works (사용권 정보 입력) */
  ['asset/grants/:grantId']: {
    post: async (grantId: string, payload: PostGrantWorksPayload) => {
      const { uri } = ACON_URIS['asset/grants/:grantId'](grantId);

      /** groupName을 ''으로 전달할 경우 `409 Personal grant can not have group name` 에러가 발생하기 때문에 groupName을 null로 처리합니다 */
      if (payload.groupName === '') {
        payload.groupName = null;
      }

      return requestWithAuth<{ data: AssetGrantOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis sset/grants/licensed-work/:assetLicensedWorkId (창작자, 창작물명 삭제) */
  ['asset/grants/licensed-work/:assetLicensedWorkId']: {
    del: async (assetLicensedWorkId: string) => {
      const { uri } = ACON_URIS['asset/grants/licensed-work/:assetLicensedWorkId'](assetLicensedWorkId);
      return requestWithAuth<{ data: SimpleOutput }>(Operation.DELETE, uri);
    },
  },
};

export default ASSET_APIS;
