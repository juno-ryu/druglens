'use client';

import { Children } from 'react';
import Link from 'next/link';
import { CategorySecondLevelProps } from '@/shared/atom-components/common/category/category.type';
import { CategorySecondLevelContainer } from '@/shared/atom-components/common/category/second-level/second-level.style';

const CategorySecondLevel = <C extends React.ElementType>(props: CategorySecondLevelProps<C>) => {
  const { component, isSingle, data, href = '#', children, className = '', closeDrawer, ...restProps } = props;

  if (isSingle) return null;

  return (
    <CategorySecondLevelContainer as={component} className={`${className}`} {...restProps}>
      <Link href={href} onClick={closeDrawer}>
        {data?.name}
      </Link>
      {Boolean(Children.count(children)) && <ul>{children}</ul>}
    </CategorySecondLevelContainer>
  );
};

export default CategorySecondLevel;
