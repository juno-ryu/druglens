import { FaqSearchFilter } from '@/core/shared/service/acon/types/faq';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/acon/acon.common';

/** @apis faqs (faq) */
export const FAQS_URIS = {
  ['faqs']: (searchFilter?: FaqSearchFilter) => ({
    uri: transformQueryUri(`${BASE_URL}/faqs`, searchFilter ?? {}),
    tag: `${BASE_SERVICE}/faqs`,
    filter: transformQueryUri('', searchFilter ?? {}),
  }),
  ['faqs/:faqId']: (faqId: string) => ({
    uri: `${BASE_URL}/faqs/${faqId}`,
    tag: `${BASE_SERVICE}/faqs/${faqId}`,
  }),
} as const;
