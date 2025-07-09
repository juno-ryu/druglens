import React from 'react';
import { Paper } from '@mui/material';
import { Stack, Typography } from '@/carpen-products/design-systems';
import { normalizeToString } from '@/carpen-products/utils/helpers/text';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';
import COMMON_APIS from '@/carpen-products/shared/service/common/common.service';
import { LanguageCode } from '@/carpen-products/shared/service/enum/language-code';
import FormClient from '@/shared/business-components/product/controller/form.client';
import HeaderServer from '@/shared/business-components/product/layout/header.server';
import HistoryClient from '@/shared/business-components/product/layout/history.client';
import LoadingClient from '@/shared/business-components/product/layout/loading.client';

interface ProductPageProps {
  params: Promise<{ comparisonId: string | string[] }>;
}

const SUPORTED_LANGUAGES = Object.values(LanguageCode); // [LanguageCode.KO, LanguageCode.EN];

const ProductComparisonPage = async (props: ProductPageProps) => {
  const { params } = props;
  const { comparisonId } = await params;

  const { data: categoryGenre } = await COMMON_APIS['category'].get('product-genre');
  const { data: categoryProduct } = await COMMON_APIS['category'].get('product');

  const { data: applications } = await COMMON_APIS['applications'].get();
  const { data: extensions } = await COMMON_APIS['extensions'].get();
  const { data: product } = await ADMIN_APIS['product/assets/:assetProductId'].get(normalizeToString(comparisonId));
  const { data: prevProduct } = await ADMIN_APIS['product/assets/:assetProductId/prev'].get(normalizeToString(comparisonId));
  const { data: assets } = await ADMIN_APIS['assets'].get((product?.assets || []).map((item) => item.id));

  const enabledGenre = categoryGenre.filter((item) => item.enabled);
  const enabledProduct = categoryProduct.filter((item) => item.enabled);

  return (
    <Stack direction="column" gap="48px">
      <Stack direction="row" gap="8px">
        <Typography variant="title/title3" fontWeight={800}>
          버전 비교
        </Typography>
        <Typography variant="title/title3" fontWeight={800}>
          /
        </Typography>
        <Typography variant="title/title3" fontWeight={500} color="gray/500">
          {comparisonId}
        </Typography>
      </Stack>
      <HistoryClient approvals={product.approvals || []} />
      <Stack direction="row" gap="20px">
        <Paper elevation={4} sx={{ flex: 1, flexShrink: 0, p: '40px 20px', flexDirection: 'column', gap: '48px', display: 'flex', position: 'relative' }}>
          <FormClient
            isOrigin={true}
            isNew={false}
            lang={prevProduct.lang}
            product={prevProduct}
            assets={assets}
            enabledGenre={enabledGenre}
            enabledProduct={enabledProduct}
            applications={applications}
            extensions={extensions}
          />
        </Paper>
        <Paper elevation={4} sx={{ flex: 1, flexShrink: 0, p: '40px 20px', flexDirection: 'column', gap: '48px', display: 'flex', position: 'relative' }}>
          <FormClient
            isOrigin={true}
            isNew={true}
            lang={product.lang}
            product={product}
            assets={assets}
            enabledGenre={enabledGenre}
            enabledProduct={enabledProduct}
            applications={applications}
            extensions={extensions}
          />
        </Paper>
      </Stack>
    </Stack>
  );
};

export default ProductComparisonPage;
