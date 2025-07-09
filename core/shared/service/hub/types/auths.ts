import { Nullable } from '@/core/utils/types/selector/flexible';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { UserLoginRestrictionPlatform } from '@/core/shared/service/enum/user-login-restriction-platform';
import { PhoneNumberInput } from '@/core/shared/service/input/phone-number-input';

export type PostEmailRegisterPayload = {
  /** 등록할 사용자 이메일 주소 */
  email: string;
  /** 등록할 사용자 이름 */
  name: string;
  /** 사용자 계정 비밀번호 */
  password: string;
  /** 사용자 계정의 국가 코드	KR */
  country: CountryCode;
  /** 핸드폰번호 */
  phoneNumber?: Nullable<PhoneNumberInput>;
};

export type PostEmailLoginPayload = {
  /** 사용자 이메일 주소 */
  email: string;
  /** 사용자 계정 비밀번호 */
  password: string;
};

export type GetUserResctrictPayload = {
  /** 제한 여부 확인 플랫폼 */
  platform: UserLoginRestrictionPlatform;
};
