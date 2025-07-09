'use client';

import React, { Fragment, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';
import { Button, InputAdornment, Stack, Typography } from '@/core/design-systems';
import { useSnackbar } from 'notistack';
import { CustomNetworkError } from '@/core/utils/errors/custom-network-error';
import useErrorAssist from '@/core/shared/hooks/display/use-error-assist/use-error-assist';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import Loading from '@/core/shared/components/general/loading/loading';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DialogAlert from '@/core/shared/components/overlay/dialog-alert/dialog-alert';
import SnackbarError from '@/core/shared/components/overlay/snackbar-error/snackbar-error';
import { DIALOG_SLUG_VERIFY, INVALID_HELPER_TEXT } from '@/shared/business-components/promotions/promotions.const';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

type SlugClientProps = {
  disabled: boolean;
};

const SlugClient = (props: SlugClientProps) => {
  const { disabled } = props;
  const formContext = useFormContext<FormValues>();
  const [watchedSlug, watchedSince, watchedUntil] = useWatch({ control: formContext.control, name: ['slug', 'since', 'until'] });
  const { enqueueSnackbar } = useSnackbar();
  const { onOpen, onClose } = useDialog();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnCheckSlug = async () => {
    if (!watchedSlug || !watchedSince || !watchedUntil) {
      enqueueSnackbar('기획전의 주소및 기간을 입력해 주세요.', { variant: 'warning', mode: 'dark' });
      return;
    }
    setIsLoading(true);

    try {
      const response = await ADMIN_APIS['promotion/common/slug-duplicate'].get({
        slug: watchedSlug,
        since: watchedSince,
        until: watchedUntil,
      });
      const isUsed = response.data.length > 0;

      if (isUsed) {
        onOpen({
          key: DIALOG_SLUG_VERIFY,
          onClose: () => onClose(DIALOG_SLUG_VERIFY),
          children: (
            <DialogAlert
              title="사용할 수 없는 주소입니다"
              content={
                <Stack>
                  <Typography variant="body/body5" fontWeight={400}>
                    해당 주소는 아래 기획전에서 사용 중입니다
                    <br />
                    진행 기간 또는 기획전 주소를 변경해 주세요
                  </Typography>
                  {response.data.map((promotion) => (
                    <Stack key={promotion.id} direction="column" gap="4px" mt="8px">
                      <Typography variant="body/body5" fontWeight={700} color="gray/800" mt="12px">
                        {promotion.title}
                      </Typography>
                      <Typography variant="body/body5" fontWeight={400} color="gray/800">
                        {dayjs(promotion.since).format('YYYY.MM.DD')} ~ {dayjs(promotion.until).format('YYYY.MM.DD')}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              }
              onSuccess={() => onClose(DIALOG_SLUG_VERIFY)}
            />
          ),
        });
        formContext.setError('slug', { type: 'manual', message: '이미 사용중인 기획전 주소입니다.' });
        return;
      }
      enqueueSnackbar('사용가능한 기획전 주소입니다.', { variant: 'success', mode: 'dark' });
    } catch (error) {
      if (error instanceof CustomNetworkError) {
        enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack direction="column" gap="12px">
      <Loading isLoading={isLoading} />
      <Typography variant="body/body5" color="gray/600" fontWeight={600}>
        기획전 주소
      </Typography>
      <Stack direction="row" gap="8px" justifyContent={'flex-start'} alignContent={'flex-start'}>
        <ControlledTextField
          name="slug"
          control={formContext.control}
          variant="outlined"
          size="medium"
          hiddenLabel
          placeholder="기획전이 노출될 주소(url)를 입력해 주세요 ex) openrun"
          disabled={disabled}
          slotProps={{
            htmlInput: {
              maxLength: 30,
            },
            input: {
              startAdornment: (
                <Typography variant="body/body3" fontWeight={400} color="gray/400" pr="5px" whiteSpace={'pre'}>
                  /promotion/
                </Typography>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="label/label1" fontWeight={400}>
                    {`${watchedSlug?.length || 0}/30`}
                  </Typography>
                </InputAdornment>
              ),
            },
          }}
          helperText={[...INVALID_HELPER_TEXT(formContext, 'slug')]}
        />
        <Button variant="outlined" size="extraLarge" sx={{ px: '22px', height: '56px' }} disabled={!watchedSlug || disabled} onClick={handleOnCheckSlug}>
          사용 가능 확인
        </Button>
      </Stack>
    </Stack>
  );
};

export default SlugClient;
