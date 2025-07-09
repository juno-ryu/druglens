import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { CountryCode } from '@/core/shared/service/enum/country-code';

export type PostSendLoginTwoFactorCodePayload = {
  /** 로그인 서비스 */
  provider: string;
  /** 소셜 로그인 제공자에서 발급된 사용자 토큰 */
  token: string;
  /** 사용자의 이메일 주소 */
  email: string;
  /** 사용자의 이름 */
  name: string;
  /** 계정을 생성할 국가 코드 */
  country: CountryCode;
};

export type PostVerifyCodePayload = {
  /** 로그인 서비스 */
  provider: string;
  /** 관리자 소셜 로그인 2차 인증 코드 발송 API에서 받은 ID */
  userId?: UUIDAsString;
  /** 2차 인증 코드 */
  verifyCode?: string;
};
