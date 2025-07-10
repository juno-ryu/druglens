import { type MiddlewareFunctionProps } from '@rescale/nemo';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import {
  HEADER_ACCEPT_LANGUAGE_KEY,
  HEADER_ACCEPT_REGION_KEY,
  HEADER_GUEST_UUID_KEY,
  HEADER_I18NEXT_LANGUAGE_KEY,
  HEADER_PATHNAME_KEY,
} from '@/shared/consts/common/header';
import { I18NEXT_LANG_KEY } from '@/shared/consts/common/language';

const withHeaderMiddleware = async ({
  request,
  response,
  forward,
}: MiddlewareFunctionProps) => {
  try {
    const cookie = await cookies();
    const headers = new Headers(request.headers);

    // language
    if (cookie.has(I18NEXT_LANG_KEY))
      headers.set(
        HEADER_I18NEXT_LANGUAGE_KEY,
        cookie.get(I18NEXT_LANG_KEY)!.value
      );

    // pathname
    headers.set(HEADER_PATHNAME_KEY, request.nextUrl.pathname);

    // accept-language
    if (request.headers.has('Accept-Language')) {
      const origin = request.headers.get('Accept-Language') ?? '';
      const regex = /^(?<lang>[a-zA-Z]{2,})(?:-(?<region>[a-zA-Z]{2}))?/;
      const match = origin.replace(/,.*/, '').split(',')[0].match(regex);
      headers.set(HEADER_ACCEPT_LANGUAGE_KEY, match?.groups?.lang ?? '');
      headers.set(
        HEADER_ACCEPT_REGION_KEY,
        (match?.groups?.region ?? '').toLowerCase()
      );
    }

    const responseNext = NextResponse.next({ headers });
    return forward(responseNext);
  } catch (error) {
    console.error('FIXME: ', error);
  }
};

export default withHeaderMiddleware;
