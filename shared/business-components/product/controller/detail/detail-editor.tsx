import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { isEqual } from 'lodash';
import { Paper } from '@mui/material';
import { Alert, Button, DesignIcon, Stack, Typography } from '@/core/design-systems';
import { OutputData } from '@editorjs/editorjs';
import { useSnackbar } from 'notistack';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import useEditor from '@/core/shared/hooks/display/use-editor/use-editor';
import API_APIS from '@/core/shared/service/api/api.service';
import { useAlignSectionActions } from '@/shared/stores/product/use-align-section-controller/use-align-section-controller.hook';
import { useCurrentFormActions, useCurrentFormState, useOriginFormState, useStatusActions } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.hook';
import Editor from '@/core/shared/components/general/editor/editor';
import { LANGUAGE_LABLES } from '@/shared/business-components/product/product.const';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

type DetailEditorProps = {
  title: string;
  lang: EnumLanguageCode;
  isOrigin: boolean;
  isHeader?: boolean;
};
const initialToolsOptions = {
  header: true,
  paragraph: true,
  image: true,
  embed: true,
  checklist: true,
  link: true,
  underline: true,
  marker: true,
  list: true,
  table: true,
  delimiter: true,
  colorpicker: true,
};

const DetailEditor = (props: DetailEditorProps) => {
  const { lang, title, isHeader = false, isOrigin } = props;
  const { getValues, setValue } = useFormContext<ProductFormValues>();

  const { originFormState } = useOriginFormState();
  const { triggerSyncEditorState } = useCurrentFormState();
  const { triggerSyncActions } = useCurrentFormActions();
  const { alignSectionActions } = useAlignSectionActions();
  const { statusActions } = useStatusActions();
  const { enqueueSnackbar } = useSnackbar();

  const [isEqualOriginForm, setIsEqualOriginForm] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const holderId = useId();

  const initialOutput = useMemo(() => {
    const value = getValues(isHeader ? 'contentHead' : 'contentBody');

    if (!value) return {};
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }, []);

  const { containerRef, instanceRef, isLoading, editorId, onOverrideOutput } = useEditor({
    holder: `${holderId}-editor-holder`,
    enabled: true,
    ...(typeof initialOutput === 'object' ? { initialOutput } : { initialHtml: initialOutput }),
    tools: initialToolsOptions,
    onCommit: (output) => {
      const key = isHeader ? 'contentHead' : 'contentBody';
      setValue(key, JSON.stringify(output));
      if (isOrigin) {
        const originBlocks = JSON.stringify(JSON.parse(originFormState[key] || '')?.blocks);
        const watchBlocks = JSON.stringify(output?.blocks);
        setIsEqualOriginForm(isEqual(originBlocks, watchBlocks));
      }
    },
  });

  const handleOnTransition = async () => {
    statusActions.setLoadingStatus(true);
    try {
      const { contentHead, contentBody } = await triggerSyncActions.syncronize();
      const value = (isHeader ? contentHead : contentBody) || '';
      const translated = await API_APIS['deepl-translate'].post<OutputData>(value, lang, true);
      onOverrideOutput(translated);
      setValue(isHeader ? 'contentHead' : 'contentBody', JSON.stringify(translated));
    } catch (error) {
      console.error(error);
    } finally {
      enqueueSnackbar(`${LANGUAGE_LABLES[lang]} ${isHeader ? '상품 소개' : '상품 내용'} 번역이 완료 되었습니다.`, {
        mode: 'dark',
        variant: 'success',
      });
      statusActions.setLoadingStatus(false);
    }
  };

  useEffect(() => {
    if (isOrigin || !triggerSyncEditorState) return;
    const { contentHead, contentBody } = getValues();
    const value = isHeader ? contentHead : contentBody;
    if (!value) return;
    onOverrideOutput(JSON.parse(value));
  }, [triggerSyncEditorState]);

  useEffect(() => {
    alignSectionActions.registerRef(isHeader ? 'contentHead' : 'contentBody', contentRef);
  }, [isHeader]);

  return (
    <Stack
      direction="column"
      gap="20px"
      ref={contentRef}
      sx={(theme) => ({
        transition: 'all .3s',
        p: isOrigin && !isEqualOriginForm ? '20px' : '0px',
        boxShadow: isOrigin && !isEqualOriginForm ? `0 0 20px ${theme.palette['purple/600']}` : 'none',
      })}
    >
      <Stack direction="column" gap="8px">
        <Stack direction="row" gap="20px" justifyContent="flex-start" alignItems="center">
          <Typography variant="body/body3" fontWeight={700} color="gray/800">
            {title}
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
        {isHeader ? (
          <Stack direction="column" gap="8px">
            <Alert color="augment/cyan/500" icon={<DesignIcon variant="InformationOutline" />} sx={{ width: '100%' }} size="large">
              <Stack direction="column">
                <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
                  · 파트너 작가님의 소개와 함께, 상품에 대한 간략한 설명을 작성해 주세요.
                </Typography>
                <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
                  · 상품의 매력을 보기 쉽게 요약 해주신 뒤, 연계상품 (세트상품, 시리즈상품)이 있을 경우 목록을 작성해 주세요.
                </Typography>
              </Stack>
            </Alert>
          </Stack>
        ) : (
          <Stack direction="column" gap="8px">
            <Alert color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%', borderRadius: '8px' }} size="large">
              <Typography variant="body/body6" fontWeight={500} color="red/600">
                이미지 및 설명 중 하나라도 누락된 경우 상품이 반려될 수 있습니다.
              </Typography>
            </Alert>
            <Alert color="augment/cyan/500" icon={<DesignIcon variant="InformationOutline" />} sx={{ width: '100%' }} size="large">
              <Stack direction="column">
                <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
                  · 상품에 대한 자세한 내용과 이미지를 공유해주세요. 이미지와 설명이 풍부할수록 더 좋습니다.
                </Typography>
                <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
                  · 외부 사이트에서의 이미지 복사 붙여넣기는 불가하며, 이미지는 꼭 업로드해서 써주세요.
                </Typography>
                <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
                  · 보정 이미지, 무보정 이미지, 은선 이미지 다양한 이미지를 추가하고, 사용법 및 편의기능에 대한 설명을 상세히 작성해주세요.
                </Typography>
                <Typography variant="body/body6" color="cyan/600" fontWeight={500}>
                  · 동적 구성요소는 판매에 더욱 도움이 되며, 상품에 포함된 경우 동작에 대한 안내를 상세히 기술 해주세요.
                </Typography>
              </Stack>
            </Alert>
          </Stack>
        )}
      </Stack>

      <Paper elevation={1} sx={{ minHeight: isHeader ? '150px' : '300px', p: '20px', borderRadius: '8px' }}>
        <Editor ref={containerRef} editorId={editorId} instanceRef={instanceRef} isLoading={isLoading} />
      </Paper>
    </Stack>
  );
};

export default DetailEditor;
