import { UsersSearchOptions } from '@/core/shared/service/admin/types/users';
import { SelectOption } from '@/shared/atom-components/common/filter/filter.const';

export const SEARCH_OPTIONS_FOR_USER: SelectOption<UsersSearchOptions>[] = [
  { value: UsersSearchOptions.EMAIL, label: '아이디(이메일)' },
  { value: UsersSearchOptions.NAME, label: '이름' },
] as const;
