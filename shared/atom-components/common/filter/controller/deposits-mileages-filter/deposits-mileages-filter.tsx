'use client';

import { useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { WalletTransactionTypes } from '@/core/shared/service/enum/wallet-transaction-types';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import {
  CURRENCY_OPTIONS_FOR_DEPOSITS_MILEAGES,
  TYPE_OPTIONS_FOR_DEPOSITS_MILEAGES,
} from '@/shared/atom-components/common/filter/controller/deposits-mileages-filter/deposits-mileages-filter.const';

interface DepositsMileagesFilterProps {
  fieldKeys: Record<string, FieldPath<FieldValues>>;
}

const DepositsMileagesFilter = (props: DepositsMileagesFilterProps) => {
  const { fieldKeys } = props;
  const formContext = useFormContext();
  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);
  const [watchedSince, watchedUntil] = useWatch<FieldValues>({ control: formContext.control, name: [fieldKeys.since, fieldKeys.until] });

  return (
    <Stack gap={2}>
      {/* 타이틀 */}
      {fieldKeys.email && (
        <ControlledTextField
          name={fieldKeys.email}
          control={formContext.control}
          hiddenLabel={true}
          placeholder={'유저의 이메일을 입력해 주세요'}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position={'start'}>
                  <DesignIcon variant={'Search'} />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
      <Stack direction="row" flexWrap="wrap" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {/* 타입 */}
        {fieldKeys.type && (
          <ControlledTextField
            select
            label="유형"
            name={fieldKeys.type}
            control={formContext.control}
            size="large"
            slotProps={{
              input: { sx: { width: '100%' }, size: 'small' },
              select: {
                displayEmpty: true,
                renderValue(value: unknown) {
                  const typeValue = value as WalletTransactionTypes;
                  const result = TYPE_OPTIONS_FOR_DEPOSITS_MILEAGES.find((option) => option.value === typeValue)?.label;
                  if (!typeValue || !result) {
                    return '전체';
                  }
                  return result;
                },
              },
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{ minWidth: '280px', maxWidth: '280px' }}
          >
            <MenuItem value="">전체</MenuItem>
            {TYPE_OPTIONS_FOR_DEPOSITS_MILEAGES.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}

        {/* 몰 */}
        {fieldKeys.currency && (
          <ControlledTextField
            select
            name={fieldKeys.currency}
            control={formContext.control}
            label="이용몰"
            size="large"
            slotProps={{
              input: { sx: { width: '100%' }, size: 'small' },
              select: {
                displayEmpty: true,
                renderValue(value: unknown) {
                  const currencyValue = value as CurrencyCode;
                  const result = CURRENCY_OPTIONS_FOR_DEPOSITS_MILEAGES.find((option) => option.value === currencyValue)?.label;
                  if (!currencyValue || !result) {
                    return '전체';
                  }
                  return result;
                },
              },
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{ minWidth: '280px', maxWidth: '280px' }}
          >
            <MenuItem value="">전체</MenuItem>
            {CURRENCY_OPTIONS_FOR_DEPOSITS_MILEAGES.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {/* 기간 */}
        {fieldKeys.since && fieldKeys.until && (
          <>
            <DateRangePicker
              ref={anchorRef}
              localeText={{ start: '시작일', end: '종료일' }}
              value={[watchedSince ? dayjs(watchedSince) : null, watchedUntil ? dayjs(watchedUntil) : null]}
              format="YYYY.MM.DD"
              onChange={([since, until]) => {
                dateSelectPresetClientRef.current?.reset();
                if (since) formContext.setValue(fieldKeys.since, since.startOf('day').toISOString());
                if (until) formContext.setValue(fieldKeys.until, until.endOf('day').toISOString());
              }}
              onOpen={() => setIsPikerOpen(true)}
              onClose={() => setIsPikerOpen(false)}
              slots={{
                textField: TextField,
              }}
              slotProps={{
                fieldRoot: {
                  sx: {
                    flexGrow: '1',
                    minWidth: '240px',
                  },
                },
                popper: {
                  anchorEl: anchorRef.current,
                  open: isPikerOpen,
                },
                textField: {
                  size: 'small',
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
            <DateSelectPresetClient
              ref={dateSelectPresetClientRef}
              sx={{ width: '456px' }}
              setRange={([since, until]) => {
                formContext.setValue(fieldKeys.since, since?.startOf('day')?.toISOString());
                formContext.setValue(fieldKeys.until, until?.endOf('day')?.toISOString());
              }}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default DepositsMileagesFilter;
