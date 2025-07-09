'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Stack, TextField, Typography } from '@/core/design-systems';
import { useSnackbar } from 'notistack';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import SnackbarError from '@/core/shared/components/overlay/snackbar-error/snackbar-error';
import { ChangeProductStatus } from '@/shared/business-components/product/product.type';
import { revalidateProductData } from '@/app/[lang]/product/[productId]/actions';

type ConditionalDialogClientProps = {
  type: ChangeProductStatus;
  onClose: () => void;
};

const ConditionalDialogClient = (props: ConditionalDialogClientProps) => {
  const { type, onClose } = props;
  const { enqueueSnackbar } = useSnackbar();

  const { params } = useDynamicRoute<{ lang: EnumLanguageCode; productId: string }>();
  const { productId } = params;

  const [message, setMessage] = useState('');

  const isIncludeMeassage =
    type === ChangeProductStatus.START_REVIEW ||
    type === ChangeProductStatus.REJECT_REVIEW ||
    type === ChangeProductStatus.DENIED_REVIEW ||
    type === ChangeProductStatus.APPROVE_REVIEW;

  const handleOnChangedMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleOnApproveReview = async () => {
    try {
      if (isIncludeMeassage) {
        await ADMIN_APIS[`product/assets/:assetProductId/${type}`].patch(productId, message);
      } else {
        await ADMIN_APIS[`product/assets/:assetProductId/${type}`].patch(productId);
      }
      await revalidateProductData(productId);
      enqueueSnackbar(`${type} 완료!`, { variant: 'success', mode: 'dark' });
    } catch (error) {
      enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
    } finally {
      onClose();
    }
  };

  return (
    <Stack p="24px" minWidth="368px">
      <Typography variant="body/body1" fontWeight={700}>
        {type}
      </Typography>
      <Typography variant="body/body2" fontWeight={400} my="16px">
        {type} 하시겠습니까?
      </Typography>

      {isIncludeMeassage && (
        <TextField variant="outlined" size="large" rows={3} multiline hiddenLabel placeholder="메시지를 입력 해주세요." value={message} onChange={handleOnChangedMessage} />
      )}
      <Stack direction="row" spacing={1} mt="24px">
        <Button variant="outlined" color="augment/gray/800" size="extraLarge" fullWidth onClick={onClose}>
          돌아가기
        </Button>
        <Button variant="contained" color="augment/purple/600" size="extraLarge" fullWidth onClick={handleOnApproveReview}>
          완료
        </Button>
      </Stack>
    </Stack>
  );
};

export default ConditionalDialogClient;
