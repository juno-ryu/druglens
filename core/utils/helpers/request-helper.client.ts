'use client';

import { GUEST_UUID_KEY } from '@/shared/consts/common/auth';
import { FALLBACK_LANG, I18NEXT_LANG_KEY } from '@/shared/consts/common/language';

export const getClientUUID = () => {
  const match = document.cookie.match(new RegExp(`(^| )${GUEST_UUID_KEY}=([^;]+)`));
  return match ? match[2] : '';
};

export const getClientLang = () => {
  const match = document.cookie.match(new RegExp(`(^| )${I18NEXT_LANG_KEY}=(?<lang>[^;]+)`));
  return match ? match?.groups?.lang : FALLBACK_LANG;
};
