import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

export type GetCheckAlreadySocialLogin = {
  provider: string;
  token: string;
};

export type PatchChangePasswordPayload = {
  /** 기존 비밀번호 */
  oldPassword: string;
  /** 변경 할 비밀번호 */
  newPassword: string;
};

export type PostCheckMatchPasswordPayload = {
  /** 확인할 비밀번호 */
  password: string;
};

export type PostResetPasswordPayload = {
  /** 비밀번호 재설정 메일 발송 API를 통해 전송 된 이메일 내용에 포함 된 id */
  id: string;
  /** 새롭게 설정할 비밀번호 */
  password: string;
};

export type PostSendPasswordResetPayload = {
  /** 비밀번호 재설정 요청을 보낼 사용자 이메일 주소 */
  email: string;
};

export type PostStorePasswordPayload = {
  /** 등록하려고 하는 비밀번호 */
  password: string;
};

export type PostWithdrawalPayload = {
  /** 탈퇴 사유 */
  reason: IntAsNumber;
  /** 탈퇴 사유에 대한 메시지 */
  message?: Nullable<string>;
};
