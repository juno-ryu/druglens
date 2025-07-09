import SuperJSON from 'superjson';
import { StorageValue } from 'zustand/middleware';
import { Nullable } from '@/core/utils/types/selector/flexible';

export const getLocalStorageItem = <S>(name: string) => {
  if (typeof window === 'undefined') return null;
  const str = window.localStorage.getItem(name);
  if (!str) return null;
  return SuperJSON.parse(str) as Nullable<S>;
};

export const setLocalStorageItem = <S>(name: string, value: S) => {
  if (typeof window === 'undefined') return;
  const serializedValue = SuperJSON.stringify(value);
  window.localStorage.setItem(name, serializedValue);
};

export const removeLocalStorageItem = (name: string) => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(name);
};

export const onLocalStorage = <S>() => {
  const storage: StrictPersistStorage<S> = {
    getItem: (...args) => getLocalStorageItem<Nullable<StorageValue<S>>>(...args),
    setItem: (...args) => setLocalStorageItem<Nullable<StorageValue<S>>>(...args),
    removeItem: (...args) => removeLocalStorageItem(...args),
  };
  return storage;
};
