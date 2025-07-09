import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type MiddlewareFunctionProps } from '@rescale/nemo';
import acceptLanguage from 'accept-language';
import { DEFINED_LANGS, FALLBACK_LANG, I18NEXT_LANG_KEY } from '@/shared/consts/common/language';
import { isBypassPath, isSameUrl } from '@/core/utils/helpers/middleware-url';
import { extractLang } from '@/core/utils/i18next/i18next.const';

acceptLanguage.languages(DEFINED_LANGS);

const withLangMiddleware = async ({ request, forward }: MiddlewareFunctionProps) => {
  try {
    if (isBypassPath(request.url)) {
      const responseNext = NextResponse.next();
      return forward(responseNext);
    }

    let lang;
    const cookie = await cookies();
    const extractedLang = extractLang(request.nextUrl.pathname);
    const referer = request.headers.has('referer') ? request.headers.get('referer') : null;

    // 1. Extracted from Request URL
    if (!lang && extractedLang) {
      lang = extractedLang;
    }
    // 2. Extract from URL on previous page
    if (!lang && referer) {
      const refererLang = extractLang(new URL(referer).pathname);
      if (refererLang) lang = refererLang;
    }
    // 3. Extract from cookies
    if (!lang && cookie.has(I18NEXT_LANG_KEY)) {
      const cookieLang = acceptLanguage.get(cookie.get(I18NEXT_LANG_KEY)?.value);
      if (DEFINED_LANGS.some((lang) => lang === cookieLang)) lang = cookieLang;
    }
    // 4. Extract from HTTP Header
    if (!lang && request?.headers) {
      const headerLang = acceptLanguage.get(request?.headers?.get?.('Accept-Language'));
      if (DEFINED_LANGS.some((lang) => lang === headerLang)) lang = headerLang;
    }
    // 5. Basic Language
    if (!lang) {
      lang = FALLBACK_LANG;
    }

    // Language code does not exist or is not supported in the request URL
    if (lang !== extractedLang) {
      const { pathname, search } = new URL(request.nextUrl);
      return NextResponse.redirect(new URL(`/${lang}${pathname}${search}`, request.url));
    }

    // Response With Cookie
    const responseNext = NextResponse.next();
    cookie.set(I18NEXT_LANG_KEY, lang);
    return forward(responseNext);
  } catch (error) {
    console.error('FIXME: ', error);
  }
};

export default withLangMiddleware;
