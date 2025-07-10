import NotistackProvider from '@/core/design-systems/providers/providers-notistack';
import ThemeProvider from '@/core/design-systems/providers/providers-theme';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import { extractLang } from '@/core/utils/i18next/i18next.const';
import { headers } from 'next/headers';

import { STATIC_ADMIN_CATEGORY } from '@/shared/atom-components/common/category/category.const';
import Layout from '@/shared/atom-components/layout/layout';
import { HEADER_I18NEXT_LANGUAGE_KEY } from '@/shared/consts/common/header';
import { FALLBACK_LANG } from '@/shared/consts/common/language';

interface RootLayoutProps extends React.PropsWithChildren {
  //
}

const RootLayout = async (props: RootLayoutProps) => {
  const { children } = props;

  const headersList = await headers();
  const lang =
    extractLang(`/${headersList.get(HEADER_I18NEXT_LANGUAGE_KEY) ?? ''}`) ??
    FALLBACK_LANG;

  const categoryData = { data: STATIC_ADMIN_CATEGORY };

  return (
    <html lang={lang} dir="ltr">
      <body>
        <ThemeProvider lang={lang}>
          <NotistackProvider>
            <Layout nestData={{ categoryData }}>{children}</Layout>
          </NotistackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
