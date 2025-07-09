export type TypeDebouncedOptions = {
  delay: number;
};

export type TypeDebouncedStructure<T> = {
  isDelay: boolean;
  value: T;
};
