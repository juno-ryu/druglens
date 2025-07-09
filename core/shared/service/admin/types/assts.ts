import { AssetLicense } from '@/core/shared/service/enum/asset-license';

export interface AssetGrantsPostInput {
  type: AssetLicense;
  groupName?: string;
  licensedWorkTitle: string;
}
