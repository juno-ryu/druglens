export enum DirectionOutput {
  /** 오름차순 */
  ASC = 'asc',
  /** 내림차순 */
  DESC = 'desc',
}

/** Spring에서 지원하는 정렬 반환 */
export type SortOutput = {
  /** 정렬이 적용 된 값 */
  field: string;
  /** 정렬이 적용 된 방법 */
  direction: string;
};
