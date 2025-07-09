import { Nullable } from '@/core/utils/types/selector/flexible';

export type EnumFileUploadStatus = (typeof EnumFileUploadStatus)[keyof typeof EnumFileUploadStatus];
export const EnumFileUploadStatus = {
  INPROGRESS: 'inprogress',
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

export type TypeFileUploadOptions = {
  initialStructure?: Partial<TypeFileUploadStructure>;
  accept?: Array<React.InputHTMLAttributes<HTMLInputElement>['accept']>;
  uploadApi: (payload: FormData) => Promise<{ data: string }>;
  downloadApi: (fileId: string) => Promise<{ data: URL }>;
  onFinally?: (values: TypeFileUploadStructure) => void;
  onReset?: (values: TypeFileUploadStructure) => void;
};

export interface TypeFileUploadConfig {
  id: Nullable<string>;
  clientname: Nullable<string>;
  size: number;
  mime: Nullable<string>;
  assetId?: Nullable<string>;
}

export type TypeFileUploadStructure = {
  config: TypeFileUploadConfig;
  status: Nullable<EnumFileUploadStatus>;
  percentage: number;
};
