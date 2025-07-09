import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { EnumFileUploadStatus, TypeFileUploadConfig, TypeFileUploadStructure } from '@/core/shared/hooks/upload/use-file-upload/use-file-upload.type';

export const INITIAL_FILE_UPLOAD_CONFIG: TypeFileUploadConfig = {
  id: null,
  size: 0,
  mime: null,
  clientname: null,
};

export const INITIAL_FILE_UPLOAD_STRUCTURE: TypeFileUploadStructure = {
  config: INITIAL_FILE_UPLOAD_CONFIG,
  status: null,
  percentage: 0,
};

export const getSchemaShapeFileUpload = (option: { t: TFunction; lang?: EnumLanguageCode }) => {
  const { t: repairTrans, lang } = option;
  return Yup.object<TypeFileUploadStructure>().shape({
    config: Yup.object()
      .shape({
        id: Yup.string().required().nullable(),
        size: Yup.number().required(),
        mime: Yup.string().required().nullable(),
        clientname: Yup.string().required().nullable(),
        assetId: Yup.string().optional().nullable(),
      })
      .required(),
    status: Yup.mixed<EnumFileUploadStatus>().oneOf(Object.values(EnumFileUploadStatus)).required().nullable(),
    percentage: Yup.number().required(),
  });
};
