import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

export type ReviewUserAconOutput = {
  /** ID */
  id: UUIDAsString;
  /** 마스킹 처리 된 이메일 주소 */
  email: string;
};
