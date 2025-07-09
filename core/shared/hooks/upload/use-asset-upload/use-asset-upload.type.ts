import { Nullable } from '@/core/utils/types/selector/flexible';
import { PresignedUploadedComponent } from '@/core/shared/service/input/presigned-input/presigned-uploaded-component';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { AssetOutput } from '@/core/shared/service/output/asset-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';

export type EnumAssetUploadStatus = (typeof EnumAssetUploadStatus)[keyof typeof EnumAssetUploadStatus];
export const EnumAssetUploadStatus = {
  INPROGRESS: 'inprogress',
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

export type TypeAssetUploadOptions = {
  initialStructure?: Partial<TypeAssetUploadStructure>;
  applications: ApplicationOutput[];
  extensions: ExtensionOutput[];
  asset: AssetOutput;
  accept?: Array<React.InputHTMLAttributes<HTMLInputElement>['accept']>;
  onStart?: (values: TypeAssetUploadStructure) => void;
  onFinally?: (values: TypeAssetUploadStructure) => void;
  onReset?: (values: TypeAssetUploadStructure) => void;
};

export type TypeAssetUploadStructure = {
  config: TypeAssetUploadConfig;
  status: Nullable<EnumAssetUploadStatus>;
  extensionIds: number[];
  applicationIds: number[];
  fileComponents?: PresignedUploadedComponent[];
  percentage: number;
};

export interface TypeAssetUploadConfig {
  id: Nullable<string>;
  clientname: Nullable<string>;
  size: number;
  mime: Nullable<string>;
  fileKey: Nullable<string>;
  assetId?: Nullable<string>;
}
