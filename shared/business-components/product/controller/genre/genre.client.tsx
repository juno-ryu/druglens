'use client';

import React, { useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { cloneDeep } from 'lodash';
import { MenuItem, Stack, TextField } from '@/core/design-systems';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import SectionTitleClient from '@/shared/business-components/product/layout/section-title.client';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

interface GenreClientProps extends React.HTMLAttributes<HTMLDivElement> {
  genre: CategoryNodeOutput[];
}

const GenreClient = (props: GenreClientProps) => {
  const { genre } = props;
  const { control, setValue } = useFormContext<ProductFormValues>();
  const categories = useWatch({ name: 'categories', control });
  const currentGenre = useMemo(() => categories.find((c) => !c.isMain), [categories]);

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient title="장르설정" description="적절하지 않은 장르가 선택된 경우, 검토 중 임의로 변경될 수 있습니다." />
      <TextField
        select
        variant="outlined"
        size="small"
        label="장르분류"
        // sx={{ width: '392px' }}
        value={currentGenre?.id || ''}
        onChange={(e) => {
          const selectedId = e.target.value;
          const updatedCategories = cloneDeep(categories).filter((c) => c.isMain);
          updatedCategories.push({ id: selectedId, isMain: false });
          setValue('categories', updatedCategories);
        }}
      >
        {genre.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};

export default GenreClient;
