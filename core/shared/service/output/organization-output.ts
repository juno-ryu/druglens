import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

/** 조직 정보 */
export type OrganizationOutput = {
  /** ID */
  id: UUIDAsString;
  /** 이름 */
  name: string;
};
