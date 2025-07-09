import { FieldPath, FieldValues } from 'react-hook-form';
import { TypeThumbnailUploadOptions } from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.type';

export interface ThumbnailUploadProps<T extends FieldValues = object> extends React.HTMLProps<HTMLInputElement> {
  name: FieldPath<T>;
  uploadOptions: TypeThumbnailUploadOptions;
  disabled?: boolean;
}
