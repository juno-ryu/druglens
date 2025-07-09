export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type JsonArray = JsonValue[];
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
export type JsonObject = {
  [key: string]: JsonValue;
};
