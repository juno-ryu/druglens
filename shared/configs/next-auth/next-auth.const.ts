import { Session } from 'next-auth';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { EnumAccountProvider, EnumAccountStatus } from '@/shared/consts/common/auth';
import { TypeAuthorState } from '@/shared/stores/auth/use-snapshot/use-snapshot.type';

export const getCurrentAccount = (session: Nullable<Session>): TypeAuthorState['authorAccount'] => {
  const hasAccessToken = Boolean(session?.accessToken);
  const currentStatus = !hasAccessToken
    ? EnumAccountStatus.SIGN_OUT
    : session?.user?.provider === EnumAccountProvider.CREDENTIALS
      ? EnumAccountStatus.SIGN_IN
      : EnumAccountStatus.PRE_SIGN_IN;
  return {
    isSignIn: currentStatus === EnumAccountStatus.SIGN_IN,
    isSignOut: currentStatus === EnumAccountStatus.SIGN_OUT,
    isPreSignIn: currentStatus === EnumAccountStatus.PRE_SIGN_IN,
    currentName: currentStatus === EnumAccountStatus.SIGN_IN ? (session?.user?.email ?? '').replace(/@.*/, '') : null,
    currentEmail: currentStatus === EnumAccountStatus.SIGN_IN ? (session?.user?.email ?? null) : null,
    currentStatus,
  };
};
