'use client';

import { Fragment, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { cloneDeep, differenceWith, isEqual } from 'lodash';
import { Paper } from '@mui/material';
import { Box, Button, DesignIcon, Stack, Typography } from '@/core/design-systems';
import { useSnackbar } from 'notistack';
import { EnumPromotionStatus } from '@/core/shared/service/admin/types/promotions';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { CustomNetworkError } from '@/core/utils/errors/custom-network-error';
import { normalizeToString } from '@/core/utils/helpers/text';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { ImageInput } from '@/core/shared/service/input/promotion-input/image-input';
import { PromotionItemOutput } from '@/core/shared/service/output/promotion-item-output';
import Loading from '@/core/shared/components/general/loading/loading';
import DialogAlert from '@/core/shared/components/overlay/dialog-alert/dialog-alert';
import SnackbarError from '@/core/shared/components/overlay/snackbar-error/snackbar-error';
import { FOOTER_BUTTON_PROPS } from '@/shared/business-components/promotions/promotions.const';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';
import { revalidatePromotion, revalidatePromotionItems } from '@/app/[lang]/promotions/[promotionId]/actions';

type FooterClientProps = {
  status: EnumPromotionStatus;
};

const FooterClient = (props: FooterClientProps) => {
  const { status } = props;

  const router = useRouter();
  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; promotionId: string }>();
  const formContext = useFormContext<FormValues>();

  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = async (data: FormValues) => {
    setIsLoading(true);
    const copyData = cloneDeep(data);
    const { products, ...promotionData } = copyData;

    promotionData.images = (promotionData?.images || []).map((image) => {
      const { file, ...rest } = image;
      const { id, uploaded } = file;
      return { ...rest, file: id ? { id, uploaded: null } : { id: null, uploaded } };
    });

    try {
      if (params.promotionId) {
        await ADMIN_APIS['promotions/:promotionId'].put(params.promotionId, promotionData);
        await revalidatePromotion(params.promotionId);
        enqueueSnackbar('기획전 저장 완료!', { variant: 'success', mode: 'dark' });
      } else {
        const { data: createResult } = await ADMIN_APIS['promotions'].post(promotionData);
        enqueueSnackbar('기획전 생성 완료!', { variant: 'success', mode: 'dark' });
        router.push(`/promotions/${createResult.id}`);
      }
    } catch (error) {
      if (error instanceof CustomNetworkError) {
        enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
      } else {
        enqueueSnackbar('기획전 저장 중 오류가 발생했습니다. 다시 시도해주세요.', { variant: 'error', mode: 'dark' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChangeStatus = async (status: 'publish' | 'unpublish' | 'resume' | 'suspend') => {
    if (!params.promotionId) return;
    const statusLabel = status === 'publish' ? '활성화' : status === 'unpublish' ? '비활성화' : status === 'resume' ? '재개' : '중지';
    setIsLoading(true);
    try {
      await ADMIN_APIS[`promotions/:promotionId/${status}`].patch(params.promotionId);
      enqueueSnackbar(`프로모션 ${statusLabel} 완료!`, { mode: 'dark', variant: 'success' });
      await revalidatePromotion(params.promotionId);
    } catch (error) {
      enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnDeletePromotion = async () => {
    if (!params.promotionId) return;
    setIsLoading(true);
    try {
      await ADMIN_APIS['promotions'].delete([params.promotionId]);
      enqueueSnackbar(`프로모션 삭제 완료!`, { mode: 'dark', variant: 'success' });
      router.push('/promotions');
    } catch (error) {
      enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderPromotionActions = () => {
    if (!params.promotionId || !status) {
      return [
        <Button {...FOOTER_BUTTON_PROPS} variant="contained" onClick={formContext.handleSubmit(handleOnSave)}>
          기획전 생성
        </Button>,
      ];
    }
    const result: React.ReactElement[] = [];

    if ([EnumPromotionStatus.DRAFT].includes(status)) {
      result.push(
        <Button {...FOOTER_BUTTON_PROPS} variant="outlined" color="augment/red/600" onClick={handleOnDeletePromotion}>
          삭제
        </Button>,
        <Button {...FOOTER_BUTTON_PROPS} variant="outlined" onClick={() => handleOnChangeStatus('publish')}>
          활성화
        </Button>,
      );
    } else if ([EnumPromotionStatus.READY].includes(status)) {
      result.push(
        <Button {...FOOTER_BUTTON_PROPS} variant="outlined" color="augment/red/600" onClick={() => handleOnChangeStatus('unpublish')}>
          해제
        </Button>,
      );
    } else if ([EnumPromotionStatus.RUNNING].includes(status)) {
      result.push(
        <Button {...FOOTER_BUTTON_PROPS} variant="outlined" color="augment/red/600" onClick={() => handleOnChangeStatus('suspend')}>
          종료
        </Button>,
      );
    }
    result.push(
      <Button {...FOOTER_BUTTON_PROPS} variant="contained" onClick={formContext.handleSubmit(handleOnSave)}>
        저장
      </Button>,
    );

    return result;
  };

  if ([EnumPromotionStatus.DONE].includes(status)) return null;

  return (
    <Box>
      {isLoading && <Loading isLoading={true} />}
      <Paper sx={{ position: 'fixed', bottom: '0', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1 }} elevation={16}>
        <Stack direction="row" justifyContent="flex-end" gap="15px" sx={{ background: 'white', width: '100%', p: '12px var(--layout-guard-workspace-content-side)' }}>
          <Stack direction="row" gap="10px" justifyContent="flex-end" alignItems="center" width="100%">
            {renderPromotionActions().map((item, index) => (
              <Fragment key={`footer-render-button-${index}`}>{item}</Fragment>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default FooterClient;
