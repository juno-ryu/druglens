import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type MiddlewareFunctionProps } from '@rescale/nemo';
import { v4 as uuidv4 } from 'uuid';
import { GUEST_UUID_KEY } from '@/shared/consts/common/auth';

const withGuestMiddleware = async ({ request, response, forward }: MiddlewareFunctionProps) => {
  try {
    const cookie = await cookies();

    if (cookie.has(GUEST_UUID_KEY)) {
      const responseNext = NextResponse.next();
      return forward(responseNext);
    }

    const uuid = uuidv4();
    const responseNext = NextResponse.next();
    cookie.set(GUEST_UUID_KEY, uuid);
    return forward(responseNext);
  } catch (error) {
    console.error('FIXME: ', error);
  }
};

export default withGuestMiddleware;
