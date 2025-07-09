'use client';

import { Fragment, useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { has } from 'lodash';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import { BooleanAsString } from '@/core/utils/types/overridable/primitive';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import {
  HAS_IMAGE_OPTIONS_FOR_REVIEW,
  IS_BEST_OPTIONS_FOR_REVIEW,
  IS_VISIBLE_OPTIONS_FOR_REVIEW,
  SEARCH_OPTIONS_FOR_REVIEW,
} from '@/shared/atom-components/common/filter/controller/review-filter/review-filter.const';

interface ReviewFilterProps<TypeFilterForm extends FieldValues = FieldValues> {
  fieldKeys: Record<string, FieldPath<TypeFilterForm>>;
}

const ReviewFilter = (props: ReviewFilterProps) => {
  const { fieldKeys } = props;

  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);

  const formContext = useFormContext<FieldValues>();
  const [watchedSearchOptions, watchedSince, watchedUntil] = useWatch<FieldValues>({
    control: formContext.control,
    name: [fieldKeys.searchOptions, fieldKeys.since, fieldKeys.until],
  });

  return (
    <Stack gap={2}>
      <Stack direction={'row'} gap={'16px 12px'} sx={{ '&:empty': { display: 'none' } }}>
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
          >
            {SEARCH_OPTIONS_FOR_REVIEW.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {has(fieldKeys, 'keyword') && watchedSearchOptions && (
          <ControlledTextField
            type="search"
            control={formContext.control}
            name={fieldKeys.keyword}
            placeholder="검색어를 입력해주세요"
            label={'검색어'}
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
      <Stack direction={'row'} gap={'16px 12px'} sx={{ '&:empty': { display: 'none' } }}>
        {fieldKeys.hasImage && (
          <ControlledTextField
            select={true}
            name={fieldKeys.hasImage}
            control={formContext.control}
            label={'이미지 포함 여부'}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                renderValue: (values: unknown) => {
                  const selected = values as BooleanAsString;
                  const currentOptions = HAS_IMAGE_OPTIONS_FOR_REVIEW.map((item) => ({ ...item, selected: selected.includes(item.value) }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            sx={{
              flexGrow: '1',
              minWidth: '240px',
            }}
          >
            <MenuItem value="">전체</MenuItem>
            {HAS_IMAGE_OPTIONS_FOR_REVIEW.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.isVisible && (
          <ControlledTextField
            select={true}
            name={fieldKeys.isVisible}
            control={formContext.control}
            label={'리뷰 상태'}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                renderValue: (values: unknown) => {
                  const selected = values as BooleanAsString;
                  const currentOptions = IS_VISIBLE_OPTIONS_FOR_REVIEW.map((item) => ({ ...item, selected: selected.includes(item.value) }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            sx={{
              flexGrow: '1',
              minWidth: '240px',
            }}
          >
            <MenuItem value="">전체</MenuItem>
            {IS_VISIBLE_OPTIONS_FOR_REVIEW.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.isBest && (
          <ControlledTextField
            select={true}
            name={fieldKeys.isBest}
            control={formContext.control}
            label={'베스트 리뷰 여부'}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                renderValue: (values: unknown) => {
                  const selected = values as BooleanAsString;
                  const currentOptions = IS_BEST_OPTIONS_FOR_REVIEW.map((item) => ({ ...item, selected: selected.includes(item.value) }));
                  const selectedOptions = currentOptions.filter(({ selected }) => !!selected);
                  if (!selectedOptions.length) return '전체';
                  if (currentOptions.every((item) => item.selected)) return '전체';
                  return selectedOptions.map(({ label }) => label).join(',');
                },
              },
            }}
            sx={{
              flexGrow: '1',
              minWidth: '240px',
            }}
          >
            <MenuItem value="">전체</MenuItem>
            {IS_BEST_OPTIONS_FOR_REVIEW.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
      </Stack>

      <Stack direction={'row'} flexWrap={'wrap'} gap={'16px 12px'} sx={{ '&:empty': { display: 'none' } }}>
        {fieldKeys.since && fieldKeys.until && (
          <Fragment>
            <DateRangePicker
              ref={anchorRef}
              localeText={{ start: '시작일', end: '종료일' }}
              value={[watchedSince ? dayjs(watchedSince) : null, watchedUntil ? dayjs(watchedUntil) : null]}
              format={'YYYY.MM.DD'}
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
                        <InputAdornment position={'end'}>
                          <DesignIcon variant={'Calendar'} />
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

export default ReviewFilter;
