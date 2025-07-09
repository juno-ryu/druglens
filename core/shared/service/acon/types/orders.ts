import { ISODateString } from 'next-auth';
import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { PageableInput } from '@/core/shared/service/input/common/pageable';

/** https://github.com/carpenstreet/zeus/blob/19662335ef1d054157cb61081d8ef546948d0c20/modules/core/src/main/kotlin/order/arguments/OrderServiceArgs.kt#L24 */
export enum FilterStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  TERMINATED = 'TERMINATED',
  CANCELED = 'CANCELED',
}

export interface OrdersSearchFilter extends PageableInput {
  since?: Nullable<ISODateString>;
  until?: Nullable<ISODateString>;
  orderNo?: Nullable<IntAsNumber>;
  status?: Nullable<FilterStatus>;
}
