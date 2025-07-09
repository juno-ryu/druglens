import { InquirySearchFilter } from '@/core/shared/service/acon/types/cs';
import { Operation, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';
import { CsAnswerInput } from '@/core/shared/service/input/customer-service-input/cs-answer-input';
import { CsInquiryMemoInput } from '@/core/shared/service/input/customer-service-input/cs-inquiry-memo-input';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { CsAnswerAdminOutput } from '@/core/shared/service/output/cs-answer-admin-output';
import { CsInquiryAdminOutput } from '@/core/shared/service/output/cs-inquiry-admin-output';
import { MemoOutput } from '@/core/shared/service/output/memo-output';

const CS_APIS = {
  ['customer-services']: {
    get: async (queryString: InquirySearchFilter) => {
      const { uri } = ADMIN_URIS['customer-services'](queryString);
      return await requestWithAuth<{ data: CsInquiryAdminOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
  },
  ['customer-services/:csInquiryId']: {
    patch: async (csInquiryId: string, payload: CsAnswerInput) => {
      const { uri } = ADMIN_URIS['customer-services/:csInquiryId'](csInquiryId);
      return requestWithAuth<{ data: CsAnswerAdminOutput }>(Operation.PATCH, uri, payload);
    },
    post: async (csInquiryId: string, payload: CsAnswerInput) => {
      const { uri } = ADMIN_URIS['customer-services/:csInquiryId'](csInquiryId);
      return requestWithAuth<{ data: CsAnswerAdminOutput }>(Operation.POST, uri, payload);
    },
    get: async (csInquiryId: string) => {
      const { uri } = ADMIN_URIS['customer-services/:csInquiryId'](csInquiryId);
      return await requestWithAuth<{ data: CsInquiryAdminOutput }>(Operation.GET, uri);
    },
  },
  ['customer-services/:csInquiryId/scrap']: {
    post: async (csInquiryId: string) => {
      const { uri } = ADMIN_URIS['customer-services/:csInquiryId/scrap'](csInquiryId);
      return requestWithAuth<{
        /** 스크랩 됐으면 true, 스크랩 해제 됐으면 false */
        data: boolean;
      }>(Operation.POST, uri);
    },
  },
  ['customer-services/:csInquiryId/memos']: {
    post: async (csInquiryId: string, payload: CsInquiryMemoInput) => {
      const { uri } = ADMIN_URIS['customer-services/:csInquiryId/memos'](csInquiryId);
      return requestWithAuth<{ data: MemoOutput }>(Operation.POST, uri, payload);
    },
  },
};
export default CS_APIS;
