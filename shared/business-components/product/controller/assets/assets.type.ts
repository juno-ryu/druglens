import { Nullable } from '@/core/utils/types/selector/flexible';

export type UnzipResult = {
  newFileNames: string[];
  newExtensions: number[];
  newApplications: number[];
};
export type AssetResult = {
  id: Nullable<string>;
  name: Nullable<string>;
};
export type CompleteUploadParams = {
  fileConfig: FileConfig;
  newFileNames: string[];
  newExtensions: number[];
  newApplications: number[];
};
export interface FileConfig {
  id: Nullable<string>;
  clientname: Nullable<string>;
  size: number;
  mime: Nullable<string>;
  fileKey: Nullable<string>;
  // update
  assetId?: Nullable<string>;
}

export type FileStatus = 'inprogress' | 'success' | 'fail' | null;
