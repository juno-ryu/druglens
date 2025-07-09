import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';

export type EnumCsvUploadStatus = (typeof EnumCsvUploadStatus)[keyof typeof EnumCsvUploadStatus];
export const EnumCsvUploadStatus = {
  INPROGRESS: 'inprogress',
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

export type TypeCsvUploadOptions = {
  id: UUIDAsString;
  initialStructure?: Partial<TypeCsvUploadStructure>;
  accept?: Array<React.InputHTMLAttributes<HTMLInputElement>['accept']>;
  uploadApi: (id: UUIDAsString, payload: FormData) => Promise<{ data: string }>;
  onFinally?: (values: TypeCsvUploadStructure) => void;
  onReset?: (values: TypeCsvUploadStructure) => void;
};

export type TypeCsvUploadStructure = {
  status: Nullable<EnumCsvUploadStatus>;
  percentage: number;
};
