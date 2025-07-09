import { ProductAssetsSearchFilter } from '@/core/shared/service/admin/types/product';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { SelectOption } from '@/shared/atom-components/common/filter/filter.const';

export const INITIAL_FILTER_STATE_FOR_PRODUCT: ProductAssetsSearchFilter = {
  keyfield: 'TITLE',
  statuses: [],
  page: 0,
  size: 20,
};

export const KEYFIELD_OPTIONS: SelectOption<'TITLE' | 'PRODUCT_NO' | 'BRAND_NAME'>[] = [
  { value: 'TITLE', label: '상품명' },
  { value: 'PRODUCT_NO', label: '상품번호' },
  { value: 'BRAND_NAME', label: '브랜드' },
] as const;

export const VISIBILITY_OPTIONS: SelectOption<'true' | 'false' | ''>[] = [
  { value: '', label: '전체' },
  { value: 'true', label: '노출' },
  { value: 'false', label: '비노출' },
] as const;

export const STATUSES_OPTIONS: SelectOption<ProductRevisionStatus>[] = [
  { value: ProductRevisionStatus.WAITING, label: '대기' },
  { value: ProductRevisionStatus.REQUEST, label: '심사요청' },
  { value: ProductRevisionStatus.IN_PROGRESS, label: '심사중' },
  { value: ProductRevisionStatus.DENIED, label: '거절' },
  { value: ProductRevisionStatus.REJECT, label: '반려' },
  { value: ProductRevisionStatus.APPROVE, label: '승인' },
] as const;
