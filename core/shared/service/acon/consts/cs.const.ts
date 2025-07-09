import { InquirySearchFilter } from '@/core/shared/service/acon/types/cs';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis cs (customer-services) */
export const CS_URIS = {
  ['customer-services']: (searchFilter?: InquirySearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/customer-services`, searchFilter ?? {}),
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['customer-services/:csInquiryId']: (csInquiryId: string) => ({
    uri: `${BASE_URL}/customer-services/${csInquiryId}`,
  }),
} as const;
