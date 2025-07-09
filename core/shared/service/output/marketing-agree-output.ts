import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { MarketingMethod } from '@/core/shared/service/enum/marketing-method';
import { MarketingPlatform } from '@/core/shared/service/enum/marketing-platform';

/** 플랫폼, 수단 별 수신 정보 동의 정보 */
export type MarketingAgreeOutput = {
  /** ID */
  id: UUIDAsString;
  /** 동의 한 플랫폼 */
  platform: MarketingPlatform;
  /** 동의 한 수단 */
  method: MarketingMethod;
  /** 동의 한 시간 (UTC) */
  createdAt: ISODateString;
};
