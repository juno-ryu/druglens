import { PaginationOutput } from '@/core/shared/service/output/common/pagination-output';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

import {
  EnumExampleStatus,
  ExampleFormValues,
} from '@/shared/business-components/examples/example.type';
import ListClient from '@/shared/business-components/examples/list.client';

// ListClient에 전달할 ExampleOutput 타입 정의 (list.client.tsx에 정의된 것과 동일)
type ExampleOutput = {
  id: UUIDAsString;
  title: string;
  description: string;
  status: EnumExampleStatus;
  createdAt: string;
};

export default async function ExamplePage() {
  // ListClient에 전달할 목업 데이터
  const mockList: ExampleOutput[] = [
    {
      id: 'example-id-1' as UUIDAsString,
      title: '첫 번째 예시 항목',
      description: '이것은 첫 번째 예시 항목입니다.',
      status: EnumExampleStatus.ACTIVE,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'example-id-2' as UUIDAsString,
      title: '두 번째 예시 항목',
      description: '이것은 두 번째 예시 항목입니다.',
      status: EnumExampleStatus.PENDING,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'example-id-3' as UUIDAsString,
      title: '세 번째 예시 항목',
      description: '이것은 세 번째 예시 항목입니다.',
      status: EnumExampleStatus.DRAFT,
      createdAt: new Date().toISOString(),
    },
  ];

  const mockFilterProps: ExampleFormValues = {
    id: null,
    title: '',
    description: '',
    status: EnumExampleStatus.DRAFT,
  };

  const mockPagination: PaginationOutput = {
    page: 0,
    size: 10,
    last: 1,
    total: mockList.length,
  };

  return (
    <ListClient
      title="예시 목록 페이지"
      list={mockList}
      filterProps={mockFilterProps}
      pagination={mockPagination}
    />
  );
}
