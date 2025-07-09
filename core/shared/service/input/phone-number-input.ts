import { CountryCode } from '@/core/shared/service/enum/country-code';

/** 핸드폰 번호를 전달할 때 사용하는 타입 */
export type PhoneNumberInput = {
  /** 핸드폰번호 (- 없이 번호만 입력) */
  value: string;
  /** 국가 코드 */
  country: CountryCode;
};
