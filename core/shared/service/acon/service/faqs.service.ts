import { FaqSearchFilter } from '@/core/shared/service/acon/types/faq';
import { Operation, request } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { FaqAconOutput } from '@/core/shared/service/output/faq-acon-output';

/** @apis faqs (faqs) */
const FAQS_APIS = {
  ['faqs']: {
    /** FAQ는 페이지네이션 input을 따로 주지 않고 항상 모두 가져오는 것으로(page: 0, size: 10000) 합니다 */
    get: async (queryString: FaqSearchFilter) => {
      const { uri } = ACON_URIS['faqs']({
        ...queryString,
        page: 0,
        size: 10000,
      });
      return await request<{ data: FaqAconOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['faqs/:faqId']: {
    get: async (faqId: string) => {
      const { uri } = ACON_URIS['faqs/:faqId'](faqId);
      return await request<{ data: FaqAconOutput }>(Operation.GET, uri);
    },
  },
};

export default FAQS_APIS;
