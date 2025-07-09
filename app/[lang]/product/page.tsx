import React from 'react';
import { ProductAssetsSearchFilter } from '@/carpen-products/shared/service/admin/types/product';
import { ADMIN_URIS } from '@/carpen-products/shared/service/admin/admin.const';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';
import { LanguageCode } from '@/carpen-products/shared/service/enum/language-code';
import { ProductRevisionStatus } from '@/carpen-products/shared/service/enum/product-revision-status';
import { INITIAL_FILTER_STATE_FOR_PRODUCT } from '@/shared/atom-components/common/filter/controller/product-filter/product-filter.const';
import ListClient from '@/shared/business-components/product/list.client';

interface ProductPageProps {
  params: Promise<{ lang: LanguageCode }>;
  searchParams: Promise<ProductAssetsSearchFilter & { statuses: string }>;
}

const ProductPage = async (props: ProductPageProps) => {
  const { searchParams } = props;
  const filterParams = await searchParams;

  const statuses = Object.values(ProductRevisionStatus).filter((status) => (filterParams?.statuses || '').includes(status));

  const filterProps: ProductAssetsSearchFilter = {
    ...INITIAL_FILTER_STATE_FOR_PRODUCT,
    ...filterParams,
    ...(statuses.length && { statuses }),
  };

  const { filter } = ADMIN_URIS['product/assets'](filterProps);
  const { data: list, pagination } = await ADMIN_APIS['product/assets'].get(filterProps);

  return <ListClient key={filter} title="상품 목록" list={list} pagination={pagination} filterProps={filterProps} />;
};
export default ProductPage;
