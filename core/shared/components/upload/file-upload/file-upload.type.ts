import { FieldPath, FieldValues } from 'react-hook-form';
import { TypeFileUploadOptions } from '@/core/shared/hooks/upload/use-file-upload/use-file-upload.type';

export interface FileUploadProps<T extends FieldValues = object> extends React.HTMLProps<HTMLInputElement> {
  name: FieldPath<T>;
  uploadOptions: TypeFileUploadOptions;
}
