import { PostSendLoginTwoFactorCodePayload, PostVerifyCodePayload } from '@/core/shared/service/admin/types/auths';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';

/** @apis auths (인증) */
const AUTHS_APIS = {
  ['auths/send-login-two-factor-code']: {
    /** @method post 관리자 소셜 로그인 2차 인증 코드 발송 */
    post: async (payload: PostSendLoginTwoFactorCodePayload) => {
      const { uri } = ADMIN_URIS['auths/send-login-two-factor-code']();
      return await request<{ data: UUIDAsString }>(Operation.POST, uri, payload);
    },
  },
  ['auths/verify-code']: {
    /** @method post auths/verify-code (2차 인증) */
    post: async (payload: PostVerifyCodePayload) => {
      const { uri } = ADMIN_URIS['auths/verify-code']();
      return await request<{ token: string }>(Operation.POST, uri, payload);
    },
  },
};

export default AUTHS_APIS;
