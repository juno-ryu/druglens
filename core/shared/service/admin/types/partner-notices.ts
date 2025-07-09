import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';
import { PartnerNoticeFilterInput } from '@/core/shared/service/input/partner-notice/partner-notice-filter-input';

export type PartnerNoticesSearchFilter = PartnerNoticeFilterInput & PageableInput & SortInput;

export interface PostPartnerNoticePayload {
  title: string;
  content: string;
  categoryNodeId: UUIDAsString;
}
