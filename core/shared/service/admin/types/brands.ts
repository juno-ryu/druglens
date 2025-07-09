import { ISODateString } from 'next-auth';
import { BooleanAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';
import { BrandSettleApprovalStatus } from '@/core/shared/service/enum/brand-settle-approval-status';
import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';
import { BrandUpdateInput } from '@/core/shared/service/input/brand-input/brand-update-input';
import { BrandUpdateSettleInput } from '@/core/shared/service/input/brand-input/brand-update-settle-input';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';

export enum BrandsSearchOptions {
  BRAND_CODE = 'brandCode',
  BRAND_NAME = 'brandName',
  EMAIL = 'email',
  NAME = 'name',
}

export interface BrandsSearchFilter extends PageableInput, SortInput {
  /** (FE) 검색 옵션 */
  searchOptions?: Nullable<string>;
  /** 국내 브랜드 여부 */
  isDomestic?: Nullable<boolean>;
  /** 검색할 브랜드 이름 */
  brandName?: Nullable<string>;
  /** 검색할 브랜드 코드 */
  brandCode?: Nullable<string>;
  /** 검색할 대표 이메일 */
  email?: Nullable<string>;
  /** 독점 여부 */
  isExclusive?: Nullable<BooleanAsString>;
  /** 브랜드 정산 정보 구분 */
  settleType?: Nullable<BrandSettleTypes>;
  /** 브랜드 정보 승인 상태 */
  brandStatus?: Nullable<BrandApprovalStatus[]>;
  /** 정산 정보 승인 상태 */
  settleStatus?: Nullable<BrandSettleApprovalStatus[]>;
  /** 이름/대표자 */
  name?: Nullable<string>;
  /** 브랜드 가입 시작일 (ISO) */
  joinStartDate?: Nullable<ISODateString>;
  /** 브랜드 가입 종료일 (ISO) */
  joinEndDate?: Nullable<ISODateString>;
}

export type PatchBrandDetailIntegratedRejectionPayload = {
  /** 브랜드 및 파트너십 정보를 거절할지 여부 */
  shouldRejectBrandInfo?: boolean;
  /** 정산 정보를 거절할지 여부 */
  shouldRejectSettleInfo?: boolean;
  /** 브랜드 거절 시 관리자가 작성하는 메시지 */
  brandMessage?: string;
  /** 정산 정보 거절 시 관리자가 작성하는 메시지 */
  settleMessage?: string;
};

export type PatchBrandDetailIntegratedApprovalPayload = {
  /** 브랜드 및 파트너십 정보를 승인할지 여부 */
  shouldApproveBrandInfo?: boolean;
  /** 정산 정보를 승인할지 여부 */
  shouldApproveSettleInfo?: boolean;
  /** 브랜드 승인 시 관리자가 작성하는 메시지 */
  brandMessage?: string;
  /** 정산 정보 승인 시 관리자가 작성하는 메시지 */
  settleMessage?: string;
};

export type PatchBrandDetailLeavePayload = {
  /** 퇴점 사유 기록 */
  message?: string;
};

export type PostBrandDetailUpdateInfoPayload = {
  /** 브랜드 기본 정보 */
  brand: BrandUpdateInput;
  /** 브랜드 정산 정보 */
  settle: BrandUpdateSettleInput;
};
