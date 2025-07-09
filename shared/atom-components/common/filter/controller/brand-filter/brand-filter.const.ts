import { BrandsSearchOptions } from '@/core/shared/service/admin/types/brands';
import { BooleanAsString } from '@/core/utils/types/overridable/primitive';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';
import { BrandSettleApprovalStatus } from '@/core/shared/service/enum/brand-settle-approval-status';
import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';
import { SelectOption } from '@/shared/atom-components/common/filter/filter.const';

export const BRAND_STATUS_OPTIONS_FOR_BRAND: SelectOption<BrandApprovalStatus>[] = [
  { value: BrandApprovalStatus.REQUEST, label: '요청' },
  { value: BrandApprovalStatus.APPROVE, label: '승인' },
  { value: BrandApprovalStatus.REJECT, label: '반려' },
  { value: BrandApprovalStatus.LEAVE, label: '퇴점' },
] as const;

export const SETTLE_STATUS_OPTIONS_FOR_BRAND: SelectOption<BrandSettleApprovalStatus>[] = [
  { value: BrandSettleApprovalStatus.REQUEST, label: '요청' },
  { value: BrandSettleApprovalStatus.APPROVE, label: '승인' },
  { value: BrandSettleApprovalStatus.REJECT, label: '반려' },
] as const;

export const SETTLE_TYPE_FOR_BRAND: SelectOption<BrandSettleTypes>[] = [
  { value: BrandSettleTypes.DOMESTIC_PERSONAL, label: '국내 개인' },
  { value: BrandSettleTypes.DOMESTIC_NORMAL_BUSINESS, label: '국내 일반 과세자' },
  { value: BrandSettleTypes.DOMESTIC_SPECIAL_TAX_BUSINESS, label: '국내 과세 특례 사업자' },
  { value: BrandSettleTypes.DOMESTIC_SIMPLE_WITH_INVOICE_BUSINESS, label: '국내 간이 과세자(세금 계산서 발행 가능)' },
  { value: BrandSettleTypes.DOMESTIC_SIMPLE_NO_INVOICE_BUSINESS, label: '국내 간이 과세자(세금 계산서 발행 불가능)' },
  { value: BrandSettleTypes.DOMESTIC_EXEMPT_BUSINESS, label: '국내 면세 사업자' },
  { value: BrandSettleTypes.DOMESTIC_NON_PROFIT_BUSINESS, label: '국내 비영리 사업자' },
  { value: BrandSettleTypes.DOMESTIC_UNIQUE_BUSINESS, label: '국내 고유 사업자' },
  { value: BrandSettleTypes.OVERSEA, label: '해외' },
] as const;

export const SEARCH_OPTIONS_FOR_BRAND: SelectOption<BrandsSearchOptions>[] = [
  { value: BrandsSearchOptions.BRAND_CODE, label: '브랜드 코드' },
  { value: BrandsSearchOptions.BRAND_NAME, label: '브랜드명' },
  { value: BrandsSearchOptions.EMAIL, label: '아이디(이메일)' },
  { value: BrandsSearchOptions.NAME, label: '이름/대표자' },
] as const;

export const EXCLUSIVE_OPTIONS_FOR_BRAND: SelectOption<BooleanAsString>[] = [
  { value: 'true', label: '독점' },
  { value: 'false', label: '비독점' },
  // { value: 'asdf', label: '미선택' },
] as const;

export const DOMESTIC_OPTIONS_FOR_BRAND: SelectOption<BooleanAsString>[] = [
  { value: 'true', label: '국내' },
  { value: 'false', label: '국외' },
] as const;
