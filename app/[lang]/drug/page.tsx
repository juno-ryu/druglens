import DrugSearchClient from '@/shared/business-components/drug-search/drug-search-client';

export default async function DrugSearchPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  return <DrugSearchClient lang={lang} />;
}