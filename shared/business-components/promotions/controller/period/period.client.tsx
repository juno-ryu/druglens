'use client';

import React, { useMemo, useRef, useState } from 'react';
import { get, useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';
import { DateTimePicker, DateTimeRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, FormHelperText, InputAdornment, Stack, TextField, Typography } from '@/core/design-systems';
import { EnumPromotionStatus } from '@/core/shared/service/admin/types/promotions';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

type PeriodClientProps = {
  disabled: boolean;
  isEditable: boolean;
};
const PeriodClient = (props: PeriodClientProps) => {
  const { disabled, isEditable } = props;
  const formContext = useFormContext<FormValues>();
  const watchedSince = useWatch({ control: formContext.control, name: 'since' });
  const watchedUntil = useWatch({ control: formContext.control, name: 'until' });
  const [isPikerOpen, setIsPikerOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <Stack direction="column" gap="12px">
      <Typography variant="body/body5" color="gray/600" fontWeight={600}>
        진행 기간
      </Typography>

      {disabled && isEditable ? (
        <Stack direction="row" gap="40px">
          <DateTimePicker
            label="시작일"
            value={dayjs(watchedSince)}
            format={'YYYY.MM.DD hh:mm A'}
            disabled={true}
            slots={{ textField: TextField }}
            minDate={dayjs()}
            slotProps={{
              textField: {
                size: 'medium',
                sx: { width: 240 },
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
          <DateTimePicker
            ref={anchorRef}
            label="종료일"
            value={dayjs(watchedUntil)}
            format={'YYYY.MM.DD hh:mm A'}
            onChange={(until) => formContext.setValue('until', until?.toISOString() ?? null)}
            onOpen={() => setIsPikerOpen(true)}
            onClose={() => setIsPikerOpen(false)}
            slots={{ textField: TextField }}
            shouldDisableDate={(date) => {
              return watchedSince ? date.isBefore(dayjs(watchedSince)) : false;
            }}
            slotProps={{
              popper: { anchorEl: anchorRef.current, open: isPikerOpen },
              textField: {
                size: 'medium',
                sx: { width: 240 },
                error: !!get(formContext?.formState?.errors, 'until'),
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
        </Stack>
      ) : (
        <DateTimeRangePicker
          ref={anchorRef}
          localeText={{ start: '시작일', end: '종료일' }}
          value={[dayjs(watchedSince), dayjs(watchedUntil)]}
          format={'YYYY.MM.DD hh:mm A'}
          onChange={([since, until]) => {
            if (since) formContext.setValue('since', since.toISOString());
            if (until) formContext.setValue('until', until.toISOString());
          }}
          disabled={disabled}
          onOpen={() => setIsPikerOpen(true)}
          onClose={() => setIsPikerOpen(false)}
          slots={{ textField: TextField }}
          minDate={dayjs()}
          slotProps={{
            popper: { anchorEl: anchorRef.current, open: isPikerOpen },
            textField: {
              size: 'medium',
              sx: { width: 240 },
              error: !!get(formContext?.formState?.errors, 'since ') || !!get(formContext?.formState?.errors, 'until'),
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

      <Stack direction="row" gap="40px">
        <FormHelperText error={true} sx={{ width: 240 }}>
          {(get(formContext?.formState?.errors, 'since')?.message as string) ?? ''}
        </FormHelperText>
        <FormHelperText error={true} sx={{ width: 240 }}>
          {(get(formContext?.formState?.errors, 'until')?.message as string) ?? ''}
        </FormHelperText>
      </Stack>
    </Stack>
  );
};

export default PeriodClient;
