import { PutAgreePayload } from '@/core/shared/service/acon/types/marketing';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { InviteCodeOutput } from '@/core/shared/service/output/invite-code-output';
import { MarketingAgreeOutput } from '@/core/shared/service/output/marketing-agree-output';

/** @apis marketings (마케팅) */
const MARKETINGS_APIS = {
  /** @apis marketing/agree (마케팅 수신 동의 변경) */
  ['marketings/agree']: {
    get: async () => {
      const { uri } = ACON_URIS['marketings/agree']();
      return requestWithAuth<{ data: Array<MarketingAgreeOutput> }>(Operation.GET, uri);
    },
    put: async (payload: PutAgreePayload) => {
      const { uri } = ACON_URIS['marketings/agree']();
      return requestWithAuth<{ data: Array<MarketingAgreeOutput> }>(Operation.PUT, uri, payload);
    },
  },
  /** @apis marketings/invide-code (추천인 코드 생성) */
  ['marketings/invide-code']: {
    get: async () => {
      const { uri } = ACON_URIS['marketings/invide-code']();
      return requestWithAuth<{ data: InviteCodeOutput }>(Operation.GET, uri);
    },
    post: async () => {
      const { uri } = ACON_URIS['marketings/invide-code']();
      return await requestWithAuth<{ data: InviteCodeOutput }>(Operation.POST, uri, {});
    },
  },
};

export default MARKETINGS_APIS;
