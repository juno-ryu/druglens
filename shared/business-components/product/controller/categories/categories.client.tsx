'use client';

import React, { useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { cloneDeep } from 'lodash';
import { MenuItem, Stack, TextField } from '@/core/design-systems';
import { ProductCategoryInput } from '@/core/shared/service/input/product-input/product-category-input';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import SectionTitleClient from '@/shared/business-components/product/layout/section-title.client';
import { findCurrentTree, findParentIds } from '@/shared/business-components/product/product.const';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

interface CategoriesClientProps extends React.HTMLAttributes<HTMLDivElement> {
  product: CategoryNodeOutput[];
}

const CategoriesClient = (props: CategoriesClientProps) => {
  const { product } = props;
  const { control, setValue } = useFormContext<ProductFormValues>();
  const categories = useWatch({ name: 'categories', control });

  const currentProducts = useMemo(() => categories.find((c) => c.isMain), [categories]);
  const parentProducts = useMemo(() => findParentIds(product, currentProducts?.id) || [], [currentProducts]);
  const tree = useMemo(() => findCurrentTree(product, currentProducts?.id), [parentProducts]);

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient title="카테고리 설정" description="적절하지 않은 카테고리가 선택된 경우, 검토 중 임의로 변경될 수 있습니다." />
      <Stack direction="row" gap="12px" flexWrap="wrap">
        {parentProducts.map((id, index) => {
          const currentCategoryNode = (index === 0 ? product : findCurrentTree(product, parentProducts[index - 1])?.children) || [];

          return (
            <TextField
              key={id}
              select
              variant="outlined"
              size="small"
              value={id}
              label={`${index + 1}차 분류`}
              // sx={{ width: '392px' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const selectedId = e.target.value;
                const updatedCategories = cloneDeep(categories).filter((c) => !c.isMain);
                updatedCategories.push({ id: selectedId, isMain: true });
                setValue('categories', updatedCategories);
              }}
            >
              {currentCategoryNode.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          );
        })}

        {/* 선택된 카테고리가 없거나 현재 추가된 카데고리에 children이 존재해서 추가 선택 박스가 필요할 때 */}
        {(!parentProducts.length || tree?.children) && (
          <TextField
            select
            variant="outlined"
            size="small"
            value={false}
            label={`${parentProducts.length + 1}차 분류`}
            sx={{ width: '392px' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const selectedId = e.target.value;
              const updatedCategories = cloneDeep(categories).filter((c) => !c.isMain);
              updatedCategories.push({ id: selectedId, isMain: true });
              setValue('categories', updatedCategories);
            }}
          >
            {(tree?.children || product).map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
        )}
      </Stack>
    </Stack>
  );
};

export default CategoriesClient;
