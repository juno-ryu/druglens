import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

export type PostCashChargeOrdersPayload = {
  cashChargeOptionId: UUIDAsString;
  chargeAmount?: Nullable<BigDecimalAsNumber>;
  promotionId?: Nullable<UUIDAsString>;
};
