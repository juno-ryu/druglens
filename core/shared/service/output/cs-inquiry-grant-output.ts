import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';

/** 1:1 문의 라이센스 정보를 반환 */
export type CsInquiryGrantOutput = {
  /** ID */
  id: UUIDAsString;
  /** 사용권 종류 */
  grantType: AssetLicense;
  /** 창작자(창작물)명 */
  workTitle: string;
  /** 팀명 */
  organizationTitle: Nullable<string>;
};
