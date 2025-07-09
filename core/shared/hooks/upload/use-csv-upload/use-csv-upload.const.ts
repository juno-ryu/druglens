import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { EnumCsvUploadStatus, TypeCsvUploadStructure } from '@/core/shared/hooks/upload/use-csv-upload/use-csv-upload.type';

export const INITIAL_CSV_UPLOAD_STRUCTURE: TypeCsvUploadStructure = {
  status: null,
  percentage: 0,
};

export const getSchemaShapeCsvUpload = (option: { t: TFunction; lang?: EnumLanguageCode }) => {
  const { t: repairTrans, lang } = option;
  return Yup.object<TypeCsvUploadStructure>().shape({
    config: Yup.object()
      .shape({
        id: Yup.string().required().nullable(),
        size: Yup.number().required(),
        mime: Yup.string().required().nullable(),
        clientname: Yup.string().required().nullable(),
        assetId: Yup.string().optional().nullable(),
      })
      .required(),
    status: Yup.mixed<EnumCsvUploadStatus>().oneOf(Object.values(EnumCsvUploadStatus)).required().nullable(),
    percentage: Yup.number().required(),
  });
};
