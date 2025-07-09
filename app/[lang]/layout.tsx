import { DEFINED_LANGS } from '@/shared/consts/common/language';

export const dynamicParams = false;
export const generateStaticParams = async () => {
  return DEFINED_LANGS.map((lang) => ({ lang }));
};

interface LayoutProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

const Layout = async (props: LayoutProps) => {
  const { children } = props;

  return <>{children}</>;
};

export default Layout;
