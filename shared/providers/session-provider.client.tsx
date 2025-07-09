'use client';

import { createContext, useEffect, useState } from 'react';
import type { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { NEXTAUTH_SESSION_CHANNEL_KEY } from '@/shared/consts/common/auth';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import ACON_APIS from '@/core/shared/service/acon/acon.service';
import { UserLoginRestrictionPlatform } from '@/core/shared/service/enum/user-login-restriction-platform';
import { getSession, signOutAction } from '@/shared/configs/next-auth/next-auth.server';

export const SessionContent = createContext<Nullable<Session>>(null);

interface SessionProviderClientProps extends React.PropsWithChildren {
  initialSession: Nullable<Session>;
}

const SessionProviderClient = (props: SessionProviderClientProps) => {
  const { initialSession, children } = props;

  const { pathname } = useDynamicRoute();
  const router = useRouter();
  const [session, setSession] = useState<Nullable<Session>>(initialSession);

  const onUpdate = async () => {
    const newSession = await getSession();
    setSession(newSession);
  };

  const onSignIn = async () => {
    try {
      await onUpdate();
      router.replace('/');
    } catch (error) {
      onSignOut();
    }
  };

  const onSignOut = async () => {
    await signOutAction();
    await onUpdate();
  };

  const onMessage = async (event: MessageEvent) => {
    switch (event.data?.type) {
      case 'sign-up':
      case 'pre-sign-in': {
        await onUpdate();
        return;
      }
      case 'update': {
        await onUpdate();
        return;
      }
      case 'sign-in': {
        await onSignIn();
        return;
      }
      case 'sign-out': {
        await onSignOut();
        return;
      }
      default: {
        console.warn('Unknown message type:', event.data.type);
        return;
      }
    }
  };

  useEffect(() => {
    (async () => await onUpdate())();
  }, [pathname]);

  useEffect(() => {
    const channel = new BroadcastChannel(NEXTAUTH_SESSION_CHANNEL_KEY);
    channel.onmessage = onMessage;
    return () => {
      channel.close();
    };
  }, []);

  return <SessionContent.Provider value={session}>{children}</SessionContent.Provider>;
};

export default SessionProviderClient;
