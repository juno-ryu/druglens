import { NextResponse } from 'next/server';
import { type MiddlewareFunctionProps } from '@rescale/nemo';
import { RECORD_ROUTE_GUARD } from '@/shared/consts/common/route-guard';
import { isBypassPath, isSameUrl, matchRecord } from '@/core/utils/helpers/middleware-url';
import { presetSnapshot } from '@/shared/stores/auth/use-snapshot/use-snapshot.actions';

const withRouteGuardMiddleware = async ({ request, forward }: MiddlewareFunctionProps) => {
  if (isBypassPath(request.url)) {
    const responseNext = NextResponse.next();
    return forward(responseNext);
  }

  const { pathname } = new URL(request.url);
  const { state: snapshotState } = await presetSnapshot();

  const matchedRecord = matchRecord([...RECORD_ROUTE_GUARD.keys()], pathname);
  const matchedEntry = matchedRecord ? (RECORD_ROUTE_GUARD.get(matchedRecord) ?? null) : null;

  // 1. If no sitemap entry matches, continue
  if (!matchedEntry) {
    const responseNext = NextResponse.next();
    return forward(responseNext);
  }

  // 2. Custom redirect check
  if (matchedEntry?.redirectCheck) {
    const customRedirectUrl = matchedEntry.redirectCheck(snapshotState);
    if (customRedirectUrl) console.log('redirectCheck:', { customRedirectUrl, requestUrl: request.url, isSameUrl: isSameUrl(request.url, customRedirectUrl) });
    if (customRedirectUrl && !isSameUrl(request.url, customRedirectUrl)) return NextResponse.redirect(new URL(customRedirectUrl, request.url));
  }

  // 3. Redirect if current user status is not allowed
  if (!(matchedEntry?.allowedStatus ?? []).includes(snapshotState.authorAccount.currentStatus)) {
    const redirectTarget = matchedEntry.redirectUrl ?? '/';
    if (redirectTarget) console.log('redirectUrl:', { redirectTarget, requestUrl: request.url, isSameUrl: isSameUrl(request.url, redirectTarget) });
    if (redirectTarget && !isSameUrl(request.url, redirectTarget)) return NextResponse.redirect(new URL(redirectTarget, request.url));
  }

  const responseNext = NextResponse.next();
  return forward(responseNext);
};

export default withRouteGuardMiddleware;
