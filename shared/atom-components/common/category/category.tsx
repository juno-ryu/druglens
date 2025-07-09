'use client';

import { useEffect, useMemo, useState } from 'react';
import { Theme } from '@mui/material';
import { Box, Skeleton, Typography } from '@/core/design-systems';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { useTranslation } from '@/core/utils/i18next/i18next.client';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import useMounted from '@/core/shared/hooks/effect/use-mounted/use-mounted';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { findCategoryBlock } from '@/shared/atom-components/common/category/category.const';
import { CategoryContainer } from '@/shared/atom-components/common/category/category.style';
import { CategoryProps } from '@/shared/atom-components/common/category/category.type';
import CategoryFirstLevel from '@/shared/atom-components/common/category/first-level/first-level';
import CategorySecondLevel from '@/shared/atom-components/common/category/second-level/second-level';
import CategoryThirdLevel from '@/shared/atom-components/common/category/third-level/third-level';

const Category = <C extends React.ElementType>(props: CategoryProps<C>) => {
  const { component, isSingle = false, isDrawer = false, category, headlineStyle, className = '', toggleDrawer, ...restProps } = props;
  const { data: categoryData = [] } = category;

  const { isMounted } = useMounted();
  const { params, dynamicRoute } = useDynamicRoute<{ lang: EnumLanguageCode }>();
  const { lang } = params;

  const { t: repairTrans } = useTranslation(lang, '');
  const [active, setActive] = useState<Nullable<CategoryNodeOutput>>(null);
  const activeItem =
    findCategoryBlock(categoryData ?? [], dynamicRoute.replace(':lang', '')) ?? // default
    categoryData?.[0] ?? // fallback
    null;

  useEffect(() => {
    if (!isMounted) return;
    if (activeItem?.id === active?.id) return;
    setActive(() => activeItem);
  }, [activeItem, isMounted]);

  return (
    <CategoryContainer as={component} className={`${className}`} {...restProps}>
      <ul>
        {(categoryData ?? []).map((firstLevel) => (
          <CategoryFirstLevel
            component="li"
            key={`${firstLevel.id}`}
            data={firstLevel}
            isSingle={isSingle}
            expanded={active?.id === firstLevel.id}
            toggleExpended={() => {
              if (isSingle && !isDrawer) toggleDrawer?.();
              setActive((prev) => (prev?.id === firstLevel.id ? null : firstLevel));
            }}
          >
            {(firstLevel?.children ?? [])?.map((secondLevel) => {
              const isAll = secondLevel.id === firstLevel.id;
              const Wrapper = CategorySecondLevel;
              return (
                <Wrapper component="li" key={secondLevel.id} isSingle={isSingle} data={secondLevel} href={`${secondLevel.categoryId}`} closeDrawer={() => toggleDrawer?.(false)}>
                  {(secondLevel?.children ?? []).map((thirdLevel) => (
                    <CategoryThirdLevel
                      component="li"
                      key={`${thirdLevel?.id}`}
                      isSingle={isSingle}
                      data={thirdLevel}
                      href={`${thirdLevel.categoryId}`}
                      closeDrawer={() => toggleDrawer?.(false)}
                    />
                  ))}
                </Wrapper>
              );
            })}
          </CategoryFirstLevel>
        ))}
      </ul>
    </CategoryContainer>
  );
};

export default Category;
