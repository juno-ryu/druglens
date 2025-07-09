import React from 'react';
import { PromotionSearchFilter } from '@/carpen-products/shared/service/admin/types/promotions';
import { ADMIN_URIS } from '@/carpen-products/shared/service/admin/admin.const';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';
import { LanguageCode } from '@/carpen-products/shared/service/enum/language-code';
import { INITIAL_FILTER_STATE_FOR_PROMOTION } from '@/shared/atom-components/common/filter/controller/promotions-filter/promotions-filter.const';
import ListClient from '@/shared/business-components/promotions/list.client';
import { fetchPromotions } from '@/app/[lang]/promotions/actions';

interface PromotionPageProps {
  params: Promise<{ lang: LanguageCode }>;
  searchParams: Promise<PromotionSearchFilter & { status: string }>;
}

const PromotionPage = async (props: PromotionPageProps) => {
  const { searchParams } = props;
  const filterParams = await searchParams;

  const filterProps: PromotionSearchFilter = {
    ...INITIAL_FILTER_STATE_FOR_PROMOTION,
    ...filterParams,
  };

  const { filter } = ADMIN_URIS['promotions'](filterProps);
  const promotionsData = await fetchPromotions(filterProps);

  if (!promotionsData) {
    return <div>Failed to load data.</div>;
  }

  return <ListClient key={filter} title="기획전" list={promotionsData.data} pagination={promotionsData.pagination} filterProps={filterProps} />;
};
export default PromotionPage;
