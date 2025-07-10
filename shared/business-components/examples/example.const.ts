import { UseFormReturn } from 'react-hook-form';

import { ButtonProps } from '@/core/design-systems/components/button';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { Theme } from '@mui/material';
import dayjs from 'dayjs';
import { get } from 'lodash';
import { ISODateString } from 'next-auth';
import * as yup from 'yup';

import { EnumExampleStatus, ExampleFormValues, ExampleNoticeType } from './example.type';

// Generic initial data for an example, similar to INITIAL_ASSETS
export const INITIAL_EXAMPLE_DATA = {
  title: '',
  description: '',
  status: EnumExampleStatus.DRAFT,
  // Add more initial fields as needed for example forms
};

// Generic validation schema, adapted from product and promotions
export const VALIDATION_SCHEMA_EXAMPLE = yup.object({
  id: yup.string().nullable(),
  title: yup.string().required('제목을 입력해 주세요'),
  description: yup.string().required('설명을 입력해 주세요'),
  status: yup.mixed<EnumExampleStatus>().oneOf(Object.values(EnumExampleStatus)).required('상태를 선택해 주세요'),
});

// Generic helper text for invalid form fields, adapted from promotions.const.ts
export const INVALID_HELPER_TEXT_EXAMPLE = (formContext: UseFormReturn<ExampleFormValues>, name: keyof ExampleFormValues) => {
  return [
    {
      key: `invalid-${name}`,
      value: get(formContext?.formState?.errors, name)?.message ?? '',
      withIcon: true,
    },
  ];
};

// Generic options for a selection, similar to REGION_OPTIONS
export const EXAMPLE_OPTIONS = [
  { label: '옵션 1', value: 'option1' },
  { label: '옵션 2', value: 'option2' },
  { label: '옵션 3', value: 'option3' },
];

// Generic button props, similar to FOOTER_BUTTON_PROPS
export const EXAMPLE_BUTTON_PROPS: ButtonProps = {
  variant: 'contained',
  color: 'augment/blue/500',
  size: 'medium',
  sx: { px: '12px', height: '48px' },
};

// Generic dialog identifier
export const DIALOG_EXAMPLE_VERIFY = 'dialog-example-verify';

// Generic label text function, adapted from product.const.ts
export const getExampleLabelText = (type: ExampleNoticeType) => {
  switch (type) {
    case 'info':
      return '정보';
    case 'warning':
      return '경고';
    case 'error':
      return '오류';
    case 'success':
      return '성공';
    default:
      return '알림';
  }
};

// Generic label color function, adapted from product.const.ts
export const getExampleLabelColor = (type: ExampleNoticeType) => {
  switch (type) {
    case 'info':
      return 'augment/cyan/500';
    case 'warning':
      return 'augment/yellow/500';
    case 'error':
      return 'augment/red/500';
    case 'success':
      return 'augment/green/500';
    default:
      return 'augment/gray/800';
  }
};

// Generic status label function, adapted from promotions.const.ts
export const getExampleStatusLabel = (status: EnumExampleStatus, createdAt?: Nullable<ISODateString>) => {
  const now = dayjs();

  switch (status) {
    case EnumExampleStatus.DRAFT:
      return { status, label: '초안', color: 'augment/blue/500' };
    case EnumExampleStatus.PENDING:
      return { status, label: '대기중', color: 'augment/yellow/500' };
    case EnumExampleStatus.APPROVED:
      return { status, label: '승인됨', color: 'augment/green/500' };
    case EnumExampleStatus.REJECTED:
      return { status, label: '거부됨', color: 'augment/red/500' };
    case EnumExampleStatus.ACTIVE:
      return { status, label: '활성', color: 'augment/green/600' };
    case EnumExampleStatus.INACTIVE:
      return { status, label: '비활성', color: 'augment/gray/600' };
    default:
      return { status, label: '알 수 없음', color: 'augment/gray/800' };
  }
};
