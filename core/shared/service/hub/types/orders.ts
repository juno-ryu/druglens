import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { PageableInput } from '@/core/shared/service/input/common/pageable';

export enum EnumPeriodField {
  PAID = 'PAID',
  TERMINATED = 'TERMINATED',
  ALL = 'ALL',
}

export enum EnumGrantField {
  GROUP = 'GROUP',
  WORK = 'WORK',
  ALL = 'ALL',
}

export enum EnumOrderItemStatus {
  SOLD = 'SOLD',
  CANCELED = 'CANCELED',
  ALL = 'ALL',
}

export enum EnumOrderLicense {
  PERSONAL = 'PERSONAL',
  /** 공동 사용권 (1회만 사용) */
  LIMITED1 = 'LIMITED1',
  /** 5회 사용권 */
  LIMITED5 = 'LIMITED5',
  /** 무제한 사용권 */
  UNLIMITED = 'UNLIMITED',
  /** 전체 */
  ALL = 'ALL',
}

/** @api GET ['orders'] */
export interface OrdersSearchFilter extends PageableInput {
  periodField?: EnumPeriodField;
  since?: ISODateString;
  until?: ISODateString;
  status?: EnumOrderItemStatus;
  license?: EnumOrderLicense;
  grantField?: EnumGrantField;
  grantWord?: string;
  productId?: UUIDAsString;
}
