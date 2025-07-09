export type UUIDAsString = string;

export type BooleanAsString = 'true' | 'false';
export type LongAsString = string;
export type DoubleAsString = string;
export type IntAsString = string;
export type BigDecimalAsString = string;
export type NumberAsString<T = number> = T extends number
  ? `${T}` // 123 to "123" 타입 변환
  : T extends `${infer N extends number}`
    ? `${N}` // "123" to "123" 타입 변환
    : T extends ''
      ? string // '' 명시적 허용
      : string;

export type LongAsNumber = number;
export type DoubleAsNumber = number;
export type IntAsNumber = number;
export type BigDecimalAsNumber = number;
export type StringAsNumber<T = string> = T extends number
  ? T // '123' to 123 타입 변환
  : T extends `${infer N extends number}`
    ? N // 456 to 456 타입 변환
    : number;
