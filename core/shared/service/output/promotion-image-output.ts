import { Nullable } from '@/core/utils/types/selector/flexible';
import { DeviceType } from '@/core/shared/service/enum/device-type';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { ImageOutput } from '@/core/shared/service/output/image-output';

export type PromotionImageOutput = {
  // 설명: 대상 디바이스
  // 예시: "MOBILE"
  device: DeviceType;

  // 설명: 몰 구분
  // 예시: "KR"
  region: RegionCode;

  // 설명: 파일정보
  // 예시: { ... }
  file: ImageOutput;

  // 설명: HTML 정보
  // 예시: "<div>배너 내용</div>"
  html: Nullable<string>;
};
