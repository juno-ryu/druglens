'use server';

import { AuthError } from 'next-auth';
import { PostEmailLoginPayload, PostMemberApplyPayload } from '@/core/shared/service/acon/types/auths';
import { PostVerifyCodePayload } from '@/core/shared/service/admin/types/auths';
import { EnumAccountProvider } from '@/shared/consts/common/auth';
import { deserializeError, serializeError } from '@/core/utils/errors/custom-network-error';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { auth, signIn, signOut, update } from '@/shared/configs/next-auth/next-auth';

export type SignInActionPayload = { key: EnumAccountProvider };
export type CredentialPayload = { key: 'credentials' } & (PostEmailLoginPayload | PostVerifyCodePayload);
export type SocialPayload = { key: 'google' | 'naver' } & PostVerifyCodePayload;

export const preSignInAction = async ({ key, ...payload }: SignInActionPayload & SocialPayload) => {
  try {
    await signIn(key, { ...payload, redirect: true, redirectTo: `/users/signup/sns/${key}` });
  } catch (error) {
    if (!(error instanceof AuthError)) throw error;
    return { error: serializeError(deserializeError(error.cause as unknown as string)) };
  }
};

export const signInAction = async ({ key, ...payload }: SignInActionPayload & (CredentialPayload | SocialPayload)) => {
  try {
    await signIn(key, { ...payload, redirect: false });
  } catch (error) {
    if (!(error instanceof AuthError)) throw error;
    return { error: serializeError(deserializeError(error.cause as unknown as string)) };
  }
};

// ADMIN not support sign up
// export const signUpAction = async ({ key, query, ...payload }: SignInActionPayload & CredentialPayload & { query?: PostMemberApplyPayload }) => {
//   try {
//     await signIn(key, { ...payload, redirect: true, redirectTo: `${transformQueryUri('/users/signup/sns/credentials', { ...query, isSignUp: true })}` });
//   } catch (error) {
//     if (!(error instanceof AuthError)) throw error;
//     return { error: serializeError(deserializeError(error.cause as unknown as string)) };
//   }
// };

export const signOutAction = async () => {
  await signOut({ redirect: false });
};

export const getSession = async () => {
  try {
    const session = await auth();
    // console.log('********** getSession session:', session);
    // if (session?.message) return null;
    return session;
  } catch (error) {
    console.error('********** getSession error:', error);
    return null;
  }
};

export const updateSession = async (...args: Parameters<typeof update>) => await update(...args);
