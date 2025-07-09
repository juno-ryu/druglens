import { useEffect, useRef, useState } from 'react';
import { cloneDeep, isEqual } from 'lodash';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { TypeFetchOptions, TypeFetchStructure } from '@/core/shared/hooks/data/use-fetch/use-fetch.type';

const useFetch = <TypeParams, TypeOutput>(fetcher: (params: TypeParams) => Promise<TypeOutput>, options: TypeFetchOptions<TypeParams, TypeOutput>) => {
  const { params, enabled = true, initialData = undefined, onSuccess, onError } = options ?? {};

  const paramsRef = useRef<Nullable<TypeParams>>(params);

  const [structure, setStructure] = useState<TypeFetchStructure<TypeParams, TypeOutput>>({
    isLoading: enabled,
    data: initialData,
    error: undefined,
  });

  const fetchData = async () => {
    setStructure((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      const data = await fetcher(params);
      setStructure({
        isLoading: false,
        data,
        error: null,
      });
      onSuccess?.(data);
    } catch (error: unknown) {
      setStructure({
        isLoading: false,
        data: null,
        error: error instanceof Error ? error : new Error('Unknown error'),
      });
      onError?.(error);
    } finally {
      //
    }
  };

  const resetData = async () => {
    setStructure({
      isLoading: false,
      data: initialData,
      error: undefined,
    });
  };

  useEffect(() => {
    if (!enabled) return;
    fetchData();
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    if (isEqual(params, paramsRef.current)) return;
    paramsRef.current = cloneDeep(params);
    fetchData();
  }, [params]);

  return {
    ...structure,
    refetch: fetchData,
    reset: resetData,
  };
};

export default useFetch;
