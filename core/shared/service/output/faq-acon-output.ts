import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';

/** 에이콘에서 FAQ 정보를 반환 */
export type FaqAconOutput = {
  /** ID */
  id: UUIDAsString;
  /** 제목 */
  title: string;
  /** 부제목 */
  subTitle: string;
  /** 내용 */
  content: string;
  /** 생성일 */
  createdAt: ISODateString;
  /** FAQ 유형(카테고리) 정보 */
  categoryNode: Nullable<CategoryNodeOutput>;
};
