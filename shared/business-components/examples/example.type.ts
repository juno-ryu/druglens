import { Dayjs } from 'dayjs';
import { Nullable, Optional } from '@/core/utils/types/selector/flexible';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

// Generic Enum for example categories, similar to EnumCategoryCode
export enum EnumExampleCategoryCode {
  EXAMPLE_GENRE = 'example-genre',
  EXAMPLE = 'example',
}

// Generic NoticeType, adapted from product.type.ts
export type ExampleNoticeType = 'info' | 'warning' | 'error' | 'success';

// Generic NoticesType, adapted from product.type.ts
export type ExampleNoticesType = {
  id: number;
  type: ExampleNoticeType;
  title: string;
  date: Dayjs;
};

// Generic status enum, combining ideas from ChangeProductStatus and EnumPromotionStatus
export enum EnumExampleStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

// Generic form values type, adapted from promotions.type.ts (FormValues)
// This will be a placeholder for whatever data an example form might handle.
export type ExampleFormValues = {
  id: Nullable<UUIDAsString>;
  title: string;
  description: string;
  status: EnumExampleStatus;
  // Add more fields as needed for example forms
};

// Generic item with input, similar to PromotionItemOutputWithInput
export type ExampleItemOutputWithInput = {
  id: Nullable<UUIDAsString>;
  name: string;
  value: string;
  // Add more fields as needed for example items
};