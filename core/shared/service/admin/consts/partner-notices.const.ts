import { PartnerNoticesSearchFilter } from '@/core/shared/service/admin/types/partner-notices';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis partner-notices (판매자 안내 게시판) */
export const PARTNER_NOTICES_URIS = {
  ['partner-notices']: (searchFilter?: PartnerNoticesSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/partner-notices`, searchFilter ?? {}),
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['partner-notices/:partnerNoticeId']: (partnerNoticeId: string) => ({
    uri: `${BASE_URL}/partner-notices/${partnerNoticeId}`,
  }),
} as const;
