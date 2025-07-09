'use client';

import { Fragment, useRef, useState } from 'react';
import { FieldPath, FieldValues, PathValue, useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import COUNTRIES from '@/core/utils/yup/data/countries';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import { CouponStatus } from '@/core/shared/service/enum/coupon-status';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { IssueType } from '@/core/shared/service/enum/issue-type';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import { COUPON_STATUS_TEXT, DISCOUNT_METHOD_TEXT, ISSUE_TYPE_TEXT } from '@/shared/atom-components/common/filter/controller/coupons-filter/coupons-filter.const';

interface CouponFilterProps {
  fieldKeys: Record<string, FieldPath<FieldValues>>;
}

const CouponFilter = (props: CouponFilterProps) => {
  const { fieldKeys } = props;
  const { control, setValue } = useFormContext();
  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);
  const [watchedSince, watchedUntil] = useWatch<FieldValues>({ control, name: [fieldKeys.since, fieldKeys.until] });
  return (
    <Stack gap={2}>
      {fieldKeys.text && (
        <ControlledTextField
          type={'search'}
          control={control}
          name={fieldKeys.text}
          placeholder="쿠폰명, 쿠폰 설명, 관리자로 검색할 수 있어요"
          hiddenLabel={true}
          slotProps={{
            input: {
              startAdornment: <DesignIcon variant={'Search'} color={'gray/500'} />,
            },
          }}
        />
      )}

      <Stack direction={'row'} gap={'12px'}>
        {fieldKeys.issueType && (
          <ControlledTextField select label="발급 방식" control={control} name={fieldKeys.issueType} sx={{ minWidth: '280px', maxWidth: '280px' }}>
            <MenuItem value={''}>전체</MenuItem>
            {Object.values(IssueType).map((issueType) => (
              <MenuItem key={issueType} value={issueType}>
                {ISSUE_TYPE_TEXT[issueType]}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.discountMethod && (
          <ControlledTextField select label="쿠폰 혜택" control={control} name={fieldKeys.discountMethod} sx={{ minWidth: '280px', maxWidth: '280px' }}>
            <MenuItem value={''}>전체</MenuItem>
            {Object.values(DiscountMethod).map((discountMethod) => (
              <MenuItem key={discountMethod} value={discountMethod}>
                {DISCOUNT_METHOD_TEXT[discountMethod]}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.status && (
          <ControlledTextField
            select
            label="상태"
            control={control}
            name={fieldKeys.status}
            slotProps={{
              select: {
                displayEmpty: true,
                multiple: true,
                adornment: { startIcon: 'CheckboxOutline', selectedStartIcon: 'CheckboxFill' },
                renderValue(value: unknown) {
                  const couponStatusValues = value as CouponStatus[];

                  if (couponStatusValues.length === 0 || couponStatusValues.length === Object.values(CouponStatus).length) {
                    return '모든 상태';
                  }
                  return couponStatusValues.map((v) => COUPON_STATUS_TEXT[v]).join(', ');
                },
              },
              inputLabel: {
                // 선택된 항목이 0개일 때 라벨이 텍스트 인풋쪽으로 가는 것을 방지합니다.
                shrink: true,
              },
            }}
            sx={{ minWidth: '280px', maxWidth: '280px' }}
          >
            {Object.values(CouponStatus).map((value) => (
              <MenuItem key={value} value={value}>
                {COUPON_STATUS_TEXT[value]}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
      </Stack>

      {fieldKeys.since && fieldKeys.until && (
        <Stack direction={'row'} gap={2}>
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
          <Stack direction={'row'} width={'456px'}>
            <DateSelectPresetClient
              ref={dateSelectPresetClientRef}
              setRange={([since, until]) => {
                setValue(fieldKeys.since, since?.toISOString());
                setValue(fieldKeys.until, until?.toISOString());
              }}
            />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default CouponFilter;
