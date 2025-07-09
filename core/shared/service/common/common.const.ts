import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { GetCheckAlreadySocialLogin } from '@/core/shared/service/common/type/auths';

const BASE_URL = `${process.env.NEXT_PUBLIC_ZEUS_URI}/common`;
const BASE_SERVICE = 'common';

export type EnumCommonURI = (typeof COMMON_URIS)[keyof typeof COMMON_URIS];
export const COMMON_URIS = {
  /** @apis auth (인증 공통) */
  /** @apis send-email-verify-code (이메일 인증 코드 발송) */
  ['auth/send-email-verify-code']: () => ({
    uri: `${BASE_URL}/auth/send-email-verify-code`,
    tag: `${BASE_SERVICE}/auth/send-email-verify-code`,
  }),
  /** @apis confirm-email-verify-code (이메일 인증 코드 확인) */
  ['auth/confirm-email-verify-code']: () => ({
    uri: `${BASE_URL}/auth/confirm-email-verify-code`,
    tag: `${BASE_SERVICE}/auth/confirm-email-verify-code`,
  }),

  /** @apis auths (인증) */
  /** @apis auths/check-has-password (비밀번호 등록 여부 확인) */
  ['auths/check-has-password']: () => ({
    uri: `${BASE_URL}/auths/check-has-password`,
    tag: `${BASE_SERVICE}/auths/check-has-password`,
  }),
  /** @apis auths/change-password (비밀번호 변경) */
  ['auths/change-password']: () => ({
    uri: `${BASE_URL}/auths/change-password`,
    tag: `${BASE_SERVICE}/auths/change-password`,
  }),
  /** @apis auths/check-already-social-login (소셜 로그인 가입 여부 확인) */
  ['auths/check-already-social-login']: (payload: GetCheckAlreadySocialLogin) => ({
    uri: transformQueryUri(`${BASE_URL}/auths/check-already-social-login`, payload),
    tag: `${BASE_SERVICE}/auths/check-already-social-login`,
    filter: transformQueryUri('', payload),
  }),
  /** @apis auths/check-match-password (비밀번호 확인) */
  ['auths/check-match-password']: () => ({
    uri: `${BASE_URL}/auths/check-match-password`,
    tag: `${BASE_SERVICE}/auths/check-match-password`,
  }),
  /** @apis auths/reset-password (비밀번호 재설정) */
  ['auths/reset-password']: () => ({
    uri: `${BASE_URL}/auths/reset-password`,
    tag: `${BASE_SERVICE}/auths/reset-password`,
  }),
  /** @apis auths/send-password-reset (비밀번호 재설정 메일 발송) */
  ['auths/send-password-reset']: () => ({
    uri: `${BASE_URL}/auths/send-password-reset`,
    tag: `${BASE_SERVICE}/auths/send-password-reset`,
  }),
  /** @apis auths/store-password (비밀번호 등록) */
  ['auths/store-password']: () => ({
    uri: `${BASE_URL}/auths/store-password`,
    tag: `${BASE_SERVICE}/auths/store-password`,
  }),
  /** @apis auths/withdrawal (회원 탈퇴) */
  ['auths/withdrawal']: () => ({
    uri: `${BASE_URL}/auths/withdrawal`,
    tag: `${BASE_SERVICE}/auths/withdrawal`,
  }),

  /** @apis brands (브랜드)*/
  ['brands']: () => ({
    uri: `${BASE_URL}/brands`,
    tag: `${BASE_SERVICE}/brands`,
  }),

  /** @apis applications (프로그램) */
  ['applications']: () => ({
    uri: `${BASE_URL}/applications`,
    tag: `${BASE_SERVICE}/applications`,
  }),

  /** @apis extensions (확장자) */
  ['extensions']: () => ({
    uri: `${BASE_URL}/extensions`,
    tag: `${BASE_SERVICE}/extensions`,
  }),

  /** @apis category (카테고리) */
  ['category']: (code: string) => ({
    uri: transformQueryUri(`${BASE_URL}/category/tree`, { code }),
    tag: `${BASE_SERVICE}/category/tree`,
    filter: transformQueryUri('', { code }),
  }),
  ['category/node/:categoryNodeId']: (categoryNodeId: string) => ({
    uri: `${BASE_URL}/category/node/${categoryNodeId}`,
    tag: `${BASE_SERVICE}/category/node/${categoryNodeId}`,
  }),

  /** @apis checkout/:orderId/complete (결제 완료) */
  ['checkout/:orderId/complete']: (orderId: UUIDAsString) => ({
    uri: `${BASE_URL}/checkout/${orderId}/complete`,
    tag: `${BASE_SERVICE}/checkout/${orderId}/complete`,
  }),

  /** @apis s3-single-upload (5MB 미만 파일업로드) */
  ['upload/presigned']: () => ({
    uri: `${BASE_URL}/s3/upload/presigned`,
    tag: `${BASE_SERVICE}/upload/presigned`,
  }),

  /** @apis s3-multipart-upload (5MB 이상 파일업로드) */
  ['multipart-upload/init']: () => ({
    uri: `${BASE_URL}/s3/multipart-upload/init`,
    tag: `${BASE_SERVICE}/multipart-upload/init`,
  }),
  ['multipart-upload/complete']: () => ({
    uri: `${BASE_URL}/s3/multipart-upload/complete`,
    tag: `${BASE_SERVICE}/multipart-upload/complete`,
  }),

  /** @apis editor (에디터) */
  ['editor/upload-image']: () => ({
    uri: `${BASE_URL}/editor/upload-image`,
    tag: `${BASE_SERVICE}/editor/upload-image`,
  }),

  /** @apis asssets (에셋)*/
  ['assets/:assetId/download-url']: (assetId: string) => ({
    uri: `${BASE_URL}/assets/${assetId}/download-url`,
    tag: `${BASE_SERVICE}/assets/${assetId}/download-url`,
  }),

  /** @apis tag (태그) */
  ['tag/ac']: (text: string) => ({
    uri: transformQueryUri(`${BASE_URL}/tag/ac`, { q: text }),
    tag: `${BASE_SERVICE}/tag/ac`,
    filter: transformQueryUri('', { q: text }),
  }),
  ['tag/pick']: (ids: string[]) => ({
    uri: transformQueryUri(`${BASE_URL}/tag/pick`, { ids: ids.join(',') }),
    tag: `${BASE_SERVICE}/tag/pick`,
    filter: transformQueryUri('', { ids: ids.join(',') }),
  }),
};
