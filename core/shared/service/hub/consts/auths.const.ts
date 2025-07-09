import { GetUserResctrictPayload } from '@/core/shared/service/hub/types/auths';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

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
  /** @apis auths/user-restrict (이용제한 여부) */
  ['auths/user-restrict']: (payload: GetUserResctrictPayload) => ({
    uri: transformQueryUri(`${BASE_URL}/auths/user-restrict`, payload),
    tag: `${BASE_SERVICE}/auths/user-restrict`,
    filter: transformQueryUri('', payload),
  }),
} as const;
