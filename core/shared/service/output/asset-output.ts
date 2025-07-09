// asset-output.ts

import { ISODateString } from 'next-auth';
import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { AssetFileComponentOutput } from '@/core/shared/service/output/asset-file-component-output';
import { FileOutput } from '@/core/shared/service/output/file-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';

/** 에셋 정보를 반환 */
export type AssetOutput = {
  /** 에셋 고유 ID
   * @example "1d934f3c-44d2-4a62-a2d2-9c1d1c2f7d85"
   */
  id: UUIDAsString;

  /** 조직 ID
   * @example "70b0a1e3-21c4-477f-92ab-05174f07d615"
   */
  organizationId: UUIDAsString;

  /** 에셋명
   * @example "강남역 좀비 3D 모델"
   */
  name: string;

  /** 버전
   * @example 3
   */
  version: IntAsNumber;

  /** 적용일시
   * @example "2025-05-23T12:00:00Z"
   */
  publishedAt: ISODateString;

  /** 파일 목록
   * @example [{ url: "https://cdn.example.com/file.glb" }]
   */
  files: Nullable<FileOutput[]>;

  /** 압축파일 세부 파일 목록
   * @example [{ name: "car.glb", size: 102400 }]
   */
  fileComponents: Nullable<AssetFileComponentOutput[]>;

  /** 다국어 목록
   * @example [{ lang: "en", name: "Gangnam Zombie" }]
   */
  localizes: Nullable<LocalizeOutput>;
};
