import { LongAsNumber } from '@/core/utils/types/overridable/primitive';

/** 프로그램 목록의 정보를 반환 */
export type ApplicationOutput = {
  /** ID */
  id: LongAsNumber;
  /** 이름 */
  name: string;
};
