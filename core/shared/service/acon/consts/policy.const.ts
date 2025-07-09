import { EnumLanguageCode } from '@/shared/consts/common/language';
import { BASE_CF_ORIGIN, BASE_SERVICE } from '@/core/shared/service/acon/acon.common';

/** @apis 정책 화면 불러오기 */
export const POLICY_URIS = {
  ['policy/terms']: (lang: EnumLanguageCode) => ({
    uri: `${BASE_CF_ORIGIN}/terms/terms_${lang}.html`,
    tag: `${BASE_SERVICE}/terms/terms_${lang}.html`,
  }),
  ['policy/privacy']: (lang: EnumLanguageCode) => ({
    uri: `${BASE_CF_ORIGIN}/privacy/privacy_${lang}.html`,
    tag: `${BASE_SERVICE}/privacy/privacy_${lang}.html`,
  }),
  ['policy/eula']: (lang: EnumLanguageCode) => ({
    uri: `${BASE_CF_ORIGIN}/eula/eula_${lang}.html`,
    tag: `${BASE_SERVICE}/eula/eula_${lang}.html`,
  }),
} as const;
