import { PostAdultPayload, PutMemberDataPayload } from '@/core/shared/service/acon/types/members';
import { BooleanAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { BrandStatusOutput } from '@/core/shared/service/output/brand-output/brand-status-output';
import { UserAdultOutput } from '@/core/shared/service/output/user-adult-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** @apis members (회원) */
const MEMBERS_APIS = {
  /** @apis members/adult (성인 인증) */
  ['members/adult']: {
    post: async (payload: PostAdultPayload) => {
      const { uri } = ACON_URIS['members/adult']();
      return await requestWithAuth<{ data: UserAdultOutput }>(Operation.POST, uri, payload);
    },
  },
  /** @apis members/check-adult (성인 인증 여부 확인) */
  ['members/check-adult']: {
    get: async () => {
      const { uri, tag } = ACON_URIS['members/check-adult']();
      return requestWithAuth<{ data: BooleanAsString }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
  /** @apis members/member-data (회원 정보 수정) */
  ['members/member-data']: {
    get: async () => {
      const { uri, tag } = ACON_URIS['members/member-data']();
      return requestWithAuth<{ data: UserOutput }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
    put: async (payload: PutMemberDataPayload) => {
      const { uri } = ACON_URIS['members/member-data']();
      return await requestWithAuth<{ data: UserOutput }>(Operation.PUT, uri, payload);
    },
  },
  ['members/brands/status']: {
    get: async () => {
      const { uri, tag } = ACON_URIS['members/brands/status']();
      return requestWithAuth<{ data: Array<BrandStatusOutput> }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
};

export default MEMBERS_APIS;
