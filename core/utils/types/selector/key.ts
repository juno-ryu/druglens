// T 타입에서 true 로 설정된 키를 추출
export type EnabledKeys<T> = {
  [K in keyof T]: T[K] extends true ? K : never;
}[keyof T];

// T 타입에서 false 로 설정된 키를 추출
export type DisabledKeys<T> = {
  [K in keyof T]: T[K] extends false ? K : never;
}[keyof T];

// T 타입에서 required 로 설정된 키를 추출
export type RequiredKeys<T> = {
  [K in keyof T]: {} extends { [P in K]: T[K] } ? never : K;
}[keyof T];

// T 타입에서 optional 로 설정된 키를 추출
export type OptionalKeys<T> = {
  [K in keyof T]: {} extends { [P in K]: T[K] } ? K : never;
}[keyof T];

// T 타입에서 읽기 전용 (readonly) 속성을 가진 키를 추출
export type ReadonlyKeys<T> = {
  [K in keyof T]: IfEquals<{ [P in K]: T[K] }, { -readonly [P in K]: T[K] }, never, K>;
}[keyof T];

// T 타입에서 읽기/쓰기 가능한 (non-readonly) 속성을 가진 키를 추출
export type WritableKeys<T> = {
  [K in keyof T]: IfEquals<{ [P in K]: T[K] }, { -readonly [P in K]: T[K] }, K, never>;
}[keyof T];

// 타입 X와 타입 Y가 같은지 비교하고, 같으면 A를 반환, 다르면 B를 반환
export type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

// T 타입에서 null 또는 undefined가 아닌 값을 가진 키를 추출
export type NonNullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? never : undefined extends T[K] ? never : K;
}[keyof T];

// T 타입에서 null 또는 undefined를 가질 수 있는 값을 가진 키를 추출
export type NullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? K : undefined extends T[K] ? K : never;
}[keyof T];

// T 타입에서 값이 ValueType에 해당하는 키를 선택함
export type PickByValue<T, ValueType> = {
  [K in keyof T as T[K] extends ValueType ? K : never]: T[K];
};

// T 타입에서 값이 ValueType에 해당하는 키를 제외함
export type OmitByValue<T, ValueType> = {
  [K in keyof T as T[K] extends ValueType ? never : K]: T[K];
};
