import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { UserLoginRestrictionPlatform } from '@/core/shared/service/enum/user-login-restriction-platform';
import { MemberStoreDataInput } from '@/core/shared/service/input/member-store-data-input';
import { PhoneNumberInput } from '@/core/shared/service/input/phone-number-input';

export type PostEmailRegisterPayload = {
  /** 소셜 로그인 제공자 */
  provider: string;
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
  /** 추가 회원 정보 */
  memberStoreData: MemberStoreDataInput;
  /** 마케팅 수신 동의 여부 */
  agreeMarketing?: Nullable<boolean>;
  /** 친구 추천 코드 */
  inviteCode?: Nullable<string>;
};

export type PostEmailLoginPayload = {
  /** 소셜 로그인 제공자 */
  provider: string;
  /** 사용자 이메일 주소 */
  email: string;
  /** 사용자 계정 비밀번호 */
  password: string;
};

export type PostSocialRegisterPayload = {
  /** 소셜 로그인 제공자 */
  provider: string;
  /** 소셜 로그인 제공자에서 발급된 사용자 토큰 */
  token: string;
  /** 등록할 사용자 이메일 주소 */
  email: string;
  /** 등록할 사용자 이름 */
  name: string;
  /** 사용자 계정의 국가 코드	KR */
  country: CountryCode;
  /** 핸드폰번호 */
  phoneNumber?: Nullable<PhoneNumberInput>;
  /** 추가 회원 정보 */
  memberStoreData: MemberStoreDataInput;
  /** 마케팅 수신 동의 여부 */
  agreeMarketing?: Nullable<boolean>;
  /** 친구 추천 코드 */
  inviteCode?: Nullable<string>;
};

export type PostSocialLoginPayload = {
  /** 소셜 로그인 제공자 */
  provider: string;
  /** 등록할 사용자 이메일 주소 */
  email?: string;
  /** 소셜 로그인 제공자에서 발급된 사용자 토큰 */
  token?: string;
};

export type PostMemberApplyPayload = {
  /** 추가 회원 정보 */
  jobCategory: IntAsNumber;
  /** 마케팅 수신 동의 여부 */
  agreeMarketing?: Nullable<boolean>;
};

export type GetUserResctrictPayload = {
  /** 제한 여부 확인 플랫폼 */
  platform: UserLoginRestrictionPlatform;
};

export type GetPhoneNumberPayload = PhoneNumberInput & {
  //
};
