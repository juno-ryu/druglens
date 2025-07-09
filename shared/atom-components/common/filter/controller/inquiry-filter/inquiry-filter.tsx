'use client';

import { Fragment, useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import { get } from 'lodash';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import useFetch from '@/core/shared/hooks/data/use-fetch/use-fetch';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import { CsStatus } from '@/core/shared/service/enum/cs-status';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';
import { getStatusLabel } from '@/shared/business-components/cs/cs.const';

interface InquiryFilterProps<TypeFilterForm extends FieldValues = FieldValues> {
  fieldKeys: Record<string, FieldPath<TypeFilterForm>>;
}

const InquiryFilter = (props: InquiryFilterProps) => {
  const { fieldKeys } = props;

  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);

  const formContext = useFormContext<FieldValues>();
  const [watchedSince, watchedUntil] = useWatch<FieldValues>({
    control: formContext.control,
    name: [fieldKeys.since, fieldKeys.until],
  });

  const { data, isLoading, error } = useFetch(COMMON_APIS['category'].get, {
    params: 'cs',
    enabled: !!fieldKeys.category,
  });

  return (
    <Stack gap={2}>
      <Stack direction="row" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        <ControlledTextField
          type="search"
          control={formContext.control}
          name={get(fieldKeys, 'keyword') ?? 'keyword'}
          placeholder="문의 내용 검색"
          hiddenLabel={true}
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
      </Stack>
      <Stack direction="row" gap="16px 12px" sx={{ '&:empty': { display: 'none' } }}>
        {fieldKeys.category && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.category}
            disabled={isLoading || !!error || !data?.data}
            label="문의 유형"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                renderValue(value: unknown) {
                  if (!value) return '전체';
                  return data?.data?.find(({ id }) => id === value)?.name ?? '';
                },
              },
            }}
            sx={{
              flexGrow: '1',
              minWidth: '240px',
            }}
          >
            <MenuItem key="all" value="">
              전체
            </MenuItem>
            {data?.data?.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
        {fieldKeys.status && (
          <ControlledTextField
            select={true}
            control={formContext.control}
            name={fieldKeys.status}
            label="답변 상태"
            // hiddenLabel={true}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              select: {
                displayEmpty: true,
                renderValue(value: unknown) {
                  if (!value) return '전체';
                  return getStatusLabel(value as CsStatus).label;
                },
              },
            }}
            sx={{
              flexGrow: '1',
              minWidth: '240px',
            }}
          >
            <MenuItem key="all" value="">
              전체
            </MenuItem>
            {Object.values(CsStatus).map((status) => (
              <MenuItem key={status} value={status}>
                {getStatusLabel(status).label}
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

export default InquiryFilter;
