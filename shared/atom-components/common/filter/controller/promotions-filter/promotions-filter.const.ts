import { EnumPromotionPeriodField, EnumPromotionStatus, PromotionSearchFilter } from '@/core/shared/service/admin/types/promotions';
import { SelectOption } from '@/shared/atom-components/common/filter/filter.const';

export const INITIAL_FILTER_STATE_FOR_PROMOTION: PromotionSearchFilter = {
  title: '',
  since: '',
  until: '',
  periodField: EnumPromotionPeriodField.ALL,
  status: EnumPromotionStatus.ALL,
  page: 0,
  size: 20,
};

export const STATUSES_OPTIONS_FOR_PROMOTION: SelectOption<EnumPromotionStatus>[] = [
  { value: EnumPromotionStatus.DRAFT, label: '작성중' },
  { value: EnumPromotionStatus.READY, label: '대기' },
  { value: EnumPromotionStatus.RUNNING, label: '활성화' },
  { value: EnumPromotionStatus.DONE, label: '종료' },
  { value: EnumPromotionStatus.ALL, label: '전체' },
] as const;

export const PERIOD_OPTIONS_FOR_PROMOTION: SelectOption<EnumPromotionPeriodField>[] = [
  { value: EnumPromotionPeriodField.CREATED_AT, label: '생성일' },
  { value: EnumPromotionPeriodField.PUBLISHED_AT, label: '게시일 (백엔드 구현 필요)' },
  { value: EnumPromotionPeriodField.SUSPENDED_AT, label: '중지일 (백엔드 구현 필요)' },
  { value: EnumPromotionPeriodField.UPDATED_AT, label: '수정일 (백엔드 구현 필요)' },
  { value: EnumPromotionPeriodField.ALL, label: '전체' },
] as const;
