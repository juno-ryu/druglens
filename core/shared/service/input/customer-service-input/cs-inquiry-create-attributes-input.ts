import { Nullable } from '@/core/utils/types/selector/flexible';
import { CsInquiryAttributesOrderInput } from '@/core/shared/service/input/customer-service-input/cs-inquiry-attributes-order-input';
import { CsInquiryCreateAttributesDepositInput } from '@/core/shared/service/input/customer-service-input/cs-inquiry-create-attributes-deposit-input';
import { CsInquiryCreateAttributesFileInput } from '@/core/shared/service/input/customer-service-input/cs-inquiry-create-attributes-file-input';
import { CsInquiryCreateAttributesGrantInput } from '@/core/shared/service/input/customer-service-input/cs-inquiry-create-attributes-grant-input';

/** 에이콘에서 1:1 문의하기 추가 정보 */
export type CsInquiryCreateAttributesInput = {
  /** 문의에 연관 된 주문 상품 정보 */
  order: Nullable<CsInquiryAttributesOrderInput>;
  /** 문의에 연관 된 라이센스 정보 */
  grant: Nullable<CsInquiryCreateAttributesGrantInput>;
  /** 문의에 연관 된 첨부파일 정보 */
  file: Nullable<CsInquiryCreateAttributesFileInput>;
  /** 문의에 연관 된 캐시 충전 정보 */
  deposit: Nullable<CsInquiryCreateAttributesDepositInput>;
};
