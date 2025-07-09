import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

export type CouponRestrictDetailInput = {
  effect: boolean;
  ids: UUIDAsString[];
};
