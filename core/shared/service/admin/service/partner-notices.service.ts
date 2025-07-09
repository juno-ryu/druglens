import { PartnerNoticesSearchFilter, PostPartnerNoticePayload } from '@/core/shared/service/admin/types/partner-notices';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { PartnerNoticeAdminOutput } from '@/core/shared/service/output/partner-notice-admin-output';
import { PartnerNoticeHubOutput } from '@/core/shared/service/output/partner-notice-hub-output';
import { SimpleOutput } from '@/core/shared/service/output/simple-output';

/** @apis partner-notice (판매자 안내 게시판) */
const PARTNER_NOTICES_APIS = {
  ['partner-notices']: {
    get: async (queryString: PartnerNoticesSearchFilter) => {
      const { uri } = ADMIN_URIS['partner-notices'](queryString);
      return await requestWithAuth<{ data: PartnerNoticeAdminOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
    post: async (payload: PostPartnerNoticePayload) => {
      const { uri } = ADMIN_URIS['partner-notices']();
      return await requestWithAuth<{ data: PartnerNoticeHubOutput }>(Operation.POST, uri, payload);
    },
  },
  ['partner-notices/:partnerNoticeId']: {
    get: async (partnerNoticeId: string) => {
      const { uri } = ADMIN_URIS['partner-notices/:partnerNoticeId'](partnerNoticeId);
      return await requestWithAuth<{ data: PartnerNoticeAdminOutput }>(Operation.GET, uri);
    },
    patch: async (partnerNoticeId: string, payload: PostPartnerNoticePayload) => {
      const { uri } = ADMIN_URIS['partner-notices/:partnerNoticeId'](partnerNoticeId);
      return await requestWithAuth<{ data: PartnerNoticeAdminOutput }>(Operation.PATCH, uri, payload);
    },
    del: async (partnerNoticeId: string) => {
      const { uri } = ADMIN_URIS['partner-notices/:partnerNoticeId'](partnerNoticeId);
      return await requestWithAuth<{ data: SimpleOutput }>(Operation.DELETE, uri);
    },
  },
};
export default PARTNER_NOTICES_APIS;
