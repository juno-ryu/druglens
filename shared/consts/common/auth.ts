export const GUEST_UUID_KEY = 'admin-guest-uuid';
export const REMEMBER_ADULT_KEY = 'admin-remember-adult';
export const REMEMBER_EMAIL_KEY = 'admin-remember-email';
export const REMEMBER_PROVIDER_KEY = 'admin-remember-provider';
export const NEXTAUTH_SESSION_CHANNEL_KEY = 'admin-nextauth-session-channel';

export type EnumAccountProvider = (typeof EnumAccountProvider)[keyof typeof EnumAccountProvider];
export const EnumAccountProvider = {
  CREDENTIALS: 'credentials',
  GOOGLE: 'google',
  NAVER: 'naver',
} as const;

export type EnumAccountStatus = (typeof EnumAccountStatus)[keyof typeof EnumAccountStatus];
export const EnumAccountStatus = {
  SIGN_OUT: 'sign-out',
  SIGN_IN: 'sign-in',
  PRE_SIGN_IN: 'pre-sign-in',
} as const;

export type EnumVerifyConfirmed = (typeof EnumVerifyConfirmed)[keyof typeof EnumVerifyConfirmed];
export const EnumVerifyConfirmed = {
  PENDING: 'pending',
  PROGRESS: 'progress',
  COMPLETED: 'completed',
} as const;
