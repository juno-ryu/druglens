'use client';

import { useContext } from 'react';
import { NEXTAUTH_SESSION_CHANNEL_KEY } from '@/shared/consts/common/auth';
import { SessionContent } from '@/shared/providers/session-provider.client';

export const preSignInMessage = async () => {
  const channel = new BroadcastChannel(NEXTAUTH_SESSION_CHANNEL_KEY);
  channel.postMessage({ type: 'pre-sign-in' });
  channel.close();
};

export const signInMessage = async () => {
  const channel = new BroadcastChannel(NEXTAUTH_SESSION_CHANNEL_KEY);
  channel.postMessage({ type: 'sign-in' });
  channel.close();
};

// ADMIN not support sign up
// export const signUpMessage = async () => {
//   const channel = new BroadcastChannel(NEXTAUTH_SESSION_CHANNEL_KEY);
//   channel.postMessage({ type: 'sign-up' });
//   channel.close();
// };

export const signOutMessage = async (config?: { redirectTo?: string }) => {
  const { redirectTo } = config ?? {};
  const channel = new BroadcastChannel(NEXTAUTH_SESSION_CHANNEL_KEY);
  channel.postMessage({ type: 'sign-out', redirectTo });
  channel.close();
};

export const updateMessage = async (config?: { redirectTo?: string }) => {
  const { redirectTo } = config ?? {};
  const channel = new BroadcastChannel(NEXTAUTH_SESSION_CHANNEL_KEY);
  channel.postMessage({ type: 'update', redirectTo });
  channel.close();
};

export const useSession = () => useContext(SessionContent);
