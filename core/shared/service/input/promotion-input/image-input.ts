import { Optional } from '@/core/utils/types/selector/flexible';
import { DeviceType } from '@/core/shared/service/enum/device-type';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { FileInput } from '@/core/shared/service/input/asset-input/file-input';

export type ImageInput = {
  // 예시: "KR"
  region: RegionCode;

  // 예시: "PC"
  device: DeviceType;

  file: FileInput;

  // 예시: "<div>배너 내용</div>"
  html: Optional<string>;
};
