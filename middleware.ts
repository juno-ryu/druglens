import withHeaderMiddleware from '@/utils/middlewares/with-header';
import withLangMiddleware from '@/utils/middlewares/with-lang';
import { createMiddleware } from '@rescale/nemo';

const middlewares = {
  '{/*endpoint}': [withLangMiddleware, withHeaderMiddleware],
};

const globalMiddlewares = {
  before: () => {},
  after: () => {},
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};

export const middleware = createMiddleware(middlewares, globalMiddlewares);
