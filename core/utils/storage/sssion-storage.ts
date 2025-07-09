import SuperJSON from 'superjson';
import { StorageValue } from 'zustand/middleware';
import { Nullable } from '@/core/utils/types/selector/flexible';

export const getSessionStorageItem = <S>(name: string) => {
  if (typeof window === 'undefined') return null;
  const str = window.sessionStorage.getItem(name);
  if (!str) return null;
  return SuperJSON.parse(str) as Nullable<S>;
};

export const setSessionStorageItem = <S>(name: string, value: S) => {
  if (typeof window === 'undefined') return;
  const serializedValue = SuperJSON.stringify(value);
  window.sessionStorage.setItem(name, serializedValue);
};

export const removeSessionStorageItem = (name: string) => {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(name);
};

export const onSessionStorage = <S>() => {
  const storage: StrictPersistStorage<S> = {
    getItem: (...args) => getSessionStorageItem<Nullable<StorageValue<S>>>(...args),
    setItem: (...args) => setSessionStorageItem<Nullable<StorageValue<S>>>(...args),
    removeItem: (...args) => removeSessionStorageItem(...args),
  };
  return storage;
};
