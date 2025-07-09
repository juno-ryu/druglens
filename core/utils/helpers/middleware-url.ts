import { extractLang } from '@/core/utils/i18next/i18next.const';

export const isBypassPath = (requestUrl: string) => {
  const { pathname } = new URL(requestUrl);
  return pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('/.well-known');
};

export const isSameUrl = (requestUrl: string, redirectUrl: string): boolean => {
  const current = new URL(requestUrl);
  const target = new URL(redirectUrl, requestUrl);
  const lang = extractLang(current.pathname);
  const normalizedPathname = lang ? current.pathname.replace(`/${lang}`, '') : current.pathname;
  return normalizedPathname + current.search === target.pathname + target.search;
};

export const matchRecord = (records: string[], requestUrl: string) => {
  const record = records.find((pattern) => {
    const regex = new RegExp(pattern.replace(/:[a-zA-Z0-9-]+/g, '([^/]+)'));
    return regex.test(requestUrl);
  });
  return record;
};
