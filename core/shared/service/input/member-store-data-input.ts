import { IntAsNumber } from '@/core/utils/types/overridable/primitive';

/** acon에 회원가입 할 때 필요한 정보를 관리 */
export type MemberStoreDataInput = {
  /** 직업 카테고리 */
  jobCategory: IntAsNumber;
};
