import superjson from 'superjson';
import { StorageValue } from 'zustand/middleware';
import { Nullable } from '@/core/utils/types/selector/flexible';

export const getCookieItem = <S>(name: string): Nullable<S> => {
  if (typeof window === 'undefined') return null;
  const cookies = document.cookie.split('; ').reduce(
    (acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    },
    {} as Record<string, string>,
  );
  const str = cookies[name];
  if (!str) return null;
  try {
    return superjson.parse(str) as Nullable<S>;
  } catch (e) {
    return null;
  }
};

export const setCookieItem = <S>(name: string, value: S): void => {
  if (typeof window === 'undefined') return;
  const serializedValue = superjson.stringify(value);
  document.cookie = `${name}=${encodeURIComponent(serializedValue)}; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax`;
};

export const removeCookieItem = (name: string): void => {
  if (typeof window === 'undefined') return;
  try {
    document.cookie = `${name}=; Path=/; Max-Age=0`;
  } catch (e) {
    console.error(`[CookieStorage] Failed to remove cookie item "${name}":`, e);
  }
};

export const onCookieStorage = <S>() => {
  const storage: StrictPersistStorage<S> = {
    getItem: (...args) => getCookieItem<Nullable<StorageValue<S>>>(...args),
    setItem: (...args) => setCookieItem<Nullable<StorageValue<S>>>(...args),
    removeItem: (...args) => removeCookieItem(...args),
  };
  return storage;
};
