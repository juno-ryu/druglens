import { Nullable } from '@/core/utils/types/selector/flexible';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';

/** 에이콘에서 1:1 문의하기 라이센스 정보 */
export type CsInquiryCreateAttributesGrantInput = {
  /** 사용권 종류 */
  type: AssetLicense;
  /** 창작물(창작자)명 */
  workTitle: string;
  /** 팀명 */
  organizationTitle: Nullable<string>;
};
