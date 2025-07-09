import { OrderSearchOptions, OrdersSearchFilter } from '@/core/shared/service/admin/types/orders';
import { SelectOption } from '@/shared/atom-components/common/filter/filter.const';

export const INITIAL_FILTER_STATE_FOR_ORDERS: OrdersSearchFilter = {
  searchOptions: OrderSearchOptions.EMAIL,
  orderNo: '',
  email: '',
  since: '',
  until: '',
  page: 0,
  size: 20,
  // sort: [],
};
export const SEARCH_OPTIONS_FOR_ORDERS: SelectOption<OrderSearchOptions>[] = [
  { value: OrderSearchOptions.EMAIL, label: '아이디(이메일)' },
  { value: OrderSearchOptions.ORDER_NO, label: '주문번호' },
] as const;
