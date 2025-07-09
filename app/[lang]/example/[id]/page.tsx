import { UUIDAsString } from '@/core/utils/types/overridable/primitive';

import FormClient from '@/shared/business-components/examples/controller/form.client';
import {
  EnumExampleStatus,
  ExampleFormValues,
} from '@/shared/business-components/examples/example.type';
import { EnumLanguageCode } from '@/shared/consts/common/language';

// 목업 데이터베이스 (실제로는 API 호출을 통해 데이터를 가져옵니다)
const mockDatabase: ExampleFormValues[] = [
  {
    id: 'example-id-1' as UUIDAsString,
    title: '첫 번째 예시 항목',
    description: '이것은 첫 번째 예시 항목입니다.',
    status: EnumExampleStatus.ACTIVE,
  },
  {
    id: 'example-id-2' as UUIDAsString,
    title: '두 번째 예시 항목',
    description: '이것은 두 번째 예시 항목입니다.',
    status: EnumExampleStatus.PENDING,
  },
  {
    id: 'example-id-3' as UUIDAsString,
    title: '세 번째 예시 항목',
    description: '이것은 세 번째 예시 항목입니다.',
    status: EnumExampleStatus.DRAFT,
  },
];

// 특정 ID에 해당하는 예시 데이터를 가져오는 목업 함수
const fetchExampleById = (id: string): ExampleFormValues | undefined => {
  return mockDatabase.find((item) => item.id === id);
};

interface ExampleDetailPageProps {
  params: Promise<{ lang: EnumLanguageCode; id: string }>;
}

const ExampleDetailPage = async (props: ExampleDetailPageProps) => {
  const { params } = props;
  const { lang, id } = await params;
  const initialData = fetchExampleById(id);

  if (!initialData) {
    // 데이터가 없을 경우 404 페이지 또는 에러 메시지 표시
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>예시 항목을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return <FormClient />;
};
export default ExampleDetailPage;
