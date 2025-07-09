import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { DurationType } from '@/core/shared/service/enum/duration-type';

/** 시리얼코드 기간 정보 */
export type SerialDurationOutput = {
  /** ID */
  id: UUIDAsString;
  /** 기간 타입 */
  type: DurationType;
  /** 기간 타입에 해당하는 값 */
  value: IntAsNumber;
};
