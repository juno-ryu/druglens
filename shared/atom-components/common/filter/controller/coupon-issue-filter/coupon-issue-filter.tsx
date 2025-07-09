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
import { COUPON_STATUS_TEXT } from '@/shared/atom-components/common/filter/controller/coupon-issue-filter/coupon-issue-filter.const';

interface CouponIssueFilterProps {
  fieldKeys: Record<string, FieldPath<FieldValues>>;
}

const CouponIssueFilter = (props: CouponIssueFilterProps) => {
  const { fieldKeys } = props;
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      {fieldKeys.userEmail && (
        <ControlledTextField
          type={'search'}
          control={control}
          name={fieldKeys.userEmail}
          placeholder="유저 email로 검색할 수 있어요"
          hiddenLabel={true}
          slotProps={{
            input: {
              startAdornment: <DesignIcon variant={'Search'} color={'gray/500'} />,
            },
          }}
        />
      )}

      <Stack direction={'row'} gap={'12px'}>
        {fieldKeys.status && (
          <ControlledTextField
            select
            name={fieldKeys.status}
            control={control}
            hiddenLabel={true}
            size="large"
            slotProps={{
              input: { sx: { width: '100%' }, size: 'small' },
              select: {
                displayEmpty: true,
                renderValue(value: unknown) {
                  const couponStatus = value as CouponStatus;
                  const result = COUPON_STATUS_TEXT[couponStatus];
                  if (!couponStatus || !result) {
                    return '모든 상태';
                  }
                  return result;
                },
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
    </Stack>
  );
};

export default CouponIssueFilter;
