import { DoubleAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { SerialDurationOutput } from '@/core/shared/service/output/serial-duration-output';

/** 시리얼코드 구매단위 정보 */
export type SerialProductStockOutput = {
  /** ID */
  id: UUIDAsString;
  /** 가격 */
  price: DoubleAsNumber;
  /** 기간정보 */
  durations: Nullable<Array<SerialDurationOutput>>;
};
