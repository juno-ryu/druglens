import { GetPhoneNumberPayload, GetUserResctrictPayload } from '@/core/shared/service/acon/types/auths';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis auths (인증) */
export const AUTHS_URIS = {
  /** @apis auths/email-register (이메일 회원 가입) */
  ['auths/email-register']: () => ({
    uri: `${BASE_URL}/auths/email-register`,
    tag: `${BASE_SERVICE}/auths/email-register`,
  }),
  /** @apis auths/email-login (이메일 로그인) */
  ['auths/email-login']: () => ({
    uri: `${BASE_URL}/auths/email-login`,
    tag: `${BASE_SERVICE}/auths/email-login`,
  }),
  /** @apis auths/social-register (소셜 가입) */
  ['auths/social-register']: () => ({
    uri: `${BASE_URL}/auths/social-register`,
    tag: `${BASE_SERVICE}/auths/social-register`,
  }),
  /** @apis auths/social-login (소셜 로그인) */
  ['auths/social-login']: () => ({
    uri: `${BASE_URL}/auths/social-login`,
    tag: `${BASE_SERVICE}/auths/social-login`,
  }),
  /** @apis auths/member-apply (회원 등록) */
  ['auths/member-apply']: () => ({
    uri: `${BASE_URL}/auths/member-apply`,
    tag: `${BASE_SERVICE}/auths/member-apply`,
  }),
  /** @apis auths/user-restrict (이용제한 여부) */
  ['auths/user-restrict']: (payload: GetUserResctrictPayload) => ({
    uri: transformQueryUri(`${BASE_URL}/auths/user-restrict`, payload),
    tag: `${BASE_SERVICE}/auths/user-restrict`,
    filter: transformQueryUri('', payload),
  }),
  /** @apis auths/phone-number (전화번호로 유저 검색) */
  ['auths/phone-number']: (payload: GetPhoneNumberPayload) => ({
    uri: transformQueryUri(`${BASE_URL}/auths/phone-number`, payload),
    tag: `${BASE_SERVICE}/auths/phone-number`,
    filter: transformQueryUri('', payload),
  }),
} as const;
