import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';
import { ImageOutput } from '@/core/shared/service/output/image-output';

/** 브랜드의 정보를 반환 */
export type BrandPublicOutput = {
  /** ID */
  id: UUIDAsString;
  /** 브랜드 코드 */
  brandCode: string;
  /** 파트너가 작성한 브랜드 이름 */
  name: string;
  /** 파트너가 작성한 브랜드 소개 */
  introduce: string;
  /** 브랜드 소개 페이지에서 리뷰 노출 여부 */
  isVisibleReview: boolean;
  /** VIP 브랜드 여부 */
  isVip: boolean;
  /** 로고 이미지 */
  logo: Nullable<ImageOutput>;
  /** 상태 */
  status: BrandApprovalStatus;
};
