import { FaqSearchFilter } from '@/core/shared/service/acon/types/faq';
import { PostFaqPayload } from '@/core/shared/service/admin/types/faq';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { FaqAdminOutput } from '@/core/shared/service/output/faq-admin-output';
import { SimpleOutput } from '@/core/shared/service/output/simple-output';

const FAQ_APIS = {
  ['faqs']: {
    get: async (queryString: FaqSearchFilter) => {
      const { uri } = ADMIN_URIS['faqs'](queryString);
      return await requestWithAuth<{ data: FaqAdminOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
    post: async (payload: PostFaqPayload) => {
      const { uri } = ADMIN_URIS['faqs']();
      return await requestWithAuth<{ data: FaqAdminOutput }>(Operation.POST, uri, payload);
    },
  },
  ['faqs/:faqId']: {
    get: async (faqId: string) => {
      const { uri } = ADMIN_URIS['faqs/:faqId'](faqId);
      return await requestWithAuth<{ data: FaqAdminOutput }>(Operation.GET, uri);
    },
    patch: async (faqId: string, payload: PostFaqPayload) => {
      const { uri } = ADMIN_URIS['faqs/:faqId'](faqId);
      return await requestWithAuth<{ data: FaqAdminOutput }>(Operation.PATCH, uri, payload);
    },
    del: async (faqId: string) => {
      const { uri } = ADMIN_URIS['faqs/:faqId'](faqId);
      return await requestWithAuth<{ data: SimpleOutput }>(Operation.DELETE, uri);
    },
  },
};

export default FAQ_APIS;
