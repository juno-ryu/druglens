'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { isEqual } from 'lodash';
import { Button, InputAdornment, Stack, Typography } from '@/core/design-systems';
import * as deepl from 'deepl-node';
import { useSnackbar } from 'notistack';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import API_APIS from '@/core/shared/service/api/api.service';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { useAlignSectionActions } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.hook';
import { useCurrentFormActions, useOriginFormState, useStatusActions } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.hook';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import { LANGUAGE_LABLES } from '@/shared/business-components/product/product.const';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

interface TitleClientProps extends React.HTMLAttributes<HTMLDivElement> {
  lang: LanguageCode;
  isOrigin: boolean;
}

const TitleClient = (props: TitleClientProps) => {
  const { lang, isOrigin } = props;
  const { setValue, control } = useFormContext<ProductFormValues>();

  const { originFormState } = useOriginFormState();
  const { triggerSyncActions } = useCurrentFormActions();
  const { alignSectionActions } = useAlignSectionActions();
  const { statusActions } = useStatusActions();
  const { enqueueSnackbar } = useSnackbar();

  const [isEqualOriginForm, setIsEqualOriginForm] = useState(true);

  const titleRef = useRef<HTMLDivElement>(null);
  const title = useWatch({ control, name: 'title' });

  const handleOnTransition = async () => {
    statusActions.setLoadingStatus(true);
    try {
      const { title } = await triggerSyncActions.syncronize();
      const { text } = await API_APIS['deepl-translate'].post<deepl.TextResult>(title, lang, false);
      setValue('title', text);
    } catch (error) {
      console.error('오류 발생:', error);
    } finally {
      enqueueSnackbar(`${LANGUAGE_LABLES[lang]} 상품 제목 번역이 완료 되었습니다.`, {
        mode: 'dark',
        variant: 'success',
      });
      statusActions.setLoadingStatus(false);
    }
  };

  const handleOnDiffOriginal = () => {
    if (isOrigin) setIsEqualOriginForm(isEqual(title, originFormState?.title));
  };

  useEffect(() => {
    alignSectionActions.registerRef('title', titleRef);
  }, []);

  return (
    <Stack
      direction="column"
      gap="20px"
      ref={titleRef}
      sx={(theme) => ({
        transition: 'all .3s',
        p: isOrigin && !isEqualOriginForm ? '20px' : '0px',
        boxShadow: isOrigin && !isEqualOriginForm ? `0 0 20px ${theme.palette['purple/600']}` : 'none',
      })}
    >
      <Stack direction="column" gap="8px">
        <Stack direction="row" gap="20px" justifyContent="flex-start" alignItems="center">
          <Typography variant="body/body3" fontWeight={700} color="gray/800">
            상품 제목
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
        <Typography variant="body/body5" fontWeight={500} color="gray/600">
          제목은 상품을 잘 드러낼 수 있도록, 핵심 요소를 모두 포함하여 간결하게 작성해 주세요.
        </Typography>
      </Stack>
      <ControlledTextField
        name="title"
        control={control}
        variant="outlined"
        size="medium"
        hiddenLabel
        onBlur={handleOnDiffOriginal}
        placeholder="제목을 입력해 주세요"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="body/body5" fontWeight={500}>
                  {`${title?.length || 0}/50`}
                </Typography>
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
};

export default TitleClient;
