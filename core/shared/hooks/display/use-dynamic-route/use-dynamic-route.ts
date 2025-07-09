'use client';

import { Params } from 'next/dist/server/request/params';
import { useParams, usePathname } from 'next/navigation';
import { EnumLanguageCode, FALLBACK_LANG } from '@/shared/consts/common/language';
import { extractLang } from '@/core/utils/i18next/i18next.const';

const useDynamicRoute = <C extends Params & { lang: EnumLanguageCode }>() => {
  const params = useParams<C>();
  const pathname = usePathname();

  const mappedParams = new Map(Object.entries(params).map(([key, value]) => [value, key]));
  const fallbackParams = { lang: extractLang(pathname) ?? FALLBACK_LANG };

  const dynamicRoute = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => (mappedParams.has(segment) ? `:${mappedParams.get(segment)}` : segment))
    .join('/');

  return {
    params: (mappedParams.size > 0 ? params : fallbackParams) as C,
    pathname,
    dynamicRoute,
  };
};

export default useDynamicRoute;
