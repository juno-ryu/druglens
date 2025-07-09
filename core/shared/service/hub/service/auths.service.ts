import { GetUserResctrictPayload, PostEmailLoginPayload, PostEmailRegisterPayload } from '@/core/shared/service/hub/types/auths';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';

/** @apis auths (인증) */
const AUTHS_APIS = {
  /** @apis auths/email-register (이메일 회원 가입) */
  ['auths/email-register']: {
    post: async (payload: PostEmailRegisterPayload) => {
      const { uri } = HUB_URIS['auths/email-register']();
      return request<{ token: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/email-login (이메일 로그인) */
  ['auths/email-login']: {
    post: async (payload: PostEmailLoginPayload) => {
      const { uri } = HUB_URIS['auths/email-login']();
      return request<{ token: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/user-restrict (이용제한 여부) */
  ['auths/user-restrict']: {
    get: async (payload: GetUserResctrictPayload) => {
      const { uri } = HUB_URIS['auths/user-restrict'](payload);
      return requestWithAuth<{ data: boolean }>(Operation.GET, uri);
    },
  },
};

export default AUTHS_APIS;
