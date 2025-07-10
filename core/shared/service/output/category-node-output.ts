import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

import { LocalizeOutput } from './localize-output';

export type EnumCategoryType = (typeof EnumCategoryType)[keyof typeof EnumCategoryType];
export const EnumCategoryType = {
  PRODUCT: 'product',
} as const;

export type CategoryItem = {
  id: string;
  code: EnumCategoryType;
  title: string;
};

/** 하위 카테고리 상세 정보를 반환 */
export type CategoryNodeOutput = {
  /** ID */
  id: UUIDAsString;
  /** root 카테고리 */
  category: Nullable<CategoryItem>;
  /** current 카테고리 ID */
  categoryId: UUIDAsString;
  /** 이름 */
  name: string;
  /** 사용 여부 */
  enabled: boolean;
  /** 하위 카테고리 정보 */
  children?: Nullable<Array<CategoryNodeOutput>>;
  /** 상위 카테고리 정보 */
  parent?: Nullable<CategoryNodeOutput>;
  /** 다국어 정보 */
  localizes?: Nullable<Array<LocalizeOutput>>;
  /** 설명 */
  description?: Nullable<string>;
};
