import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

/** Spring에서 지원하는 페이지네이션 입력 정보를 관리 */
export type PageableInput = {
  /** 조회 할 페이지 */
  page: Nullable<IntAsNumber>;
  /** 한 페이지에 보여줄 내용 개수 */
  size: Nullable<IntAsNumber>;
};
