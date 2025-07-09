'use client';

import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { InputAdornment, Stack } from '@mui/material';
import { DesignIcon, MenuItem } from '@/core/design-systems';
import { ProductRevisionStatus } from '@/core/shared/service/enum/product-revision-status';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import { KEYFIELD_OPTIONS, STATUSES_OPTIONS, VISIBILITY_OPTIONS } from '@/shared/atom-components/common/filter/controller/product-filter/product-filter.const';

interface ProductFilterProps {
  fieldKeys: Record<string, FieldPath<FieldValues>>;
}

const ProductFilter = (props: ProductFilterProps) => {
  const { fieldKeys } = props;
  const { control } = useFormContext();
  return (
    <Stack gap={2}>
      <Stack flexDirection="row" gap={2}>
        {/* 키필드 */}
        {fieldKeys.keyfield && (
          <ControlledTextField select name={fieldKeys.keyfield} control={control} hiddenLabel={true} sx={{ '&&&': { flex: '0 0 160px' } }} size="small">
            {KEYFIELD_OPTIONS.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
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
        {/* 상태 */}
        {fieldKeys.statuses && (
          <ControlledTextField
            select
            name={fieldKeys.statuses}
            control={control}
            hiddenLabel={true}
            slotProps={{
              input: { sx: { width: '100%' } },
              select: {
                displayEmpty: true,
                multiple: true,
                adornment: { startIcon: 'CheckboxOutline', selectedStartIcon: 'CheckboxFill' },
                renderValue(value: unknown) {
                  const revisionStatus = Object.values(ProductRevisionStatus);
                  const revisionValues = value as ProductRevisionStatus[];

                  if (revisionValues.length === 0 || revisionValues.length === revisionStatus.length) {
                    return '모든 상태';
                  }
                  return revisionValues.map((status) => STATUSES_OPTIONS.find((option) => option.value === status)?.label).join(',');
                },
              },
            }}
            sx={{ minWidth: '280px', maxWidth: '280px' }}
          >
            {STATUSES_OPTIONS.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
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
                  if (value === 'true') return '노출';
                  if (value === 'false') return '비노출';
                },
              },
            }}
            sx={{ minWidth: '280px', maxWidth: '280px' }}
          >
            {VISIBILITY_OPTIONS.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </ControlledTextField>
        )}
      </Stack>
    </Stack>
  );
};

export default ProductFilter;
