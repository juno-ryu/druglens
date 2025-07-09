'use client';

import React, { Fragment, useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { cloneDeep, groupBy, keyBy, mapValues, sortBy } from 'lodash';
import { Box, Stack } from '@/core/design-systems';
import { yupResolver } from '@hookform/resolvers/yup';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { AssetOutput } from '@/core/shared/service/output/asset-output';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';
import { useCurrentFormActions, useCurrentFormState, useOriginFormActions } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.hook';
import { LICENSE_OPTIONS } from '@/shared/business-components/orders/order.const';
import AdultClient from '@/shared/business-components/product/controller/adult/adult.client';
import AssetsClient from '@/shared/business-components/product/controller/assets/assets.client';
import CategoriesClient from '@/shared/business-components/product/controller/categories/categories.client';
import CopyrightClient from '@/shared/business-components/product/controller/copyright/copyright.client';
import DetailClient from '@/shared/business-components/product/controller/detail/detail.client';
import GenreClient from '@/shared/business-components/product/controller/genre/genre.client';
import ImagesClient from '@/shared/business-components/product/controller/images/images.client';
import LicensesClient from '@/shared/business-components/product/controller/licenses/licenses.client';
import StocksClient from '@/shared/business-components/product/controller/stocks/stocks.client';
import TagsClient from '@/shared/business-components/product/controller/tags/tags.client';
import TitleClient from '@/shared/business-components/product/controller/title/title.client';
import FooterClient from '@/shared/business-components/product/layout/footer.client';
import FormTitleClient from '@/shared/business-components/product/layout/form-title.client';
import { VALIDATION_SCHEMA_ORIGINAL, VALIDATION_SCHEMA_TRANSLATION } from '@/shared/business-components/product/product.const';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

type FormClientProps = {
  isOrigin: boolean;
  isNew?: boolean;
  lang: LanguageCode;
  enabledGenre: CategoryNodeOutput[];
  enabledProduct: CategoryNodeOutput[];
  applications: ApplicationOutput[];
  extensions: ExtensionOutput[];
  product: AssetProductOutput;
  assets: AssetOutput[];
};

const FormClient = (props: FormClientProps) => {
  const { isOrigin, isNew, lang, product, assets: assetsDetail, enabledGenre, enabledProduct, applications, extensions } = props;

  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; productId?: string; comparisonId?: string }>();
  const { productId, comparisonId } = params;

  const { triggerSyncState } = useCurrentFormState();
  const { currentFormActions } = useCurrentFormActions();
  const { updateOriginForm } = useOriginFormActions();

  const formSchema = useMemo(() => (isOrigin ? VALIDATION_SCHEMA_ORIGINAL : VALIDATION_SCHEMA_TRANSLATION), [isOrigin]);
  const formValues = useMemo(() => {
    const { title, contentBody, contentHead, copyright, regions, brand, price, isAdult, licenses, tags, images, nodes, assets, stocks, localizes } = product;

    const localizedfields = mapValues(groupBy(localizes ?? [], 'lang'), (items) => mapValues(keyBy(items, 'key'), 'text'));
    const localizedCopyright = mapValues(groupBy(copyright?.localizes ?? [], 'lang'), (items) => mapValues(keyBy(items, 'key'), 'text'));

    const payloadTitle = isOrigin ? title : localizedfields[lang]?.title;
    const payloadContentHead = (isOrigin ? contentHead : localizedfields[lang]?.contentHead) ?? undefined;
    const payloadContentBody = (isOrigin ? contentBody : localizedfields[lang]?.contentBody) ?? undefined;
    const payloadCopyright = {
      isOriginal: copyright?.isOriginal,
      hasRealLogo: copyright?.hasRealLogo,
      warehouseSources: isOrigin ? (copyright?.warehouseSources ?? null) : (localizedCopyright[lang]?.warehouseSources ?? null),
      commercialSources: isOrigin ? (copyright?.commercialSources ?? null) : (localizedCopyright[lang]?.commercialSources ?? null),
      localizes: copyright?.localizes || [],
    };

    const payloadBrandId = brand?.id;
    const payloadTags = tags?.map((tag) => tag.id);
    const payloadCategories = nodes?.map((node) => ({ id: node.id, isMain: node.isMain }));
    const payloadAssets = assets?.map((asset) => ({ id: asset.id, price: asset.price }));
    const payloadStocks = stocks?.map((stock) => ({ ...stock, assetIds: stock.assets.map((asset) => asset.id) }));
    const sortedLicenses = sortBy(licenses || [], (item) => LICENSE_OPTIONS.findIndex((option) => option.value === item.license));

    const baseValues = {
      title: payloadTitle,
      contentHead: payloadContentHead,
      contentBody: payloadContentBody,
      copyright: payloadCopyright,
    };

    if (!isOrigin) return baseValues;
    const fullValues = {
      ...baseValues,
      price,
      regions,
      brandId: payloadBrandId,
      isAdult,
      images: images,
      stocks: payloadStocks,
      licenses: sortedLicenses,
      tags: payloadTags,
      categories: payloadCategories,
      assets: payloadAssets,
    };
    return fullValues;
  }, [isOrigin, lang, product]);

  const methods = useForm<ProductFormValues>({
    defaultValues: formValues,
    resolver: yupResolver(formSchema) as any,
    mode: 'onChange',
  });

  useEffect(() => {
    // sync current form
    if (!isOrigin || !triggerSyncState) return;
    const { title, contentHead, contentBody, copyright } = methods.getValues();
    if (!title || !contentHead || !contentBody || !copyright) return;

    currentFormActions.updateCurrentForm({ title, contentHead, contentBody, copyright });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOrigin, product, triggerSyncState]);

  useEffect(() => {
    // sync origin form
    if (!isOrigin || comparisonId) return;
    const originalFormState = cloneDeep(methods.getValues());
    updateOriginForm(originalFormState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOrigin, product]);

  return (
    <FormProvider {...methods}>
      {comparisonId && <Box sx={{ position: 'absolute', background: 'rgba(255,255,255,0.3)', top: 0, bottom: 0, left: 0, right: 0, zIndex: 2 }} />}
      <FormTitleClient
        isOrigin={isOrigin}
        isNew={isNew}
        lang={lang}
        status={product.status}
        version={product?.version}
        publishedAt={product?.publishedAt || null}
        exposedAt={product?.publishedAt || null}
        suspendedAt={product?.suspendedAt || null}
      />
      <TitleClient isOrigin={isOrigin} lang={lang} />
      <DetailClient isOrigin={isOrigin} lang={lang} />
      <CopyrightClient isOrigin={isOrigin} lang={lang} />

      {isOrigin && (
        <Fragment>
          <GenreClient genre={enabledGenre} />
          <CategoriesClient product={enabledProduct} />
          <TagsClient initialTags={product?.tags ?? []} />
          <AdultClient />
          <AssetsClient
            applications={applications}
            extensions={extensions}
            productApplications={product?.applications || []}
            productExtensions={product?.extensions || []}
            assetsDetail={assetsDetail ?? []}
          />
          <LicensesClient />
          <StocksClient />
          <ImagesClient images={product.images || []} />
          {<FooterClient status={product.status} version={product.version} suspendedAt={product.suspendedAt} />}
        </Fragment>
      )}
    </FormProvider>
  );
};

export default FormClient;
