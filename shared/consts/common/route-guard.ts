import { EnumAccountStatus } from '@/shared/consts/common/auth';
import { TypeSnapshotState } from '@/shared/stores/auth/use-snapshot/use-snapshot.type';

export interface RouteGuardEntry {
  path: string;
  allowedStatus: EnumAccountStatus[];
  redirectUrl?: string;
  redirectCheck?: (snapshotState: TypeSnapshotState) => string | null;
}

export const RECORD_ROUTE_GUARD = (() => {
  const entries: RouteGuardEntry[] = [
    {
      path: '^/:lang/login',
      allowedStatus: [EnumAccountStatus.SIGN_OUT],
      redirectUrl: '/',
    },
    {
      path: '^/:lang/logout',
      allowedStatus: [EnumAccountStatus.SIGN_OUT, EnumAccountStatus.SIGN_IN, EnumAccountStatus.PRE_SIGN_IN],
    },
    {
      path: '^/:lang/users/signup/sns/:provider',
      allowedStatus: [EnumAccountStatus.SIGN_OUT, EnumAccountStatus.SIGN_IN, EnumAccountStatus.PRE_SIGN_IN],
    },
    {
      path: '^/:lang/policy/:path',
      allowedStatus: [EnumAccountStatus.SIGN_OUT, EnumAccountStatus.SIGN_IN, EnumAccountStatus.PRE_SIGN_IN],
    },
    {
      path: '^/:path',
      allowedStatus: [EnumAccountStatus.SIGN_OUT, EnumAccountStatus.SIGN_IN, EnumAccountStatus.PRE_SIGN_IN],
      redirectCheck: (snapshotState) => {
        if (snapshotState?.authorAccount && snapshotState?.authorAccount?.isSignOut) return '/login';
        return null;
      },
    },
  ];
  return new Map<RouteGuardEntry['path'], RouteGuardEntry>(entries.map((item) => [item.path, item]));
})();
