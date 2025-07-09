import { InquirySearchFilter, PostCustomerServicePayload } from '@/core/shared/service/acon/types/cs';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';
import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { CsInquiryAconOutput } from '@/core/shared/service/output/cs-inquiry-acon-output';

/** @apis cs (customer-services) */
const CS_APIS = {
  ['customer-services']: {
    get: async (queryString: InquirySearchFilter) => {
      const { uri } = ACON_URIS['customer-services'](queryString);
      return await requestWithAuth<{ data: CsInquiryAconOutput[]; pagination: PaginationOutput }>(Operation.GET, uri);
    },
    post: async (payload: PostCustomerServicePayload, hasLoggedIn?: boolean) => {
      const { uri } = ACON_URIS['customer-services']();
      // request애는 Bearer Token이 없으므로 로그인 한 상태에서는 requestWithAuth를 사용해야 어떤 유저가 보냈는지 알 수 있음
      return hasLoggedIn
        ? await requestWithAuth<{ data: CsInquiryAconOutput }>(Operation.POST, uri, payload)
        : await request<{ data: CsInquiryAconOutput }>(Operation.POST, uri, payload);
    },
  },
  ['customer-services/:csInquiryId']: {
    get: async (csInquiryId: string) => {
      const { uri } = ACON_URIS['customer-services/:csInquiryId'](csInquiryId);
      return await requestWithAuth<{ data: CsInquiryAconOutput }>(Operation.GET, uri);
    },
    del: async (csInquiryId: string) => {
      const { uri } = ACON_URIS['customer-services/:csInquiryId'](csInquiryId);
      return await requestWithAuth<{ data: string }>(Operation.DELETE, uri);
    },
  },
};

export default CS_APIS;
