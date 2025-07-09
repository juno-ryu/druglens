import { UseFormReturn } from 'react-hook-form';
import { ISODateString } from 'next-auth';
import { get } from 'lodash';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { EnumPromotionStatus } from '@/core/shared/service/admin/types/promotions';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { ButtonProps } from '@/core/design-systems/components/button';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

export const VALIDATION_SCHEMA = yup.object({
  title: yup.string().required('기획전명을 입력해 주세요'),
  since: yup.string().required('시작일을 입력해 주세요'),
  until: yup.string().required('종료일을 입력해 주세요'),
  slug: yup.string().required('기획전 URL을 입력해 주세요'),
  regions: yup.array().of(yup.string()).min(1, '최소 1개 이상의 노출 몰을 선택 하세요').required('노출 몰을 선택 하세요'),
});

export const INVALID_HELPER_TEXT = (formContext: UseFormReturn<FormValues>, name: keyof FormValues) => {
  return [
    {
      key: `invalid-${name}`,
      value: get(formContext?.formState?.errors, name)?.message ?? '',
      withIcon: true,
    },
  ];
};

export const REGION_OPTIONS = [
  { label: '국내몰', value: RegionCode.KR },
  { label: '일본몰', value: RegionCode.JP },
  { label: '글로벌몰', value: RegionCode.US },
  { label: '중국몰', value: RegionCode.CN },
];

export const FOOTER_BUTTON_PROPS: ButtonProps = {
  variant: 'contained',
  color: 'augment/purple/600',
  size: 'extraLarge',
  sx: { px: '16px', height: '100%', maxHeight: '56px', '& .MuiButton-child': { whiteSpace: 'pre' } },
};

export const DIALOG_SLUG_VERIFY = 'dialog-slug-verify';

export const getPromotionStatusLabel = (
  createdAt?: Nullable<ISODateString>,
  updatedAt?: Nullable<ISODateString>,
  publishedAt?: Nullable<ISODateString>,
  suspendedAt?: Nullable<ISODateString>,
  since?: Nullable<ISODateString>,
  until?: Nullable<ISODateString>,
) => {
  const now = dayjs();

  if (until && dayjs(until).isBefore(now)) {
    return { status: EnumPromotionStatus.DONE, label: '종료', color: 'augment/gray/800' };
  }
  if (suspendedAt) {
    return { status: EnumPromotionStatus.DONE, label: '종료', color: 'augment/gray/800' };
  }
  if (publishedAt) {
    if (dayjs(since).isAfter(now)) {
      return { status: EnumPromotionStatus.READY, label: '대기', color: 'augment/yellow/500' };
    } else {
      return { status: EnumPromotionStatus.RUNNING, label: '진행중', color: 'augment/green/500' };
    }
  }

  return { status: EnumPromotionStatus.DRAFT, label: '작성중', color: 'augment/blue/500' };
};
