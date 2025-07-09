import { Nullable } from '@/core/utils/types/selector/flexible';

export enum DirectionInput {
  /** 오름차순 */
  ASC = 'asc',
  /** 내림차순 */
  DESC = 'desc',
}

/** 정렬을 원하는 경우 정렬 정보를 전달 */
/** 여러 조건으로 정렬하고 싶은 경우 같은 sort key를 우선순위 순으로 여러개 전달 */
/** 값은 정렬 원하는 데이터, 정렬 방법 형태로 입력 */
export type SortInput = {
  /** 정렬 값 */
  sort: Nullable<string[]>;
};
