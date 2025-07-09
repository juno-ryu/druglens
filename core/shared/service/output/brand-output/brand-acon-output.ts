import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';
import { ImageOutput } from '@/core/shared/service/output/image-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';

/** 브랜드의 정보를 반환 */
export type BrandPublicOutput = {
  /** ID */
  id: UUIDAsString;
  /** 브랜드 코드 */
  brandCode: string;
  /** 브랜드 이름이 작성 된 언어 */
  nameLanguage: string;
  /** 파트너가 작성한 브랜드 이름 */
  name: string;
  /** 브랜드 소개가 작성 된 언어 */
  introduceLanguage: Nullable<string>;
  /** 파트너가 작성한 브랜드 소개 */
  introduce: Nullable<string>;
  /** 브랜드 소개 페이지에서 리뷰 노출 여부 */
  isVisibleReview: boolean;
  /** VIP 브랜드 여부 */
  isVip: boolean;
  /** 등록한 로고의 정보 */
  logo: Nullable<ImageOutput>;
  /** 브랜드에 등록 된 다국어 정보 */
  status: BrandApprovalStatus;
  /** 브랜드에 등록 된 다국어 정보 */
  localizes?: Nullable<Array<LocalizeOutput>>;
};
