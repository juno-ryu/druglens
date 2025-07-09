import { IntAsNumber } from '@/core/utils/types/overridable/primitive';

/** Spring에서 지원하는 페이지네이션 반환 */
export type PaginationOutput = {
  /** 전체 조회 된 항목의 개수 */
  total: IntAsNumber;
  /** 현재 조회 된 페이지 (0부터 시작) */
  page: IntAsNumber;
  /** 한 페이지에 노출 되는 항목의 개수 */
  size: IntAsNumber;
  /** 마지막 페이지 */
  last: IntAsNumber;
};
