'use client';

import { useRef, useState } from 'react';
import { ISODateString } from 'next-auth';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, DesignIcon, FormControlLabel, InputAdornment, Stack, Switch, TextField, Typography } from '@/core/design-systems';
import { useSnackbar } from 'notistack';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';
import { useStatusActions } from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.hook';
import SnackbarError from '@/core/shared/components/overlay/snackbar-error/snackbar-error';

type VisibleDialogClientProps = {
  visible: boolean;
  selectedIds: UUIDAsString[];
  onClose: () => void;
};

const VisibleDialogClient = (props: VisibleDialogClientProps) => {
  const { visible, selectedIds, onClose } = props;
  const router = useRouter();

  const { statusActions } = useStatusActions();
  const { enqueueSnackbar } = useSnackbar();

  const [isReservationExposure, setIsReservationExposure] = useState(false);
  const [exposedAt, setExposedAt] = useState<Nullable<ISODateString>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleOnVisibleChange = async () => {
    try {
      statusActions.setLoadingStatus(true);
      if (visible) {
        await ADMIN_APIS['products/expose'].post({ productIds: selectedIds, ...(exposedAt && { exposedAt }) });
      } else {
        await ADMIN_APIS['products/hide'].post({ productIds: selectedIds });
      }
      enqueueSnackbar(`${selectedIds.length}개 상품 ${visible ? '노출' : '비노출'} 완료!`, {
        variant: 'success',
        mode: 'dark',
      });
    } catch (error) {
      enqueueSnackbar(<SnackbarError error={error} />, { variant: 'error', mode: 'dark' });
    } finally {
      onClose();
      statusActions.setLoadingStatus(false);
      router.push('/product');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack p="24px" minWidth="368px">
        <Typography variant="body/body1" fontWeight={700}>
          {visible ? '상품 노출' : '상품 비노출'}
        </Typography>
        <Typography variant="body/body2" fontWeight={400} my="16px">
          선택된 {selectedIds.length}개의 상품을 {visible ? '노출' : '비노출'} 하시겠습니까?
        </Typography>
        {visible && (
          <Stack direction="column" gap="16px">
            <FormControlLabel
              control={<Switch name="isAdult" size="large" color="purple/600" onChange={() => setIsReservationExposure(!isReservationExposure)} />}
              label={
                <Typography variant="body/body5" color="gray/800">
                  예약 노출
                </Typography>
              }
            />
            {isReservationExposure && (
              <DateTimePicker
                ref={anchorRef}
                label={'노출 예약일'}
                value={null}
                format={'YYYY.MM.DD A HH:mm:ss'}
                onChange={(value) => setExposedAt(value ? (value || '').toISOString() : null)}
                minDateTime={dayjs()}
                shouldDisableDate={(date) => {
                  return date.isBefore(dayjs(), 'day');
                }}
                onOpen={() => setIsPikerOpen(true)}
                onClose={() => setIsPikerOpen(false)}
                slots={{ textField: TextField }}
                slotProps={{
                  popper: { anchorEl: anchorRef.current, open: isPikerOpen },
                  textField: {
                    size: 'small',
                    inputProps: { readOnly: true },
                    sx: { width: '100%' },
                    slotProps: {
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <DesignIcon variant="Calendar" />
                          </InputAdornment>
                        ),
                      },
                    },
                  },
                }}
              />
            )}
          </Stack>
        )}
        <Stack direction="row" spacing={1} mt="24px">
          <Button variant="outlined" color="augment/gray/800" size="extraLarge" fullWidth onClick={onClose}>
            돌아가기
          </Button>
          <Button variant="contained" color="augment/purple/600" size="extraLarge" fullWidth onClick={handleOnVisibleChange}>
            완료
          </Button>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default VisibleDialogClient;
