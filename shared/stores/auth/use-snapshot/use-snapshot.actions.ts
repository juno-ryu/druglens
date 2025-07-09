'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import SuperJSON from 'superjson';
import { INITIAL_AUTHOR_STATE, SNAPSHOT_KEY } from '@/shared/stores/auth/use-snapshot/use-snapshot.const';
import { TypeAuthorState, TypeSnapshotState } from '@/shared/stores/auth/use-snapshot/use-snapshot.type';
import { getCurrentAccount } from '@/shared/configs/next-auth/next-auth.const';
import { getSession } from '@/shared/configs/next-auth/next-auth.server';

/* snapshot */
export const presetSnapshot = async (): Promise<{ state: TypeSnapshotState; version: number }> => {
  const cookie = await cookies();
  const snapshotValue = cookie.get(SNAPSHOT_KEY)?.value;
  if (snapshotValue) return SuperJSON.parse(snapshotValue);
  return SuperJSON.parse(
    SuperJSON.stringify({
      state: { ...INITIAL_AUTHOR_STATE },
      version: -1,
    }),
  );
};

/* author */
export const fetchAuthorAccount = async (): Promise<TypeAuthorState['authorAccount']> => {
  const session = await getSession();
  const currentAccount = getCurrentAccount(session);
  return { ...currentAccount };
};
export const revalidateAuthorAccount = async () => {
  //
};
