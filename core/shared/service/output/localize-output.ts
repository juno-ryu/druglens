import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { LongAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 다국어 정보를 반환 */
export type LocalizeOutput = {
  /** ID */
  id: LongAsNumber;
  /** 다국어 적용 대상 타입 */
  localizableType: string;
  /** 다국어 적용 대상 ID */
  localizableId: UUIDAsString;
  /** 언어 */
  lang: LanguageCode;
  /** 다국어 적용 정보 */
  key: string;
  /** 다국어 값 */
  text: string;
};
