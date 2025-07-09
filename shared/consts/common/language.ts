export type EnumLanguageCode = (typeof EnumLanguageCode)[keyof typeof EnumLanguageCode];
export const EnumLanguageCode = {
  KO: 'ko',
  EN: 'en',
  ZH: 'zh',
  JA: 'ja',
} as const;

export type EnumCurrencyCode = (typeof EnumCurrencyCode)[keyof typeof EnumCurrencyCode];
export const EnumCurrencyCode = {
  KRW: 'krw',
  USD: 'usd',
  CNY: 'cny',
  JPY: 'jpy',
} as const;

export type EnumRegionCode = (typeof EnumRegionCode)[keyof typeof EnumRegionCode];
export const EnumRegionCode = {
  KR: 'kr',
  US: 'us',
  CN: 'cn',
  JP: 'jp',
} as const;

export type EnumLocaleCode = (typeof EnumLocaleCode)[keyof typeof EnumLocaleCode];
export const EnumLocaleCode = {
  ko: 'ko-KR',
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
} as const;

export type EnumCountryCode = (typeof EnumCountryCode)[keyof typeof EnumCountryCode];
export const EnumCountryCode = {
  KOR: 'kor',
  USA: 'usa',
  CHN: 'chn',
  JPN: 'jpn',
} as const;

export type EnumCurrencySymbol = (typeof EnumCurrencySymbol)[keyof typeof EnumCurrencySymbol];
export const EnumCurrencySymbol = {
  WON: '￦',
  DOLLAR: '$',
  YEN_ZH: '¥',
  YEN_JA: '円',
} as const;

export const FALLBACK_LANG = EnumLanguageCode.EN;
export const SUPPORT_LANGS = Object.values(EnumLanguageCode).filter((lang) => lang !== FALLBACK_LANG);
export const DEFINED_LANGS = [FALLBACK_LANG, ...SUPPORT_LANGS];
export const PRIORITY_LANG = { [EnumLanguageCode.KO]: 1, [EnumLanguageCode.EN]: 2, [EnumLanguageCode.JA]: 3, [EnumLanguageCode.ZH]: 3 };

export const I18NEXT_LANG_KEY = 'admin-i18next-lang';
export const I18NEXT_DEFAULT_NS = 'translation';

export type TypeLanguageMapping = {
  languageCode: { name: string; value: EnumLanguageCode };
  currencyCode: { name: string; value: EnumCurrencyCode };
  regionCode: { name: string; value: EnumRegionCode };
  countryCode: { name: string; value: EnumCountryCode };
  localeCode: { name: string; value: EnumLocaleCode };
  currencySymbol: { name: string; value: EnumCurrencySymbol };
};

export const generateLanguage = (code?: EnumLanguageCode | EnumCurrencyCode | EnumRegionCode | EnumCountryCode | EnumLocaleCode | string) => {
  const enumMap = new Map<keyof TypeLanguageMapping, [string, string][]>([
    ['languageCode', Object.entries(EnumLanguageCode)],
    ['currencyCode', Object.entries(EnumCurrencyCode)],
    ['regionCode', Object.entries(EnumRegionCode)],
    ['countryCode', Object.entries(EnumCountryCode)],
    ['localeCode', Object.entries(EnumLocaleCode)],
    ['currencySymbol', Object.entries(EnumCurrencySymbol)],
  ]);

  const langs = [
    ...(enumMap.get('languageCode') ?? []),
    ...(enumMap.get('currencyCode') ?? []),
    ...(enumMap.get('regionCode') ?? []),
    ...(enumMap.get('countryCode') ?? []),
    ...(enumMap.get('localeCode') ?? []),
  ];

  let index = langs?.findIndex(([_, value]) => value === code);
  if (index === -1) index = langs?.findIndex(([_, value]) => value === FALLBACK_LANG);
  if (index === -1) index = 0;

  return Object.fromEntries(
    [...enumMap.keys()].map((key) => {
      const [name, value] = enumMap.get(key)![index % DEFINED_LANGS.length];
      return [key, { name, value }];
    }),
  ) as TypeLanguageMapping;
};
