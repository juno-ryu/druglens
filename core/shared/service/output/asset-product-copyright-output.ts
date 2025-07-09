import { Nullable } from '@/core/utils/types/selector/flexible';
import { HasRealLogo } from '@/core/shared/service/enum/has-real-logo';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';

/** 상품 저작권 정보를 반환 */
export type AssetProductCopyrightOutput = {
  /** 자체 제작 여부 */
  isOriginal: boolean;
  /** warehouse 소스 사용시 해당 내용 */
  warehouseSources: Nullable<string>;
  /** 상업 소스 사용시 해당 내용 */
  commercialSources: Nullable<string>;
  /** 실 로고의 사용 여부 */
  hasRealLogo: HasRealLogo;
  /** 번역본 리스트 */
  localizes: Nullable<Array<LocalizeOutput>>;
};
