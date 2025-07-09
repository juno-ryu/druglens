import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';
import { CsInquiryCreateAttributesInput } from '@/core/shared/service/input/customer-service-input/cs-inquiry-create-attributes-input';
import { CsInquiryFilterInput } from '@/core/shared/service/input/customer-service-input/cs-inquiry-filter-input';

export type InquirySearchFilter = CsInquiryFilterInput & PageableInput & SortInput;

export type PostCustomerServicePayload = {
  /** 비로그인 상태일 때 전달 */
  email?: string;
  /** 문의 유형 */
  categoryNodeId: string;
  /** 문의 내용 */
  content: string;
  /** 추가 정보 */
  attributes?: CsInquiryCreateAttributesInput;
};
