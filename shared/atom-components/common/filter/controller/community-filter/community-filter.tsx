'use client';

import { useRef, useState } from 'react';
import { FieldPath, FieldValues, useFormContext, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';
import { InputAdornment, Stack } from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DesignIcon, MenuItem, TextField } from '@/core/design-systems';
import { PostStatus } from '@/core/shared/service/enum/post-status';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import DateSelectPresetClient from '@/shared/atom-components/common/filter/common/date-select-preset.client';

interface CommunityFilterProps {
  fieldKeys: Record<string, FieldPath<FieldValues>>;
}

const CommunityFilter = (props: CommunityFilterProps) => {
  const { fieldKeys } = props;
  const { control, setValue } = useFormContext();
  const anchorRef = useRef(null);
  const dateSelectPresetClientRef = useRef<React.ComponentRef<typeof DateSelectPresetClient>>(null);
  const [isPikerOpen, setIsPikerOpen] = useState(false);
  const [watchedSince, watchedUntil] = useWatch<FieldValues>({ control, name: [fieldKeys.since, fieldKeys.until] });

  return (
    <Stack gap={2}>
      <Stack flexDirection="row" gap={2}>
        {/* 검색어 */}
        {fieldKeys.keyword && (
          <ControlledTextField
            size="small"
            name={fieldKeys.keyword}
            control={control}
            hiddenLabel={true}
            placeholder={'검색어를 입력해주세요'}
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
      </Stack>
      <Stack direction="row" gap={2}>
        {/* 노출 몰  */}
        {fieldKeys.region && (
          <ControlledTextField
            select
            name={fieldKeys.region}
            control={control}
            hiddenLabel={true}
            slotProps={{
              select: {
                displayEmpty: true,
              },
            }}
            sx={{ minWidth: '280px', maxWidth: '280px' }}
          >
            <MenuItem value={RegionCode.KR}>{RegionCode.KR}</MenuItem>
            <MenuItem value={RegionCode.US} disabled={true}>
              {RegionCode.US}
            </MenuItem>
            <MenuItem value={RegionCode.JP} disabled={true}>
              {RegionCode.JP}
            </MenuItem>
          </ControlledTextField>
        )}

        {/* 노출 여부 */}
        {fieldKeys.visible && (
          <ControlledTextField
            select
            name={fieldKeys.visible}
            control={control}
            hiddenLabel={true}
            slotProps={{
              select: {
                displayEmpty: true,
                renderValue(value: unknown) {
                  if (!value) return '전체';
                  if (value === PostStatus.PUBLISHED) return '노출';
                  if (value === PostStatus.BLOCKED) return '숨김';
                },
              },
            }}
            sx={{ minWidth: '280px', maxWidth: '280px' }}
          >
            <MenuItem value={undefined}> {'전체'}</MenuItem>
            <MenuItem value={PostStatus.PUBLISHED}>{'노출'}</MenuItem>
            <MenuItem value={PostStatus.BLOCKED}>{'숨김'}</MenuItem>
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

export default CommunityFilter;
