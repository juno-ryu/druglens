'use server';

import { cookies, headers } from 'next/headers';
import { GUEST_UUID_KEY } from '@/shared/consts/common/auth';
import { HEADER_GUEST_UUID_KEY, HEADER_I18NEXT_LANGUAGE_KEY } from '@/shared/consts/common/header';
import { FALLBACK_LANG, I18NEXT_LANG_KEY } from '@/shared/consts/common/language';

export const getServerUUID = async () => {
  const header = await headers();
  const cookie = await cookies();
  return header.get(HEADER_GUEST_UUID_KEY) || cookie.get(GUEST_UUID_KEY)?.value || '';
};

export const getServerLang = async () => {
  const header = await headers();
  const cookie = await cookies();
  return header.get(HEADER_I18NEXT_LANGUAGE_KEY) || cookie.get(I18NEXT_LANG_KEY)?.value || FALLBACK_LANG;
};
