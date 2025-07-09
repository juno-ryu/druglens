import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { LanguageSet } from '@/core/shared/service/input/common/language-set';

export type CreateBrandInput = {
  /** 브랜드에서 사용할 파트너십의 ID */
  planId: IntAsNumber;
  /** 가입 언어 */
  language: LanguageCode;
  /** 브랜드 이름 다국어 세트 */
  name: Array<LanguageSet>;
  /** 국가 */
  country: CountryCode;
  /** 입점 검토 자료 */
  reference: Array<string>;
};
