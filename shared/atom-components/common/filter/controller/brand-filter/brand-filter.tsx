'use client';

import { Fragment, useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { get, has } from 'lodash';
import dayjs from 'dayjs';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, Typography } from '@/core/design-systems';
import { BrandsSearchOptions } from '@/core/shared/service/admin/types/brands';
import { BooleanAsString } from '@/core/utils/types/overridable/primitive';
import SETTLES from '@/core/utils/yup/data/settles';
import { BrandApprovalStatus } from '@/core/shared/service/enum/brand-approval-status';
import { BrandSettleApprovalStatus } from '@/core/shared/service/enum/brand-settle-approval-status';
import { BrandSettleTypes } from '@/core/shared/service/enum/brand-settle-types';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import {
  BRAND_STATUS_OPTIONS_FOR_BRAND,
  DOMESTIC_OPTIONS_FOR_BRAND,
  EXCLUSIVE_OPTIONS_FOR_BRAND,
  SEARCH_OPTIONS_FOR_BRAND,
  SETTLE_STATUS_OPTIONS_FOR_BRAND,
} from '@/shared/atom-components/common/filter/controller/brand-filter/brand-filter.const';

interface BrandFilterProps<TypeFilterForm extends FieldValues = FieldValues> {
  fieldKeys: Record<string, FieldPath<TypeFilterForm>>;
}

const BrandFilter = (props: BrandFilterProps) => {
  const { fieldKeys } = props;

  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);

  const SEARCH_OPTIONS = SEARCH_OPTIONS_FOR_BRAND.filter(({ value }) => has(fieldKeys, value));
  const formContext = useFormContext<FieldValues>();
  const watchedSearchOptions = useWatch<FieldValues>({
    control: formContext.control,
    name: get(fieldKeys, 'searchOptions') ?? 'searchOptions',
  });
  const [watchedSince, watchedUntil] = useWatch<FieldValues>({
    control: formContext.control,
    name: [fieldKeys.since, fieldKeys.until],
  });

  return (
    <Stack gap={2}>
      <Stack direction="row" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {has(fieldKeys, 'searchOptions') && (
          <ControlledTextField
            select={true}
            control={formContext.control}
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
                if (value) formContext.setValue(value, '');
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
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === BrandsSearchOptions.BRAND_CODE : has(fieldKeys, BrandsSearchOptions.BRAND_CODE)) && (
          <ControlledTextField
            type="search"
            control={formContext.control}
            name={get(fieldKeys, BrandsSearchOptions.BRAND_CODE) ?? BrandsSearchOptions.BRAND_CODE}
            placeholder="검색어를 입력해주세요"
            label="브랜드 코드"
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
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === BrandsSearchOptions.BRAND_NAME : has(fieldKeys, BrandsSearchOptions.BRAND_NAME)) && (
          <ControlledTextField
            type="search"
            control={formContext.control}
            name={get(fieldKeys, BrandsSearchOptions.BRAND_NAME) ?? BrandsSearchOptions.BRAND_NAME}
            placeholder="검색어를 입력해주세요"
            label="브랜드명"
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
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === BrandsSearchOptions.EMAIL : has(fieldKeys, BrandsSearchOptions.EMAIL)) && (
          <ControlledTextField
            type="search"
            control={formContext.control}
            name={get(fieldKeys, BrandsSearchOptions.EMAIL) ?? BrandsSearchOptions.EMAIL}
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
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === BrandsSearchOptions.NAME : has(fieldKeys, BrandsSearchOptions.NAME)) && (
          <ControlledTextField
            type="search"
            control={formContext.control}
            name={get(fieldKeys, BrandsSearchOptions.NAME) ?? BrandsSearchOptions.NAME}
            placeholder="검색어를 입력해주세요"
            label="이름/대표자"
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
      <Stack direction="row" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {fieldKeys.brandStatus && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.brandStatus}
            label="브랜드정보 승인상태"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                multiple: true,
                adornment: {
                  startIcon: 'CheckboxOutline',
                  selectedStartIcon: 'CheckboxFill',
                },
                renderValue: (values: unknown) => {
                  const selected = values as BrandApprovalStatus[];
                  const currentOptions = BRAND_STATUS_OPTIONS_FOR_BRAND.map((item) => ({ ...item, selected: selected.includes(item.value) }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            {BRAND_STATUS_OPTIONS_FOR_BRAND.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.settleStatus && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.settleStatus}
            label="정산정보 승인상태"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                multiple: true,
                adornment: {
                  startIcon: 'CheckboxOutline',
                  selectedStartIcon: 'CheckboxFill',
                },
                renderValue: (values: unknown) => {
                  const selected = values as BrandSettleApprovalStatus[];
                  const currentOptions = SETTLE_STATUS_OPTIONS_FOR_BRAND.map((item) => ({ ...item, selected: selected.includes(item.value) }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            {SETTLE_STATUS_OPTIONS_FOR_BRAND.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.settleType && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.settleType}
            label="과세 유형"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                multiple: false,
                adornment: {
                  startIcon: 'CheckboxOutline',
                  selectedStartIcon: 'CheckboxFill',
                },
                renderValue: (value: unknown) => {
                  const selected = value as BrandSettleTypes;
                  const currentOptions = [...SETTLES.entries()].map(([key, item]) => ({ ...item, selected: selected === key }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            {[...SETTLES.entries()].map(([key, item]) => (
              <MenuItem key={key} value={key}>
                {item.label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.isExclusive && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.isExclusive}
            label="독점 여부"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                renderValue: (values: unknown) => {
                  const selected = values as BooleanAsString;
                  const currentOptions = EXCLUSIVE_OPTIONS_FOR_BRAND.map((item) => ({ ...item, selected: selected.includes(item.value) }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            <MenuItem value="">전체</MenuItem>
            {EXCLUSIVE_OPTIONS_FOR_BRAND.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.isDomestic && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.isDomestic}
            label="국내/국외"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                renderValue: (values: unknown) => {
                  const selected = values as BooleanAsString;
                  const currentOptions = DOMESTIC_OPTIONS_FOR_BRAND.map((item) => ({ ...item, selected: selected.includes(item.value) }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            <MenuItem value="">전체</MenuItem>
            {DOMESTIC_OPTIONS_FOR_BRAND.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {fieldKeys.since && fieldKeys.until && (
          <Fragment>
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
          </Fragment>
        )}
      </Stack>
    </Stack>
  );
};

export default BrandFilter;
