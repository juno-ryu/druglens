import { FieldPath, FieldValues } from 'react-hook-form';
import { TypePhotoReviewUploadOptions } from '@/core/shared/hooks/upload/use-photo-review-upload/use-photo-review-upload.type';

export interface PhotoReviewUploadProps<T extends FieldValues = object> extends React.HTMLProps<HTMLInputElement> {
  name: FieldPath<T>;
  uploadOptions: TypePhotoReviewUploadOptions;
  disabled?: boolean;
}
