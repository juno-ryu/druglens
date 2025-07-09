import { headers } from 'next/headers';
import { HEADER_I18NEXT_LANGUAGE_KEY } from '@/shared/consts/common/header';
import { FALLBACK_LANG } from '@/shared/consts/common/language';
import { extractLang } from '@/core/utils/i18next/i18next.const';

interface NotFoundPageProps {
  //
}

const NotFoundPage = async (props: NotFoundPageProps) => {
  const {} = props;

  const headersList = await headers();
  const lang = extractLang(`/${headersList.get(HEADER_I18NEXT_LANGUAGE_KEY) ?? ''}`) ?? FALLBACK_LANG;

  return (
    <div>
      <strong>Not Found - {lang}</strong>
    </div>
  );
};

export default NotFoundPage;
