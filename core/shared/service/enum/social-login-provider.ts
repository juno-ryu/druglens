/** 사용 하고 있는 소셜 로그인 제공 서비스 */
export type SocialLoginProvider = (typeof SocialLoginProvider)[keyof typeof SocialLoginProvider];
export const SocialLoginProvider = {
  /** 구글 */
  GOOGLE: 'GOOGLE',
  /** 네이버 */
  NAVER: 'NAVER',
} as const;
