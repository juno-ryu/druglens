import { FieldPath, FieldValues } from 'react-hook-form';
import { TypeAssetUploadOptions } from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload.type';

export interface AssetUploadProps<T extends FieldValues = object> extends React.HTMLProps<HTMLInputElement> {
  name: FieldPath<T>;
  disabled?: boolean;
  uploadOptions: TypeAssetUploadOptions;
}
