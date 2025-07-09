import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';

/** 상품에 적용될 사용권 */
export type LicenseInput = {
  /** 라이센스 종류 */
  license: AssetLicense;
  /** 가격 배수 */
  multiple: IntAsNumber;
};
