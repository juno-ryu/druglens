import { LanguageCode } from '@/core/shared/service/enum/language-code';

export type LanguageSet = {
  /** 언어 종류 */
  lang: LanguageCode;
  /** 값 */
  text: string;
};
