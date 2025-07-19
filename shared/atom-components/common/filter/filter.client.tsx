'use client';

import React, { useMemo } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';

import { Box, Button, Divider, Stack, Typography } from '@/core/design-systems';
import { StackProps } from '@/core/design-systems/components/stack';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import LocalizedPrice from '@/core/utils/helpers/localized-price';
import { OverridableComponent } from '@/core/utils/types/overridable/component';

type FilterClientProps<FormValues extends FieldValues> = OverridableComponent<
  'form',
  StackProps & {
    total: number;
    from: 'examples';
    fieldKeys: Record<string, FieldPath<FormValues>>;
    onReset: () => void;
  }
>;

const FilterClient = <FormValues extends FieldValues>(props: FilterClientProps<FormValues>) => {
  const { total, from, fieldKeys, onReset, ...restProps } = props;

  const { params } = useDynamicRoute();
  const { lang } = params;
  const { price: displayPrice, unit } = LocalizedPrice({ lang });

  const fieldsetSummary = useMemo(() => {
    switch (from) {
      default:
        return { resultPrefix: '상품', resultSuffix: '개' };
    }
  }, [from]);

  return (
    <Stack gap={4} component="form" noValidate {...restProps}>
      <Stack gap={3}>
        <Stack gap={2}>
          <Stack flexDirection="row" justifyContent="center" gap={1}>
            {/* 초기화 및 서브밋 */}
            <Button variant="contained" size="large" color="augment/gray/200" sx={{ width: '100px' }} onClick={onReset}>
              초기화
            </Button>
            <Button type="submit" variant="contained" color="augment/gray/400" size="large" sx={{ width: '100px' }}>
              검색
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Divider />

      <Stack flexDirection="row" flexWrap="wrap" gap="12px">
        <Typography component={Stack} flex="1 1 0px" minWidth="max-content" direction="row" alignItems="center" variant={'body/body3'} fontWeight={500}>
          {fieldsetSummary.resultPrefix && <Box flex="none">{fieldsetSummary.resultPrefix}</Box>}
          <Box flex="none" color="primary/600" sx={{ '&:not(:first-child)': { paddingLeft: '4px' } }}>
            {displayPrice(total)}
          </Box>
          {fieldsetSummary.resultSuffix && <Box flex="none">{fieldsetSummary.resultSuffix}</Box>}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FilterClient;
