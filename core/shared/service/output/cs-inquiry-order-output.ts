import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { OrderItemOutput } from '@/core/shared/service/output/order-item-output';

/** 1:1 문의 주문 정보를 반환 */
export type CsInquiryOrderOutput = {
  /** ID */
  id: UUIDAsString;
  /** 주문 정보 */
  orderItem: OrderItemOutput;
};
