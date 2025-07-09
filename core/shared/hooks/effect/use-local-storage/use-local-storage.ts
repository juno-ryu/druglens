'use client';

import { useEffect, useState } from 'react';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '@/core/utils/storage/local-storage';
import {
  TypeLocalStorageKey,
  TypeLocalStorageOptions,
  TypeLocalStorageStructure,
  TypeLocalStorageValue,
} from '@/core/shared/hooks/effect/use-local-storage/use-local-storage.type';

const useLocalStorage = <TypeValue extends TypeLocalStorageValue>(key: TypeLocalStorageKey, options?: TypeLocalStorageOptions<TypeValue>) => {
  const { initialValue } = options ?? {};

  const [structure, setStructure] = useState<TypeLocalStorageStructure<TypeValue>>(() => {
    const storedValue = getLocalStorageItem<TypeValue>(key);
    if (storedValue !== null) {
      return { value: storedValue as TypeValue };
    } else if (typeof initialValue !== 'undefined') {
      setLocalStorageItem(key, initialValue);
      return { value: initialValue };
    } else {
      return { value: undefined };
    }
  });

  const onUpdate = (valueOrFn: TypeValue | ((value?: TypeValue) => TypeValue)) => {
    const newValue: TypeValue = valueOrFn instanceof Function ? valueOrFn(structure.value) : valueOrFn;
    if (newValue === structure.value) return;
    setLocalStorageItem(key, newValue);
    setStructure((prev) => ({ ...prev, value: newValue }));
  };

  const onReset = () => {
    if (initialValue !== undefined) {
      setLocalStorageItem(key, initialValue);
      setStructure((prev) => ({ ...prev, value: initialValue }));
    } else {
      onRemove();
    }
  };

  const onRemove = () => {
    removeLocalStorageItem(key);
    setStructure((prev) => ({ ...prev, value: undefined }));
  };

  useEffect(() => {
    const storedValue = getLocalStorageItem<TypeValue>(key);
    if (storedValue !== structure.value) setStructure({ value: storedValue as TypeValue });
  }, [key]);

  return {
    ...structure,
    onUpdate,
    onReset,
    onRemove,
  };
};

export default useLocalStorage;
