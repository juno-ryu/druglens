import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 에이콘에서 1:1 문의하기 주문 정보 */
export type CsInquiryAttributesOrderInput = {
  /** Order Item ID */
  itemIds: Array<UUIDAsString>;
};
