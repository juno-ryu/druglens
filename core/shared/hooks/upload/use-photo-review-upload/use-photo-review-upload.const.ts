import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { TypePhotoReviewUploadConfig, TypePhotoReviewUploadStructure } from '@/core/shared/hooks/upload/use-photo-review-upload/use-photo-review-upload.type';

export const INITIAL_PHOTO_REVIEW_UPLOAD_STRUCTURE: TypePhotoReviewUploadStructure = {
  config: null,
  status: null,
  percentage: 0,
};
