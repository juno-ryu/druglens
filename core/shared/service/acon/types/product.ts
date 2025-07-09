import { ISODateString } from 'next-auth';
import { BigDecimalAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { AssetProductTagListOutput } from '@/core/shared/service/output/asset-product-tag-list-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';

export interface ProductAssetsSearchFilter extends PageableInput, SortInput {
  /** (BE) 텍스트 검색 필드 */
  keyfield?: Nullable<string>;
  /** (BE) 텍스트 검색 키워드 */
  keyword?: Nullable<string>;
  /** (BE) 상태 코드 */
  statuses?: Nullable<Array<string>>;
  /** (BE) 생성일 범위 시작 */
  createdSince?: Nullable<ISODateString>;
  /** (BE) 생성일 범위 끝 */
  createdUntil?: Nullable<ISODateString>;
  /** (BE) 노출 여부 */
  visible?: Nullable<boolean>;
  /** (BE) 성인 상품 */
  isAdult?: Nullable<boolean>;
  /** (BE) 신상품 */
  isNew?: Nullable<boolean>;
  /** (FE) 가격 범위 */
  priceRange?: Nullable<string>;
  /** (BE) 가격 범위 시작 */
  priceStart?: Nullable<BigDecimalAsNumber>;
  /** (BE) 가격 범위 끝 (priceStart != null일 경우 필수) */
  priceEnd?: Nullable<BigDecimalAsNumber>;
  /** 카테고리 노드 id */
  category: Nullable<UUIDAsString>;
  /** (BE) 확장자 id 목록 */
  extensions?: Nullable<Array<ExtensionOutput['id']>>;
  /** (BE) 응용프로그램 id 목록 */
  applications?: Nullable<Array<ApplicationOutput['id']>>;
  /** (BE) 태그 목록 */
  tags?: Nullable<Array<AssetProductTagListOutput['id']>>;
  /** (BE) 할인 상품 */
  isPromoted?: Nullable<boolean>;
  /** (BE) 특정 프로모션 코드 목록 (isPromoted true일 경우 필수) */
  promotionConceptCode?: Nullable<Array<string>>;
  /** (FE) 태그 사이즈 */
  tagsSize?: PageableInput['size'];
}

export interface ProductAssetsTagsSearchFilter {
  /** (BE) 텍스트 검색 필드 */
  keyfield?: Nullable<string>;
  /** (BE) 텍스트 검색 키워드 */
  keyword?: Nullable<string>;
  /** (BE) 상태 코드 */
  statuses?: Nullable<Array<string>>;
  /** (BE) 생성일 범위 시작 */
  createdSince?: Nullable<ISODateString>;
  /** (BE) 생성일 범위 끝 */
  createdUntil?: Nullable<ISODateString>;
  /** (BE) 노출 여부 */
  visible?: Nullable<boolean>;
  /** (BE) 성인 상품 */
  isAdult?: Nullable<boolean>;
  /** (BE) 신상품 */
  isNew?: Nullable<boolean>;
  /** (FE) 가격 범위 */
  priceRange?: Nullable<string>;
  /** (BE) 가격 범위 시작 */
  priceStart?: Nullable<BigDecimalAsNumber>;
  /** (BE) 가격 범위 끝 (priceStart != null일 경우 필수) */
  priceEnd?: Nullable<BigDecimalAsNumber>;
  /** 카테고리 노드 id */
  category: Nullable<UUIDAsString>;
  /** (BE) 확장자 id 목록 */
  extensions?: Nullable<Array<ExtensionOutput['id']>>;
  /** (BE) 응용프로그램 id 목록 */
  applications?: Nullable<Array<ApplicationOutput['id']>>;
  /** (BE) 태그 목록 */
  tags?: Nullable<Array<AssetProductTagListOutput['id']>>;
  /** (BE) 할인 상품 */
  isPromoted?: Nullable<boolean>;
  /** (BE) 특정 프로모션 코드 목록 (isPromoted true일 경우 필수) */
  promotionConceptCode?: Nullable<Array<string>>;
  /** (FE) 태그 사이즈 */
  tagsSize?: PageableInput['size'];
}
