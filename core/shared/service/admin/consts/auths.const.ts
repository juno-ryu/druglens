import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis auths (인증) */
export const AUTHS_URIS = {
  ['auths/send-login-two-factor-code']: () => ({
    uri: `${BASE_URL}/auths/send-login-two-factor-code`,
    tag: `${BASE_SERVICE}/auths/send-login-two-factor-code`,
  }),
  ['auths/verify-code']: () => ({
    uri: `${BASE_URL}/auths/verify-code`,
    tag: `${BASE_SERVICE}/auths/verify-code`,
  }),
} as const;
