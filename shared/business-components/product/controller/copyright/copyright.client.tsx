'use client';

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { isEqual } from 'lodash';
import { Alert, Button, DesignIcon, Divider, Stack, Typography } from '@/core/design-systems';
import * as deepl from 'deepl-node';
import { useSnackbar } from 'notistack';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import API_APIS from '@/core/shared/service/api/api.service';
import { HasRealLogo } from '@/core/shared/service/enum/has-real-logo';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { useAlignSectionActions } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.hook';
import { useCurrentFormActions, useOriginFormState, useStatusActions } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.hook';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import { LANGUAGE_LABLES } from '@/shared/business-components/product/product.const';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

type CopyrightClientProps = {
  lang: LanguageCode;
  isOrigin: boolean;
};
const CopyrightClient = (props: CopyrightClientProps) => {
  const { lang, isOrigin } = props;

  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; productId?: string; comparisonId?: string }>();
  const { comparisonId } = params;

  const { control, setValue } = useFormContext<ProductFormValues>();
  const { originFormState } = useOriginFormState();
  const { triggerSyncActions } = useCurrentFormActions();
  const { alignSectionActions } = useAlignSectionActions();
  const { statusActions } = useStatusActions();
  const { enqueueSnackbar } = useSnackbar();

  const [isEqualOriginForm, setIsEqualOriginForm] = useState(true);
  const copyrightRef = useRef<HTMLDivElement>(null);
  const copyright = useWatch({ control, name: 'copyright' });
  const getColorVariant = useCallback((condition: boolean) => (condition ? 'augment/purple/600' : 'augment/gray/800'), [copyright]);

  const handleOnTransition = async () => {
    statusActions.setLoadingStatus(true);
    const { copyright } = await triggerSyncActions.syncronize();
    const { warehouseSources, commercialSources } = copyright;

    const sourcesMap: { key: keyof Pick<ProductFormValues['copyright'], 'commercialSources' | 'warehouseSources'>; value: string }[] = [];
    if (warehouseSources) sourcesMap.push({ key: 'warehouseSources', value: warehouseSources });
    if (commercialSources) sourcesMap.push({ key: 'commercialSources', value: commercialSources });

    try {
      if (sourcesMap.length === 0) return;

      const translated = await API_APIS['deepl-translate'].post<deepl.TextResult[]>(
        sourcesMap.map((s) => s.value),
        lang,
        false,
      );
      translated.forEach((item, index) => {
        setValue(`copyright.${sourcesMap[index].key}`, item.text);
      });
    } catch (error) {
      console.error(error);
    } finally {
      enqueueSnackbar(`${LANGUAGE_LABLES[lang]} 저작권 번역이 완료 되었습니다.`, {
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

  useEffect(() => {
    alignSectionActions.registerRef('copyright', copyrightRef);
  }, []);

  useEffect(() => {
    if (!isOrigin || comparisonId) return;
    const origianl = originFormState?.copyright;
    const current = copyright;
    setIsEqualOriginForm(isEqual(origianl, current));
  }, [originFormState, copyright, isOrigin, comparisonId]);

  return (
    <Stack
      direction="column"
      gap="20px"
      ref={copyrightRef}
      sx={(theme) => ({
        transition: 'all .3s',
        p: isOrigin && !isEqualOriginForm ? '20px' : '0px',
        boxShadow: isOrigin && !isEqualOriginForm ? `0 0 20px ${theme.palette['purple/600']}` : 'none',
      })}
    >
      <Stack direction="column" gap="8px">
        <Stack direction="row" gap="20px" justifyContent="flex-start" alignItems="center">
          <Typography variant="body/body3" fontWeight={700} color="gray/800">
            저작권
          </Typography>
          {!isOrigin && (
            <Button variant="outlined" color="augment/purple/600" onClick={handleOnTransition}>
              번역
            </Button>
          )}
          {isOrigin && !isEqualOriginForm && (
            <Button variant="outlined" color="augment/purple/600">
              변경 감지 됨
            </Button>
          )}
        </Stack>
        <Alert key="red/500" color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%', borderRadius: '8px' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              1. 저작권 정보를 허위로 작성하여 발생하는 모든 상황에 대한 책임은 작성자인 파트너 작가에게 있습니다.
            </Typography>
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              2. 에이콘에서는 일괄적으로 저작권 정책을 안내하고 있으므로, 저작권 관련된 내용이 상품 상세 설명에 별도 기입되어있는 경우 반려될 수 있습니다.
            </Typography>
          </Stack>
        </Alert>
      </Stack>
      <Stack direction="column" py="8px">
        <Stack direction="column" gap="12px">
          <Typography
            variant="body/body5"
            fontWeight={500}
            color="gray/800"
            sx={{
              '& b': { fontWeight: 800 },
            }}
          >
            상품 내 소품,폰트, 텍스처, 이미지 등 <b>모든 요소를 직접 제작</b>하였으며, <b>실재하는 브랜드/사물/요소를 카피하거나 AI를 사용하지 않고 스스로 창작하였나요?</b>
          </Typography>
          <Stack direction="row" gap="8px">
            <Button
              variant="outlined"
              size="medium"
              color={getColorVariant(copyright.isOriginal)}
              sx={{ width: '86px' }}
              onClick={() => {
                setValue('copyright.isOriginal', true);
              }}
            >
              예
            </Button>
            <Button
              variant="outlined"
              size="medium"
              color={getColorVariant(!copyright.isOriginal)}
              sx={{ width: '86px' }}
              onClick={() => {
                setValue('copyright.isOriginal', false);
              }}
            >
              아니오
            </Button>
          </Stack>
        </Stack>
        {!copyright.isOriginal && (
          <Fragment>
            <Divider sx={{ my: '24px' }} />
            <Stack direction="column" gap="12px">
              <Typography variant="body/body5" fontWeight={500} color="gray/800">
                상품 내 3D 웨어하우스 소스를 사용하였나요?
              </Typography>
              <Stack direction="row" gap="8px">
                <Button
                  variant="outlined"
                  color={getColorVariant(copyright.warehouseSources !== null)}
                  size="medium"
                  sx={{ width: '86px' }}
                  onClick={() => {
                    setValue('copyright.warehouseSources', '');
                  }}
                >
                  예
                </Button>
                <Button
                  variant="outlined"
                  color={getColorVariant(copyright.warehouseSources === null)}
                  size="medium"
                  sx={{ width: '86px' }}
                  onClick={() => {
                    setValue('copyright.warehouseSources', null);
                  }}
                >
                  아니오
                </Button>
              </Stack>
            </Stack>
            {copyright.warehouseSources !== null && (
              <Stack direction="column" mt="24px" gap="12px">
                <Typography variant="body/body5" fontWeight={500} color="gray/800">
                  사용한 3D 웨어하우스 소스를 출처와 함께 자세하게 작성해주세요.
                </Typography>
                <ControlledTextField name="copyright.warehouseSources" control={control} variant="outlined" size="medium" hiddenLabel placeholder="예. 다수의 차량 중 트럭" />
                <Alert color="augment/yellow/500" icon={<DesignIcon variant="AlertOutline" />} sx={{ width: '100%', borderRadius: '8px' }} size="medium">
                  <Stack direction="column">
                    <Typography variant="body/body6" fontWeight={500} color="yellow/600">
                      3D웨어하우스 소스 관련 작성 내용이 올바르지 않아 발생하는 책임은 작성자에게 있습니다.
                    </Typography>
                  </Stack>
                </Alert>
              </Stack>
            )}
          </Fragment>
        )}
        {!copyright.isOriginal && (
          <Fragment>
            <Divider sx={{ my: '24px' }} />
            <Stack direction="column" gap="12px">
              <Typography variant="body/body5" fontWeight={500} color="gray/800">
                상품 내 상업적으로 이용가능한 다른 무료 혹은 유료 외부 소스를 사용하였나요?
              </Typography>
              <Stack direction="row" gap="8px">
                <Button
                  //
                  variant="outlined"
                  color={getColorVariant(copyright.commercialSources !== null)}
                  size="medium"
                  sx={{ width: '86px' }}
                  onClick={() => {
                    setValue('copyright.commercialSources', '');
                  }}
                >
                  예
                </Button>
                <Button
                  //
                  variant="outlined"
                  color={getColorVariant(copyright.commercialSources === null)}
                  size="medium"
                  sx={{ width: '86px' }}
                  onClick={() => {
                    setValue('copyright.commercialSources', null);
                  }}
                >
                  아니오
                </Button>
              </Stack>
            </Stack>
            {copyright.commercialSources !== null && (
              <Stack direction="column" mt="24px" gap="12px">
                <Typography variant="body/body5" fontWeight={500} color="gray/800">
                  사용한 외부소스를 출처와 함께 자세하게 작성해주세요.
                </Typography>
                <ControlledTextField
                  name="copyright.commercialSources"
                  control={control}
                  variant="outlined"
                  size="medium"
                  hiddenLabel
                  placeholder="예. 벽지 텍스처 (출처 : www.acon3d.com)"
                />
                <Alert color="augment/yellow/500" icon={<DesignIcon variant="AlertOutline" />} sx={{ width: '100%', borderRadius: '8px' }} size="medium">
                  <Stack direction="column">
                    <Typography variant="body/body6" fontWeight={500} color="yellow/600">
                      외부소스 사용 관련 작성 내용이 올바르지 않아 발생하는 책임은 작성자에게 있습니다.
                    </Typography>
                  </Stack>
                </Alert>
              </Stack>
            )}
          </Fragment>
        )}
        {!copyright.isOriginal && (
          <Fragment>
            <Divider sx={{ my: '24px' }} />
            <Stack direction="column" gap="12px">
              <Typography variant="body/body5" fontWeight={500} color="gray/800">
                상품 내 실존하는 로고·상표가 포함되어 있나요?
              </Typography>
              <Stack direction="row" gap="8px">
                <Button
                  variant="outlined"
                  color={getColorVariant(copyright.hasRealLogo === 'YES')}
                  size="medium"
                  sx={{ width: '86px' }}
                  onClick={() => {
                    setValue('copyright.hasRealLogo', HasRealLogo.YES);
                  }}
                >
                  예
                </Button>
                <Button
                  variant="outlined"
                  color={getColorVariant(copyright.hasRealLogo === HasRealLogo.MODIFIED)}
                  size="medium"
                  sx={{ width: '86px' }}
                  onClick={() => {
                    setValue('copyright.hasRealLogo', HasRealLogo.MODIFIED);
                  }}
                >
                  수정 후 사용
                </Button>
                <Button
                  variant="outlined"
                  color={getColorVariant(copyright.hasRealLogo === 'NO')}
                  size="medium"
                  sx={{ width: '86px' }}
                  onClick={() => {
                    setValue('copyright.hasRealLogo', HasRealLogo.NO);
                  }}
                >
                  아니오
                </Button>
              </Stack>
            </Stack>
          </Fragment>
        )}
      </Stack>
    </Stack>
  );
};

export default CopyrightClient;
