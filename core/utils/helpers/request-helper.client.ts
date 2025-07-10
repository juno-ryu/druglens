'use client';

import {
  FALLBACK_LANG,
  I18NEXT_LANG_KEY,
} from '@/shared/consts/common/language';

export const getClientLang = () => {
  const match = document.cookie.match(
    new RegExp(`(^| )${I18NEXT_LANG_KEY}=(?<lang>[^;]+)`)
  );
  return match ? match?.groups?.lang : FALLBACK_LANG;
};
