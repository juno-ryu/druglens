'use client';

import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { ISODateString } from 'next-auth';
import { Button, DesignLabel, Link, Stack, Typography } from '@/core/design-systems';
import { OutputData } from '@editorjs/editorjs';
import * as deepl from 'deepl-node';
import { useSnackbar } from 'notistack';
import { PutProductAssetsDetailInput } from '@/core/shared/service/admin/types/product';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import API_APIS from '@/core/shared/service/api/api.service';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import { useCurrentFormActions, useStatusActions } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.hook';
import { getRevisionStatusLabel, LANGUAGE_LABLES } from '@/shared/business-components/product/product.const';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

type FormTitleClientProps = {
  lang: LanguageCode;
  isOrigin: boolean;
  isNew?: boolean;
  version?: number;
  status: ProductRevisionStatus;
  suspendedAt: Nullable<ISODateString>;
  publishedAt: Nullable<ISODateString>;
  exposedAt: Nullable<ISODateString>;
};

const FormTitleClient = (props: FormTitleClientProps) => {
  const { lang, isOrigin, isNew, status, version, publishedAt, suspendedAt, exposedAt } = props;
  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; productId?: string; comparisonId?: string }>();
  const { productId, comparisonId } = params;
  const { setValue, handleSubmit } = useFormContext<ProductFormValues>();
  const { triggerSyncActions } = useCurrentFormActions();
  const { statusActions } = useStatusActions();
  const { enqueueSnackbar } = useSnackbar();

  const { color, label } = getRevisionStatusLabel(status, suspendedAt, exposedAt);

  const handleOnTransition = async () => {
    statusActions.setLoadingStatus(true);
    const { title, contentHead, contentBody, copyright } = await triggerSyncActions.syncronize();
    const { warehouseSources, commercialSources } = copyright;
    const promiseMap: { key: keyof Pick<ProductFormValues, 'title' | 'contentHead' | 'contentBody'>; value: string }[] = [];
    const sourcesMap: { key: keyof Pick<ProductFormValues['copyright'], 'commercialSources' | 'warehouseSources'>; value: string }[] = [];

    if (title) promiseMap.push({ key: 'title', value: title });
    if (contentHead) promiseMap.push({ key: 'contentHead', value: contentHead });
    if (contentBody) promiseMap.push({ key: 'contentBody', value: contentBody });
    if (warehouseSources) sourcesMap.push({ key: 'warehouseSources', value: warehouseSources });
    if (commercialSources) sourcesMap.push({ key: 'commercialSources', value: commercialSources });

    try {
      await Promise.all([
        ...promiseMap.map(async ({ key, value }) => {
          if (key === 'title') {
            const translated = await API_APIS['deepl-translate'].post<deepl.TextResult>(value, lang, false);
            setValue(key, translated.text);
          } else {
            const translated = await API_APIS['deepl-translate'].post<OutputData>(value, lang, true);
            setValue(key, JSON.stringify(translated));
          }
        }),
        ...sourcesMap.map(async ({ key, value }) => {
          const translated = await API_APIS['deepl-translate'].post<deepl.TextResult>(value, lang, false);
          setValue(`copyright.${key}`, translated.text);
        }),
      ]);
      const hasPromiseKey = promiseMap.some(({ key }) => key === 'contentHead' || key === 'contentBody');
      const hasSourceKey = sourcesMap.some(({ key }) => key === 'commercialSources' || key === 'warehouseSources');
      if (hasPromiseKey) triggerSyncActions.syncronizeEditor();
      if (hasSourceKey) {
        setValue('copyright.isOriginal', copyright.isOriginal);
        setValue('copyright.hasRealLogo', copyright.hasRealLogo);
        setValue('copyright.localizes', copyright.localizes);
      }
    } catch (error) {
      console.error(error);
    } finally {
      enqueueSnackbar(`${LANGUAGE_LABLES[lang]} 전체 번역이 완료 되었습니다.`, { mode: 'dark', variant: 'success' });
      statusActions.setLoadingStatus(false);
    }
  };

  const handleOnSubmit = async (data: ProductFormValues) => {
    statusActions.setLoadingStatus(true);
    if (!productId) return;
    try {
      const payload: PutProductAssetsDetailInput = data;

      if (isOrigin) {
        await ADMIN_APIS['product/assets/:assetProductId'].put(Array.isArray(productId) ? productId.join('') : productId, payload);
      } else {
        await ADMIN_APIS['product/assets/:assetProductId/localize'].patch(Array.isArray(productId) ? productId.join('') : productId, {
          lang,
          title: payload.title,
          contentHead: payload.contentHead,
          contentBody: payload.contentBody,
          copyright: payload.copyright,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      enqueueSnackbar(`${LANGUAGE_LABLES[lang]}(${isOrigin ? '원본' : '번역본'}) 저장이 완료 되었습니다.`, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        mode: 'dark',
        autoHideDuration: 3000,
        variant: 'success',
      });
      statusActions.setLoadingStatus(false);
    }
  };

  return (
    <Stack
      direction="row"
      gap="10px"
      justifyContent="space-between"
      alignItems="center"
      sx={(theme) => ({
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 2,
        p: '20px 10px',
        backgroundColor: theme.palette['white'],
        borderBottom: `1px solid ${theme.palette['gray/200']}`,
      })}
    >
      <Stack direction="row" gap="10px">
        {productId && (
          <Fragment>
            <Typography variant="title/title3" color="gray/800" fontWeight={500}>
              {LANGUAGE_LABLES[lang]}
            </Typography>
            {isOrigin && (
              <DesignLabel variant="outlined" color="augment/primary/600" fontWeight={500} sx={{ mr: 'auto' }}>
                원본
              </DesignLabel>
            )}
            <DesignLabel variant={isOrigin ? 'contained' : 'outlined'} color="augment/purple/600" fontWeight={500} sx={{ ml: 'auto' }}>
              {lang.toUpperCase()}
            </DesignLabel>
          </Fragment>
        )}
        {comparisonId && (
          <Fragment>
            <Typography variant="title/title3" color="gray/800" fontWeight={500}>
              {isNew ? '현재버전' : '이전버전'}
            </Typography>
            <DesignLabel variant={'filled'} color={color}>
              {label}
            </DesignLabel>
          </Fragment>
        )}
      </Stack>
      <Stack direction="row" gap="10px">
        {isOrigin && (version || 0) > 1 && productId && (
          <Button component={Link} href={`/${lang}/product/comparison/${productId}`} variant="outlined" color="augment/primary/600" size="large">
            버전 비교
          </Button>
        )}
        {(status === ProductRevisionStatus.IN_PROGRESS || status === ProductRevisionStatus.APPROVE || suspendedAt) && productId && (
          <Fragment>
            {!isOrigin && (
              <Button variant="outlined" color="augment/purple/600" size="large" onClick={handleOnTransition}>
                전체 번역
              </Button>
            )}
            <Button
              variant="contained"
              color="augment/purple/600"
              size="large"
              sx={{ px: '16px', whiteSpace: 'pre' }}
              onClick={handleSubmit(handleOnSubmit, (err, data) => {
                console.log(err, data);
              })}
            >
              저장
            </Button>
          </Fragment>
        )}
      </Stack>
    </Stack>
  );
};

export default FormTitleClient;
