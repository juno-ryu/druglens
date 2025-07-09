/** 쿠폰을 언제까지 사용할 수 있는지에 대한 enum입니다. */
export enum ExpireType {
  /** 지정된 시작/종료일내에만 사용가능 */
  STATIC = 'STATIC',
  /** 발급 후 n일 이내에만 사용가능 */
  DAYS = 'DAYS',
}
