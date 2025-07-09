'use client';

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import i18next, { KeyPrefix, Namespace } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { DEFINED_LANGS, EnumLanguageCode, I18NEXT_LANG_KEY } from '@/shared/consts/common/language';
import { getLangOptions } from '@/core/utils/i18next/i18next.const';

const isServer = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`@/utils/locales/${language}/${namespace}.json`)))
  .init({
    ...getLangOptions(),
    lng: undefined, // Detect language on client side
    detection: { order: ['path', 'htmlTag', 'cookie', 'navigator'] },
    preload: isServer ? DEFINED_LANGS : [],
  });

export const useTranslation = (lang: EnumLanguageCode, ns: Namespace, options?: { keyPrefix?: KeyPrefix<Namespace> }) => {
  const [{ [I18NEXT_LANG_KEY]: cookieLang }, setCookie] = useCookies([I18NEXT_LANG_KEY]);
  const { t, i18n, ready } = useTranslationOrg(ns, options);

  const [activeLang, setActiveLang] = useState(lang);

  if (isServer && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    if (!i18n.resolvedLanguage) return;
    if (activeLang === i18n.resolvedLanguage) return;
    setActiveLang(i18n.resolvedLanguage as EnumLanguageCode);
  }, [activeLang, i18n.resolvedLanguage]);

  useEffect(() => {
    if (!lang || i18n.resolvedLanguage === lang) return;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    if (cookieLang === lang) return;
    setCookie(I18NEXT_LANG_KEY, lang, { path: '/' });
  }, [lang, cookieLang]);

  return { t, i18n, ready };
};
