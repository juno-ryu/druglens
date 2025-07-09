// T 타입이거나 null 일 수 있는 타입을 정의
export type Nullable<T> = T | null;

// T 타입이거나 undefined 일 수 있는 타입을 정의
export type Optional<T> = T | undefined;

// T 타입이거나 null 또는 undefined 일 수 있는 타입을 정의
export type Maybe<T> = T | null | undefined;

// T 타입이 null 또는 undefined가 될 수 없음을 보장하는 타입을 정의
export type NonNullable<T> = T extends null | undefined ? never : T;
