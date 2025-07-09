import { InquirySearchFilter } from '@/core/shared/service/acon/types/cs';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis customer-services (cs) */
export const CS_URIS = {
  ['customer-services']: (searchFilter?: InquirySearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/customer-services`, searchFilter ?? {}),
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['customer-services/:csInquiryId']: (csInquiryId: string) => ({
    uri: `${BASE_URL}/customer-services/${csInquiryId}`,
  }),
  ['customer-services/:csInquiryId/scrap']: (csInquiryId: string) => ({
    uri: `${BASE_URL}/customer-services/${csInquiryId}/scrap`,
  }),
  ['customer-services/:csInquiryId/memos']: (csInquiryId: string) => ({
    uri: `${BASE_URL}/customer-services/${csInquiryId}/memos`,
  }),
} as const;
