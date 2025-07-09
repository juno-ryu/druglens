import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';
import { PartnerNoticeFilterInput } from '@/core/shared/service/input/partner-notice/partner-notice-filter-input';

export type PartnerNoticesSearchFilter = PartnerNoticeFilterInput & PageableInput & SortInput;
