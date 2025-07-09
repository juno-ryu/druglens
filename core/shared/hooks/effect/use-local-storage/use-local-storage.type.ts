export type TypeLocalStorageKey = string;
export type TypeLocalStorageValue = unknown;

export type TypeLocalStorageOptions<T extends TypeLocalStorageValue> = {
  initialValue?: T;
};

export type TypeLocalStorageStructure<T extends TypeLocalStorageValue> = {
  value?: T;
};
