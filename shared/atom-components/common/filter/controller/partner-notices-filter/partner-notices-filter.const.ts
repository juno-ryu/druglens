import { PartnerNoticesSearchFilter } from '@/core/shared/service/admin/types/partner-notices';

export const PARTNER_NOTICES_SORT_OPTIONS = [
  { value: 'createdAt,desc', label: '최신순' },
  { value: 'createdAt,asc', label: '오래된 순' },
];

export const INITIAL_FILTER_STATE_FOR_PARTNER_NOTICES: PartnerNoticesSearchFilter = {
  categoryNodeId: null,
  page: 0,
  size: 20,
  sort: [PARTNER_NOTICES_SORT_OPTIONS[0].value],
  text: '',
  user: '',
};
