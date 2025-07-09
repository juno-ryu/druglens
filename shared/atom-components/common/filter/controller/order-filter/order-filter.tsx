'use client';

import { useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { get, has } from 'lodash';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import { OrderSearchOptions } from '@/core/shared/service/admin/types/orders';
import { PromotionStatus } from '@/core/shared/service/enum/promotion-status';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import { SEARCH_OPTIONS_FOR_ORDERS } from '@/shared/atom-components/common/filter/controller/order-filter/order-filter.const';

interface OrderFilterProps {
  fieldKeys: Record<string, FieldPath<FieldValues>>;
}

const OrderFilter = (props: OrderFilterProps) => {
  const { fieldKeys } = props;

  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);

  const { control, setValue } = useFormContext();
  const [watchedSince, watchedUntil] = useWatch<FieldValues>({ control, name: [fieldKeys.since, fieldKeys.until] });

  const SEARCH_OPTIONS = SEARCH_OPTIONS_FOR_ORDERS.filter(({ value }) => has(fieldKeys, value));
  const watchedSearchOptions = useWatch<FieldValues>({
    control: control,
    name: get(fieldKeys, 'searchOptions') ?? 'searchOptions',
  });
  return (
    <Stack gap={2}>
      {/* 타이틀 */}
      <Stack direction="row" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {has(fieldKeys, 'searchOptions') && (
          <ControlledTextField
            select={true}
            control={control}
            name={fieldKeys.searchOptions}
            label="검색옵션"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              flexGrow: '1',
              maxWidth: '240px',
            }}
            onChange={() => {
              SEARCH_OPTIONS.forEach(({ value }) => {
                value && setValue(value, '');
              });
            }}
          >
            {SEARCH_OPTIONS.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === OrderSearchOptions.EMAIL : has(fieldKeys, OrderSearchOptions.EMAIL)) && (
          <ControlledTextField
            type="search"
            control={control}
            name={get(fieldKeys, OrderSearchOptions.EMAIL) ?? OrderSearchOptions.EMAIL}
            placeholder="검색어를 입력해주세요"
            label="아이디(이메일)"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <DesignIcon variant={'Search'} color={'gray/500'} />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === OrderSearchOptions.ORDER_NO : has(fieldKeys, OrderSearchOptions.ORDER_NO)) && (
          <ControlledTextField
            type="search"
            control={control}
            name={get(fieldKeys, OrderSearchOptions.ORDER_NO) ?? OrderSearchOptions.ORDER_NO}
            placeholder="주문 번호를 입력해주세요"
            label="주문 번호"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <DesignIcon variant={'Search'} color={'gray/500'} />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      </Stack>

      <Stack direction="row" gap={2}>
        {/* 기간 */}
        {fieldKeys.since && fieldKeys.until && (
          <DateRangePicker
            ref={anchorRef}
            localeText={{ start: '시작일', end: '종료일' }}
            value={[watchedSince ? dayjs(watchedSince) : null, watchedUntil ? dayjs(watchedUntil) : null]}
            format={'YYYY.MM.DD'}
            onChange={([since, until]) => {
              dateSelectPresetClientRef.current?.reset();
              if (since) setValue(fieldKeys.since, since.toISOString());
              if (until) setValue(fieldKeys.until, until.toISOString());
            }}
            onOpen={() => setIsPikerOpen(true)}
            onClose={() => setIsPikerOpen(false)}
            slots={{ textField: TextField }}
            slotProps={{
              popper: { anchorEl: anchorRef.current, open: isPikerOpen },
              textField: {
                size: 'small',
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
        )}
      </Stack>
    </Stack>
  );
};

export default OrderFilter;
