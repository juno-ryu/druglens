'use client';

import { Children } from 'react';
import Link from 'next/link';
import { CategoryThirdLevelProps } from '@/shared/atom-components/common/category/category.type';
import { CategoryThirdLevelContainer } from '@/shared/atom-components/common/category/third-level/third-level.style';

const CategoryThirdLevel = <C extends React.ElementType>(props: CategoryThirdLevelProps<C>) => {
  const { component, isSingle, data, href = '#', children = null, className = '', closeDrawer, ...restProps } = props;

  if (isSingle) return null;

  return (
    <CategoryThirdLevelContainer as={component} className={`${className}`} {...restProps}>
      <Link href={href} onClick={closeDrawer}>
        {data?.name}
      </Link>
      {Boolean(Children.count(children)) && <ul>{children}</ul>}
    </CategoryThirdLevelContainer>
  );
};

export default CategoryThirdLevel;
