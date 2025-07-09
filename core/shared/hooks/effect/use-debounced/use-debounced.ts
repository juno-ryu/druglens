import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { TypeDebouncedOptions, TypeDebouncedStructure } from '@/core/shared/hooks/effect/use-debounced/use-debounced.type';

const useDebounced = <T>(value: T, options?: TypeDebouncedOptions) => {
  const { delay = 500 } = options ?? {};

  const [structure, setStructure] = useState<TypeDebouncedStructure<T>>({
    isDelay: false,
    value,
  });

  const debouncedSave = useMemo(
    () =>
      debounce((newValue: T) => {
        setStructure((prev) => ({ ...prev, isDelay: false, value: newValue }));
      }, delay),
    [delay],
  );

  useEffect(() => {
    setStructure((prev) => ({ ...prev, isDelay: true }));
    debouncedSave(value);
    return () => debouncedSave.cancel();
  }, [value, debouncedSave]);

  return {
    ...structure,
  };
};

export default useDebounced;
