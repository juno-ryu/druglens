import { LongAsNumber } from '@/core/utils/types/overridable/primitive';

/** 프로그램 확장자 정보를 반환 */
export type ExtensionOutput = {
  /** ID */
  id: LongAsNumber;
  /** 확장자 */
  name: string;
};
