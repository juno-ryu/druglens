import { IntAsNumber } from '@/core/utils/types/overridable/primitive';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';

/** 상품에 적용된 라이센스 정보를 반환 */
export type AssetProductLicenseOutput = {
  /** 라이센스 */
  license: AssetLicense;
  /** 가격 배수 */
  multiple: IntAsNumber;
};
