import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { RegionCode } from '@/core/shared/service/enum/region-code';

export type PostFaqPayload = {
  categoryNodeId: UUIDAsString;
  /** 등록 몰 */
  region: RegionCode;
  /** 제목 */
  title: string;
  /** 부제목 */
  subTitle: string;
  /** 내용 */
  content: string;
};
