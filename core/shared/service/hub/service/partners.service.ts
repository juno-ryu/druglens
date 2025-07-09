import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** @apis partners (판매자) */
const PARTNERS_APIS = {
  /** @apis partners/partner-data (판매자 정보 조회) */
  ['partners/partner-data']: {
    get: async () => {
      const { uri, tag } = HUB_URIS['partners/partner-data']();
      return await requestWithAuth<{ data: UserOutput }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
};

export default PARTNERS_APIS;
