import { PartnerNoticesSearchFilter } from '@/core/shared/service/hub/types/partner-notices';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { PartnerNoticeHubOutput } from '@/core/shared/service/output/partner-notice-hub-output';

/** @apis partner-notice (판매자 안내 게시판) */
const PARTNER_NOTICES_APIS = {
  ['partner-notices']: {
    get: async (queryString: PartnerNoticesSearchFilter) => {
      const { uri } = HUB_URIS['partner-notices'](queryString);
      return await requestWithAuth<{ data: PartnerNoticeHubOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['partner-notices/:partnerNoticeId']: {
    get: async (partnerNoticeId: string) => {
      const { uri } = HUB_URIS['partner-notices/:partnerNoticeId'](partnerNoticeId);
      return await requestWithAuth<{ data: PartnerNoticeHubOutput }>(Operation.GET, uri);
    },
  },
};
export default PARTNER_NOTICES_APIS;
