import { headers } from 'next/headers';
import { HEADER_I18NEXT_LANGUAGE_KEY } from '@/shared/consts/common/header';
import { FALLBACK_LANG } from '@/shared/consts/common/language';
import { extractLang } from '@/core/utils/i18next/i18next.const';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import { presetSnapshot } from '@/shared/stores/auth/use-snapshot/use-snapshot.actions';
import { getSession } from '@/shared/configs/next-auth/next-auth.server';
import NotistackProvider from '@/core/design-systems/providers/providers-notistack';
import ThemeProvider from '@/core/design-systems/providers/providers-theme';
import SessionProviderClient from '@/shared/providers/session-provider.client';
import SnapshotProviderClient from '@/shared/providers/snapshot-provider.client';
import { STATIC_ADMIN_CATEGORY } from '@/shared/atom-components/common/category/category.const';
import Layout from '@/shared/atom-components/layout/layout';

interface RootLayoutProps extends React.PropsWithChildren {
  //
}

const RootLayout = async (props: RootLayoutProps) => {
  const { children } = props;

  const headersList = await headers();
  const session = await getSession();
  const lang = extractLang(`/${headersList.get(HEADER_I18NEXT_LANGUAGE_KEY) ?? ''}`) ?? FALLBACK_LANG;

  const { state: snapshotState } = await presetSnapshot();
  const categoryData = { data: STATIC_ADMIN_CATEGORY };

  return (
    <html lang={lang} dir="ltr">
      <body>
        <SessionProviderClient initialSession={session}>
          <SnapshotProviderClient initialSnapshot={snapshotState} />
          <ThemeProvider lang={lang}>
            <NotistackProvider>
              <Layout nestData={{ categoryData }}>{children}</Layout>
            </NotistackProvider>
          </ThemeProvider>
        </SessionProviderClient>
      </body>
    </html>
  );
};

export default RootLayout;
