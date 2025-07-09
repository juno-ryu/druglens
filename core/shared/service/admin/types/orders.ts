import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Optional } from '@/core/utils/types/selector/flexible';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';

export enum OrderSearchOptions {
  ORDER_NO = 'orderNo',
  EMAIL = 'email',
}

export interface OrderRefundPatchInput {
  // 환불 상품
  itemIds: UUIDAsString[];
  // 환불 사유
  reason: string;
}
export interface OrdersSearchFilter extends Partial<PageableInput>, Partial<SortInput> {
  searchOptions?: OrderSearchOptions;
  /** 주문번호
   * @example "2025010112345678"
   */
  orderNo: Optional<string>;

  /** 이메일
   * @example "acon@acon3d.com"
   */
  email: Optional<string>;

  /** 시작일
   * @example "2025-01-01T15:00:00Z"
   */
  since: Optional<string>;

  /** 종료일
   * @example "2025-01-02T14:59:59Z"
   */
  until: Optional<string>;
}
