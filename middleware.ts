import { createMiddleware } from '@rescale/nemo';
import withGuestMiddleware from '@/utils/middlewares/with-guest';
import withHeaderMiddleware from '@/utils/middlewares/with-header';
import withLangMiddleware from '@/utils/middlewares/with-lang';
import withRouteGuardMiddleware from '@/utils/middlewares/with-route-guard';
import withSnapshotMiddleware from '@/utils/middlewares/with-snapshot';

const middlewares = {
  // '{/*endpoint}': [withLangMiddleware, withGuestMiddleware, withHeaderMiddleware, withSnapshotMiddleware, withRouteGuardMiddleware],
  '{/*endpoint}': [withLangMiddleware, withGuestMiddleware, withHeaderMiddleware],
};

const globalMiddlewares = {
  before: () => {},
  after: () => {},
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};

export const middleware = createMiddleware(middlewares, globalMiddlewares);
