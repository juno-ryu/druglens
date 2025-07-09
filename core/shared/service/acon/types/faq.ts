import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';
import { FaqFilterInput } from '@/core/shared/service/input/faq-filter-input';

/** FAQ는 페이지네이션 input을 따로 주지 않고 항상 모두 가져오는 것으로(page: 0, size: 10000) 합니다 */
export type FaqSearchFilter = FaqFilterInput & SortInput & Partial<PageableInput>;
