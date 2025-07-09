import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis asset (에셋 공통) */
export const ASSET_URIS = {
  /** @apis asset/grants/:grantId/download (다운로드) */
  ['asset/grants/:grantId/download-url']: (grantId: string) => ({
    uri: `${BASE_URL}/asset/grants/${grantId}/download-url`,
  }),
  /** @apis asset/grants/:grantId/download-reset (다운로드 횟수 초기화) */
  ['asset/grants/:grantId/download-reset']: (grantId: string) => ({
    uri: `${BASE_URL}/asset/grants/${grantId}/download-reset`,
  }),
  /** @apis asset/grants/:grantId/works (사용권 정보 입력) */
  ['asset/grants/:grantId']: (grantId: string) => ({
    uri: `${BASE_URL}/asset/grants/${grantId}`,
  }),
  /** @apis sset/grants/licensed-work/:assetLicensedWorkId (창작자, 창작물명 삭제) */
  ['asset/grants/licensed-work/:assetLicensedWorkId']: (assetLicensedWorkId: string) => ({
    uri: `${BASE_URL}/asset/grants/licensed-work/${assetLicensedWorkId}`,
  }),
} as const;
