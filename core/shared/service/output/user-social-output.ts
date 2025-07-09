import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { SocialLoginProvider } from '@/core/shared/service/enum/social-login-provider';

/** 소셜 가입 정보를 반환 */
export type UserSocialOutput = {
  /** ID */
  id: UUIDAsString;
  /** 가입 소셜 */
  provider: SocialLoginProvider;
};
