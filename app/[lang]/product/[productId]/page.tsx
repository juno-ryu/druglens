import React from 'react';
import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import { Stack } from '@/carpen-products/design-systems';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';
import COMMON_APIS from '@/carpen-products/shared/service/common/common.service';
import { LanguageCode } from '@/carpen-products/shared/service/enum/language-code';
import FormClient from '@/shared/business-components/product/controller/form.client';
import HeaderServer from '@/shared/business-components/product/layout/header.server';
import HistoryClient from '@/shared/business-components/product/layout/history.client';
import LoadingClient from '@/shared/business-components/product/layout/loading.client';
import { fetchProductData } from '@/app/[lang]/product/[productId]/actions';

interface ProductPageProps {
  params: Promise<{ lang: EnumLanguageCode; productId: string }>;
}

const SUPORTED_LANGUAGES = Object.values(LanguageCode); // [LanguageCode.KO, LanguageCode.EN];

const ProductDetailPage = async (props: ProductPageProps) => {
  const { params } = props;
  const { lang, productId } = await params;
  const key = dayjs().valueOf().toString();

  const { data: categoryGenre } = await COMMON_APIS['category'].get('product-genre');
  const { data: categoryProduct } = await COMMON_APIS['category'].get('product');

  const { data: applications } = await COMMON_APIS['applications'].get();
  const { data: extensions } = await COMMON_APIS['extensions'].get();

  const productData = await fetchProductData(productId);
  const product = productData?.data || undefined;

  const { data: assets } = await ADMIN_APIS['assets'].get((product?.assets || []).map((item) => item.id));

  const enabledGenre = categoryGenre.filter((item) => item.enabled);
  const enabledProduct = categoryProduct.filter((item) => item.enabled);
  const originalLang = product?.lang || lang;
  const sortedLanguages = SUPORTED_LANGUAGES.sort((a, b) => (a === originalLang ? -1 : b === originalLang ? 1 : 0));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Stack key={key} direction="column" gap="48px">
      <HeaderServer
        title={product.title}
        id={product.id}
        status={product.status}
        suspendedAt={product.suspendedAt}
        publishedAt={product.publishedAt}
        exposedAt={product.exposedAt}
        brand={product.brand}
      />
      <HistoryClient approvals={product.approvals || []} />
      <LoadingClient />
      <Stack direction="row" gap="20px">
        {sortedLanguages.map((code, index) => {
          return (
            <Paper key={code} elevation={4} sx={{ flex: 1, flexShrink: 0, p: '40px 20px', flexDirection: 'column', gap: '48px', display: 'flex' }}>
              <FormClient
                key={`product-detail-page-form-${code}`}
                isOrigin={originalLang === code}
                lang={code}
                product={product}
                assets={originalLang === code ? assets : []}
                enabledGenre={enabledGenre}
                enabledProduct={enabledProduct}
                applications={applications}
                extensions={extensions}
              />
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ProductDetailPage;
