import { FaqSearchFilter } from '@/core/shared/service/acon/types/faq';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/admin/admin.common';

/** @apis faqs (faq) */
export const FAQ_URIS = {
  ['faqs']: (searchFilter?: FaqSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/faqs`, searchFilter ?? {}),
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['faqs/:faqId']: (faqId: string) => ({
    uri: `${BASE_URL}/faqs/${faqId}`,
  }),
} as const;
