'use client';

import { useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { has } from 'lodash';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import { PERIOD_OPTIONS_FOR_PROMOTION, STATUSES_OPTIONS_FOR_PROMOTION } from '@/shared/atom-components/common/filter/controller/promotions-filter/promotions-filter.const';

interface PromotionFilterProps {
  fieldKeys: Record<string, FieldPath<FieldValues>>;
}

const PromotionsFilter = (props: PromotionFilterProps) => {
  const { fieldKeys } = props;
  const formContext = useFormContext();
  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);
  const [watchedSince, watchedUntil] = useWatch<FieldValues>({ control: formContext.control, name: [fieldKeys.since, fieldKeys.until] });

  return (
    <Stack gap={2}>
      {/* 타이틀 */}
      {has(fieldKeys, 'title') && (
        <ControlledTextField
          name={fieldKeys.title}
          control={formContext.control}
          hiddenLabel={true}
          placeholder={'기획전명을 입력해 주세요'}
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
      <Stack direction="row" gap={2}>
        {/* 상태_프로모션 */}
        {has(fieldKeys, 'periodField') && (
          <ControlledTextField select name={fieldKeys.periodField} control={formContext.control} label="기준" size="small" sx={{ '&&&': { flex: '0 0 240px' } }}>
            {PERIOD_OPTIONS_FOR_PROMOTION.map(({ value, label }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {/* 기간 */}
        {has(fieldKeys, 'since') && has(fieldKeys, 'until') && (
          <DateRangePicker
            ref={anchorRef}
            localeText={{ start: '시작일', end: '종료일' }}
            value={[watchedSince ? dayjs(watchedSince) : null, watchedUntil ? dayjs(watchedUntil) : null]}
            format={'YYYY.MM.DD'}
            onChange={([since, until]) => {
              dateSelectPresetClientRef.current?.reset();
              if (since) formContext.setValue(fieldKeys.since, since.toISOString());
              if (until) formContext.setValue(fieldKeys.until, until.toISOString());
            }}
            onOpen={() => setIsPikerOpen(true)}
            onClose={() => setIsPikerOpen(false)}
            slots={{ textField: TextField }}
            slotProps={{
              popper: { anchorEl: anchorRef.current, open: isPikerOpen },
              textField: {
                size: 'small',
                sx: { flex: 1 },
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
        {/* 상태_프로모션 */}
        {has(fieldKeys, 'status') && (
          <ControlledTextField select name={fieldKeys.status} control={formContext.control} label="상태" size="small" sx={{ '&&&': { flex: '0 0 240px' } }}>
            {STATUSES_OPTIONS_FOR_PROMOTION.map(({ value, label }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
      </Stack>
    </Stack>
  );
};

export default PromotionsFilter;
