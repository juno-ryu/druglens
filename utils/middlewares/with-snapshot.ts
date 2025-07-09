import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type MiddlewareFunctionProps } from '@rescale/nemo';
import SuperJSON from 'superjson';
import { isBypassPath } from '@/core/utils/helpers/middleware-url';
import { fetchAuthorAccount, presetSnapshot } from '@/shared/stores/auth/use-snapshot/use-snapshot.actions';
import { SNAPSHOT_KEY } from '@/shared/stores/auth/use-snapshot/use-snapshot.const';
import { TypeSnapshotState } from '@/shared/stores/auth/use-snapshot/use-snapshot.type';
import { auth } from '@/shared/configs/next-auth/next-auth';

const withSnapshotMiddleware = async ({ request, forward }: MiddlewareFunctionProps) => {
  // FIXME: find error
  try {
    if (isBypassPath(request.url)) {
      const responseNext = NextResponse.next();
      return forward(responseNext);
    }

    await auth();
    const cookie = await cookies();
    const { version } = await presetSnapshot();
    if (Number(version) !== -1) {
      const responseNext = NextResponse.next();
      return forward(responseNext);
    }

    const controllerCondition = { isStored: false };
    const authorAccount = await fetchAuthorAccount();
    const snapshotValue: TypeSnapshotState = { controllerCondition, authorAccount };

    const responseNext = NextResponse.next();
    cookie.set({
      name: SNAPSHOT_KEY,
      value: SuperJSON.stringify({ state: snapshotValue, version: 0 }),
      path: '/',
      sameSite: 'lax',
    });
    return forward(responseNext);
  } catch (error) {
    console.error('FIXME: ', error);
  }
};

export default withSnapshotMiddleware;
