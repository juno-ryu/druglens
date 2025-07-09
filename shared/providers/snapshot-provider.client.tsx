'use client';

import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NEXTAUTH_SESSION_CHANNEL_KEY } from '@/shared/consts/common/auth';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { useAuthorActions, useAuthorState, useControllerActions, useControllerState } from '@/shared/stores/auth/use-snapshot/use-snapshot.hook';
import { TypeSnapshotState } from '@/shared/stores/auth/use-snapshot/use-snapshot.type';
import { useSession } from '@/shared/configs/next-auth/next-auth.client';

interface SnapshotProviderClientProps {
  initialSnapshot: TypeSnapshotState;
}

const SnapshotProviderClient = (props: SnapshotProviderClientProps) => {
  const { initialSnapshot } = props;

  const { params } = useDynamicRoute();
  const session = useSession();
  const router = useRouter();

  const authorState = useAuthorState();

  const controllerState = useControllerState();
  const controllerActions = useControllerActions();
  const authorActions = useAuthorActions();

  const onInit = async () => {
    if (controllerState.controllerCondition.isStored) return;
    await controllerActions.setControllerCondition({ isStored: true });
    await authorActions.setAuthorAccount(initialSnapshot.authorAccount);
  };

  const onUpdate = async () => {
    await authorActions.updateAuthorAccount();
  };

  const onReset = async () => {
    await authorActions.updateAuthorAccount();
  };

  useEffect(() => {
    (async () => await onInit())();
  }, []);

  useEffect(() => {
    (async () => await onUpdate())();
  }, [session?.accessToken, params?.lang]);

  const onMessage = async (event: MessageEvent) => {
    switch (event.data?.type) {
      case 'sign-up':
      case 'pre-sign-in':
      case 'sign-in': {
        // no action needed
        return;
      }
      case 'sign-out': {
        await onReset();
        if (event.data?.redirectTo) await router.replace(event.data.redirectTo);
        return;
      }
      case 'update': {
        await onUpdate();
        if (event.data?.redirectTo) await router.replace(event.data.redirectTo);
        return;
      }
      default: {
        console.warn('Unknown message type:', event.data.type);
        return;
      }
    }
  };

  useEffect(() => {
    const channel = new BroadcastChannel(NEXTAUTH_SESSION_CHANNEL_KEY);
    channel.onmessage = onMessage;
    return () => {
      channel.close();
    };
  }, []);

  return <Fragment />;
};

export default SnapshotProviderClient;
