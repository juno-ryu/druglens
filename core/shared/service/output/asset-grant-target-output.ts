import { ISODateString } from 'next-auth';
import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { AssetSimpleOutput } from '@/core/shared/service/output/asset-simple-output';

/** 구매한 상품의 사용권에 부여된 다운로드 가능 횟수 */
export type AssetGrantTargetOutput = {
  id: UUIDAsString;

  assetId: UUIDAsString;

  limitCount: IntAsNumber;

  takeCount: IntAsNumber;

  unlockAt: Nullable<ISODateString>;

  asset?: AssetSimpleOutput;
};
