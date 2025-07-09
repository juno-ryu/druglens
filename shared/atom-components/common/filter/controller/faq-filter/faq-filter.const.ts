import { FaqSearchFilter } from '@/core/shared/service/acon/types/faq';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { PageableInput } from '@/core/shared/service/input/common/pageable';

export const INITIAL_FILTER_STATE_FOR_FAQ: FaqSearchFilter & PageableInput = {
  categoryNodeId: null,
  page: 0,
  size: 20,
  region: RegionCode.KR,
  text: null,
  sort: ['createdAt,desc'],
};
