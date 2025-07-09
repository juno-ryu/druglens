import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { BrandPlanOutput } from '@/core/shared/service/output/brand-output/brand-plan-output';
import { BrandSettleOutput } from '@/core/shared/service/output/brand-output/brand-settle-output';
import { ImageOutput } from '@/core/shared/service/output/image-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';
import { MemoOutput } from '@/core/shared/service/output/memo-output';

/** 어드민에서 브랜드의 정보를 반환 */
export type BrandAdminOutput = {
  /** ID */
  id: UUIDAsString;
  /** 브랜드 코드 */
  brandCode: string;
  /** 브랜드 승인 상태 */
  status: BrandApprovalStatus;
  /** 브랜드 이름이 작성 된 언어 */
  nameLanguage: LanguageCode;
  /** 파트너가 작성한 브랜드 이름 */
  name: string;
  /** 브랜드 소개가 작성 된 언어 */
  introduceLanguage: LanguageCode;
  /** 파트너가 작성한 브랜드 소개 */
  introduce: string;
  /** 브랜드 소개 페이지에서 리뷰 노출 여부 */
  isVisibleReview: boolean;
  /** VIP 브랜드 여부 */
  isVip: boolean;
  /** 등록한 로고의 정보 */
  logo: Nullable<ImageOutput>;
  /** 등록 된 브랜드 파트너십의 목록 */
  plans: Array<BrandPlanOutput>;
  /** 등록 된 브랜드 정산 정보의 목록, settle or settles */
  settle: Array<BrandSettleOutput>;
  /** 등록 된 브랜드 정산 정보의 목록, settle or settles */
  settles: Array<BrandSettleOutput>;
  /** 브랜드에 등록 된 다국어 정보 */
  localizes: Nullable<Array<LocalizeOutput>>;
  /** 관리자 메모 */
  memos: Array<MemoOutput>;
  /** 입점 검토 자료 */
  references: Array<{ id: string; url: string }>;
  /** 휴대폰번호 */
  contactPhoneNumber: {
    value: string;
    region: string;
  };
  /** 입점일 */
  joinDate: Nullable<ISODateString>;
};
