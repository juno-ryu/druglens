import {
  GetPhoneNumberPayload,
  GetUserResctrictPayload,
  PostEmailLoginPayload,
  PostEmailRegisterPayload,
  PostMemberApplyPayload,
  PostSocialLoginPayload,
  PostSocialRegisterPayload,
} from '@/core/shared/service/acon/types/auths';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** @apis auths (인증) */
const AUTHS_APIS = {
  /** @apis auths/email-register (이메일 회원 가입) */
  ['auths/email-register']: {
    post: async (payload: PostEmailRegisterPayload) => {
      const { uri } = ACON_URIS['auths/email-register']();
      return request<{ token: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/email-login (이메일 로그인) */
  ['auths/email-login']: {
    post: async (payload: PostEmailLoginPayload) => {
      const { uri } = ACON_URIS['auths/email-login']();
      return request<{ token: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/social-register (소셜 가입) */
  ['auths/social-register']: {
    post: async (payload: PostSocialRegisterPayload) => {
      const { uri } = ACON_URIS['auths/social-register']();
      return request<{ token: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/social-login (소셜 로그인) */
  ['auths/social-login']: {
    post: async (payload: PostSocialLoginPayload) => {
      const { uri } = ACON_URIS['auths/social-login']();
      return request<{ token: string }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/member-apply (회원 등록) */
  ['auths/member-apply']: {
    post: async (payload: PostMemberApplyPayload) => {
      const { uri } = ACON_URIS['auths/member-apply']();
      return requestWithAuth<{ data: UserOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/user-restrict (이용제한 여부) */
  ['auths/user-restrict']: {
    get: async (payload: GetUserResctrictPayload) => {
      const { uri } = ACON_URIS['auths/user-restrict'](payload);
      return requestWithAuth<{ data: boolean }>(Operation.GET, uri);
    },
  },
  /** @apis auths/phone-number (전화번호로 유저 검색) */
  ['auths/phone-number']: {
    get: async (payload: GetPhoneNumberPayload) => {
      const { uri } = ACON_URIS['auths/phone-number'](payload);
      return request<{ data: Nullable<Array<UserOutput>> }>(Operation.GET, uri);
    },
  },
};

export default AUTHS_APIS;
