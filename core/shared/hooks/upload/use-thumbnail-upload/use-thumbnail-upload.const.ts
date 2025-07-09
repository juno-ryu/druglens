import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { TypeThumbnailUploadConfig, TypeThumbnailUploadStructure } from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.type';

export const INITIAL_THUMBNAIL_UPLOAD_CONFIG: TypeThumbnailUploadConfig = {
  size: 0,
  clientname: null,
  fileKey: null,
  mime: null,
};

export const INITIAL_THUMBNAIL_UPLOAD_STRUCTURE: TypeThumbnailUploadStructure = {
  config: INITIAL_THUMBNAIL_UPLOAD_CONFIG,
  status: null,
  percentage: 0,
};
