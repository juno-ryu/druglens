import { ISODateString } from 'next-auth';
import dayjs from 'dayjs';
import { Theme } from '@mui/material';
import * as yup from 'yup';
import { PutProductAssetsDetailInput } from '@/core/shared/service/admin/types/product';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { AssetLicense } from '@/core/shared/service/enum/asset-license';
import { HasRealLogo } from '@/core/shared/service/enum/has-real-logo';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { NoticeType } from '@/shared/business-components/product/product.type';

export const INITIAL_ASSETS: PutProductAssetsDetailInput = {
  title: '',
  brandId: '',
  regions: [],
  contentHead: '',
  contentBody: '',
  price: 2000,
  isAdult: false,
  images: [],
  categories: [],
  tags: [],
  assets: [],
  licenses: [
    { license: AssetLicense.PERSONAL, multiple: 1 },
    { license: AssetLicense.LIMITED1, multiple: 1 },
    { license: AssetLicense.LIMITED5, multiple: 5 },
    { license: AssetLicense.UNLIMITED, multiple: 10 },
  ],
  stocks: [],
  copyright: {
    isOriginal: true,
    warehouseSources: null,
    commercialSources: null,
    hasRealLogo: HasRealLogo.MODIFIED,
  },
};

//: yup.ObjectSchema<StoreAssetProduct>
export const VALIDATION_SCHEMA_ORIGINAL = yup.object({
  title: yup.string().required(),
  contentHead: yup.string().required(),
  contentBody: yup.string().required(),
  copyright: yup
    .object({
      isOriginal: yup.boolean().required(),
      warehouseSources: yup.string().nullable().optional(),
      commercialSources: yup.string().nullable().optional(),
      hasRealLogo: yup.mixed<'MODIFIED' | 'YES' | 'NO'>().oneOf(['MODIFIED', 'YES', 'NO']).required(),
    })
    .required(),
  brandId: yup.string().required(),
  regions: yup.array().of(yup.mixed<RegionCode>().required()).optional(),
  // price: yup.number().required(),
  isAdult: yup.boolean().required(),
  categories: yup
    .array()
    .of(
      yup.object({
        id: yup.string().required(),
        isMain: yup.boolean().required(),
      }),
    )
    .required(),
  // images: yup
  //   .array()
  //   .of(
  //     yup.object({
  //       id: yup.string().optional(),
  //       mime: yup.string().optional(),
  //       size: yup.number().optional(),
  //       url: yup.string().optional(),
  //       uploaded: yup
  //         .object({
  //           fileKey: yup.string().required(),
  //           clientname: yup.string().required(),
  //         })
  //         .nullable()
  //         .optional(),
  //       isMain: yup.boolean().required(),
  //     }),
  //   )
  //   .required(),
  tags: yup.array().of(yup.string().required()).required(),
  assets: yup
    .array()
    .of(
      yup.object({
        id: yup.string().required(),
        price: yup.number().required(),
        name: yup.string().optional(),
        files: yup
          .array()
          .of(
            yup.object({
              id: yup.string().required(),
              clientname: yup.string().required(),
              mime: yup.string().required(),
              size: yup.number().required(),
            }),
          )
          .optional(),
      }),
    )
    .required(),
  licenses: yup
    .array()
    .of(
      yup.object({
        license: yup.mixed<AssetLicense>().required(),
        multiple: yup.number().required(),
      }),
    )
    .required(),
  stocks: yup
    .array()
    .of(
      yup.object({
        id: yup.string().optional(),
        assetIds: yup.array().of(yup.string().required()).required(),
        price: yup.number().required(),
        isDisabled: yup.boolean().required(),
        license: yup.mixed<AssetLicense>().required(),
      }),
    )
    .required(),
});

//: yup.ObjectSchema<Pick<StoreAssetProduct, 'title' | 'contentHead' | 'contentBody' | 'copyright'>>
export const VALIDATION_SCHEMA_TRANSLATION = yup.object().shape({
  title: yup.string().required(),
  contentHead: yup.string().required(),
  contentBody: yup.string().required(),
  copyright: yup
    .object({
      isOriginal: yup.boolean().required(),
      warehouseSources: yup.string().nullable().optional(),
      commercialSources: yup.string().nullable().optional(),
      hasRealLogo: yup.mixed<'MODIFIED' | 'YES' | 'NO'>().oneOf(['MODIFIED', 'YES', 'NO']).required(),
    })
    .required(),
});

export function findParentIds(data: CategoryNodeOutput[], targetId: string | undefined, path: string[] = []): string[] | null {
  for (const item of data) {
    const newPath = [...path, item.id]; // 현재까지의 경로 저장

    if (item.id === targetId) {
      return newPath; // 중복 추가 없이 반환
    }

    if (item.children) {
      const result = findParentIds(item.children, targetId, newPath);
      if (result) return result; // 하위에서 찾았으면 반환
    }
  }
  return null;
}

export function findCurrentTree(data: CategoryNodeOutput[], targetId: string | undefined): CategoryNodeOutput | null {
  for (const item of data) {
    if (item.id === targetId) {
      return item; // 찾으면 해당 트리 반환
    }
    if (item.children) {
      const result = findCurrentTree(item.children, targetId);
      if (result) return result;
    }
  }
  return null; // 찾지 못한 경우
}

export const getLabelText = (type: NoticeType) => {
  switch (type) {
    case 'notice':
      return '공지';
    case 'guide':
      return '가이드';
    case 'event':
      return '이벤트';
    case 'tip':
      return '꿀팁';
    default:
      return '알림';
  }
};

export const getLabelColor = (type: NoticeType) => {
  switch (type) {
    case 'notice':
      return 'augment/cyan/500';
    case 'guide':
      return 'augment/gray/800';
    case 'event':
      return 'augment/purple/600';
    case 'tip':
      return 'augment/yellow/500';
    default:
      return 'augment/gray/800';
  }
};

export const getListGridSx = (theme: Theme) => ({
  '&.MuiDataGrid-root': {
    border: 'none !important',
  },
  '& .MuiDataGrid-columnHeaders': {
    borderRadius: '8px',
    // border: `1px solid ${theme.palette['gray/200']}`,
    borderBottom: `1px solid ${theme.palette['gray/200']}`,
    borderTop: `1px solid ${theme.palette['gray/200']}`,
    '& > div': {
      background: 'transparent !important',
    },
  },
  '& .MuiDataGrid-columnHeader': {
    borderBottom: 'none !important',
    // borderRight: `1px solid ${theme.palette['gray/200']}`,
    '&.MuiDataGrid-columnHeader--last': {
      borderRight: 'none',
    },
    '.MuiDataGrid-columnSeparator': {
      display: 'none',
    },
  },
  '& .MuiDataGrid-row': {
    cursor: 'pointer',
  },
  '& .MuiDataGrid-cell': {
    '&:focus, &:active, &:focus-within': {
      outline: 'none',
      outlineOffset: 0,
    },
  },
});

export const LANGUAGE_LABLES: Record<LanguageCode, string> = {
  [LanguageCode.KO]: '국문',
  [LanguageCode.EN]: '영문',
  [LanguageCode.JA]: '일문',
  [LanguageCode.ZH]: '중문',
};
export const getPublishStatusLabel = (suspendedAt: Nullable<ISODateString>, publishedAt: Nullable<ISODateString>) => {
  if (publishedAt) {
    return { status: 'published', label: '등록', color: 'augment/green/600' };
  }
  return { status: 'not_published', label: '미등록', color: 'augment/gray/600' };
};

export const getExposureStatusLabel = (suspendedAt: Nullable<ISODateString>, exposedAt: Nullable<ISODateString>) => {
  if (exposedAt && dayjs(exposedAt)) {
    const now = dayjs();
    const target = dayjs(exposedAt);
    const isFuture = target.isAfter(now);

    if (isFuture) {
      return { status: 'expected', label: '노출 예정', color: 'augment/yellow/500' };
    } else {
      return { status: 'exposed', label: '노출', color: 'augment/green/600' };
    }
  }
  return { status: 'not_exposed', label: '미노출', color: 'augment/gray/600' };
};

export const getRevisionStatusLabel = (status: ProductRevisionStatus, suspendedAt: Nullable<ISODateString>, exposedAt: Nullable<ISODateString>) => {
  if (suspendedAt) {
    return { status, color: 'augment/red/500', label: '판매 중단' };
  }
  const map: Record<ProductRevisionStatus, { color: string; label: string }> = {
    [ProductRevisionStatus.WAITING]: { color: 'augment/yellow/600', label: '대기' },
    [ProductRevisionStatus.REQUEST]: { color: 'augment/primary/600', label: '심사 요청' },
    [ProductRevisionStatus.IN_PROGRESS]: { color: 'augment/primary/600', label: '심사 중' },
    [ProductRevisionStatus.DENIED]: { color: 'augment/red/500', label: '거절' },
    [ProductRevisionStatus.REJECT]: { color: 'augment/red/500', label: '반려' },
    [ProductRevisionStatus.APPROVE]: { color: 'augment/green/600', label: '승인' },
  };

  const fallback = { color: 'augment/gray/800', label: '' };
  const { color, label } = map[status] ?? fallback;

  return { status, color, label };
};
