import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

export type PostAdultPayload = {
  /** 생년월일 */
  birthday: string;
  /** 인증 서비스를 통해 인증하고 전달 받은 ID (현재는 국문몰에서만 필수) */
  tid?: Nullable<string>;
};

export type PutMemberDataPayload = {
  /** 직업 카테고리 */
  jobCategory: IntAsNumber;
  /** 변경 할 이름 */
  name: string;
};
