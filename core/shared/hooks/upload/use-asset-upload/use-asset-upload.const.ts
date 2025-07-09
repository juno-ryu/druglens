import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { EnumAssetUploadStatus, TypeAssetUploadConfig, TypeAssetUploadStructure } from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload.type';

export const INITIAL_ASSET_UPLOAD_CONFIG: TypeAssetUploadConfig = {
  id: null,
  size: 0,
  clientname: null,
  fileKey: null,
  assetId: null,
  mime: null,
};

export const INITIAL_ASSET_UPLOAD_STRUCTURE: TypeAssetUploadStructure = {
  config: INITIAL_ASSET_UPLOAD_CONFIG,
  status: null,
  extensionIds: [],
  applicationIds: [],
  fileComponents: [],
  percentage: 0,
};

export const getSchemaShapeAssetUpload = (option: { t: TFunction; lang?: EnumLanguageCode }) => {
  const { t: repairTrans, lang } = option;
  return Yup.object<TypeAssetUploadStructure>().shape({
    config: Yup.object({
      id: Yup.string().required().nullable(),
      clientname: Yup.string().required().nullable(),
      size: Yup.number().required(),
      mime: Yup.string().required().nullable(),
      fileKey: Yup.string().required().nullable(),
      assetId: Yup.string().optional().nullable(),
    }).required(),
    status: Yup.mixed<EnumAssetUploadStatus>().oneOf(Object.values(EnumAssetUploadStatus)).required().nullable(),
    extensionIds: Yup.array().of(Yup.number().required()).required(),
    applicationIds: Yup.array().of(Yup.number().required()).required(),
    percentage: Yup.number().required(),
  });
};
