import { PersistStorage, StorageValue } from 'zustand/middleware';
import { Nullable } from '@/core/utils/types/selector/flexible';

declare global {
  interface StrictPersistStorage<S> extends PersistStorage<S> {
    getItem: (name: string) => Nullable<StorageValue<S>>;
    setItem: (name: string, value: Nullable<StorageValue<S>>) => unknown;
    removeItem: (name: string) => unknown;
  }
}
