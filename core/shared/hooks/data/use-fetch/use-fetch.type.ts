import { Nullable, Optional } from '@/core/utils/types/selector/flexible';

export type TypeFetchOptions<TypeFetchParams, TypeFetchOutput> = {
  params: TypeFetchParams;
  enabled?: boolean;
  initialData?: TypeFetchOutput;
  onSuccess?: (data: TypeFetchOutput) => void;
  onError?: (error: unknown) => void;
};

export type TypeFetchStructure<TypeFetchParams, TypeFetchOutput> = {
  data: Optional<Nullable<TypeFetchOutput>>;
  error: Optional<Nullable<Error>>;
  isLoading: boolean;
};
