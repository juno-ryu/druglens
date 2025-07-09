'use client';

import { Fragment, useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { get, has } from 'lodash';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import { UsersSearchOptions } from '@/core/shared/service/admin/types/users';
import COUNTRIES from '@/core/utils/yup/data/countries';
import { CountryCode } from '@/core/shared/service/enum/country-code';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import { SEARCH_OPTIONS_FOR_USER } from '@/shared/atom-components/common/filter/controller/user-filter/user-filter.const';

interface UserFilterProps<TypeFilterForm extends FieldValues = FieldValues> {
  fieldKeys: Record<string, FieldPath<TypeFilterForm>>;
}

const UserFilter = (props: UserFilterProps) => {
  const { fieldKeys } = props;

  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);

  const SEARCH_OPTIONS = SEARCH_OPTIONS_FOR_USER.filter(({ value }) => has(fieldKeys, value));
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
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === UsersSearchOptions.EMAIL : has(fieldKeys, UsersSearchOptions.EMAIL)) && (
          <ControlledTextField
            type="search"
            control={formContext.control}
            name={get(fieldKeys, UsersSearchOptions.EMAIL) ?? UsersSearchOptions.EMAIL}
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
        {(has(fieldKeys, 'searchOptions') ? watchedSearchOptions === UsersSearchOptions.NAME : has(fieldKeys, UsersSearchOptions.NAME)) && (
          <ControlledTextField
            type="search"
            control={formContext.control}
            name={get(fieldKeys, UsersSearchOptions.NAME) ?? UsersSearchOptions.NAME}
            placeholder="검색어를 입력해주세요"
            label="이름"
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
        {fieldKeys.country && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.country}
            label="국적"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            <MenuItem value="">전체</MenuItem>
            {Object.values(CountryCode).map((countryCode) => (
              <MenuItem key={countryCode} value={countryCode}>
                {COUNTRIES[countryCode].name}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.marketings && (
          <ControlledTextField
            select={true}
            disabled={true}
            control={formContext.control}
            name={fieldKeys.marketings}
            label="마케팅 수신동의 (이메일)"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            <MenuItem value="">TODO</MenuItem>
          </ControlledTextField>
        )}
        {fieldKeys.marketings && (
          <ControlledTextField
            select={true}
            disabled={true}
            control={formContext.control}
            name={fieldKeys.marketings}
            label="마케팅 수신동의 (SMS)"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            // sx={{
            //   flexGrow: '1',
            //   minWidth: '240px',
            // }}
          >
            <MenuItem value="">TODO</MenuItem>
          </ControlledTextField>
        )}
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {fieldKeys.condition && (
          <ControlledTextField
            select={true}
            disabled={true}
            control={formContext.control}
            name={fieldKeys.condition}
            label="조회일 기준"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              flexGrow: '1',
              minWidth: '240px',
            }}
          >
            <MenuItem value="">TODO</MenuItem>
          </ControlledTextField>
        )}
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

export default UserFilter;
