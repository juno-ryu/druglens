import { Nullable } from '@/core/utils/types/selector/flexible';
import { HasRealLogo } from '@/core/shared/service/enum/has-real-logo';

/** 저작권 관련 정보 */
export type CopyrightInput = {
  /** 자체 제작 여부 */
  isOriginal: boolean;
  /** warehouse 소스 사용시 해당 내용 */
  warehouseSources: Nullable<string>;
  /** 상업 소스 사용시 해당 내용 */
  commercialSources: Nullable<string>;
  /** 실 로고의 사용 여부 */
  hasRealLogo: HasRealLogo;
};
