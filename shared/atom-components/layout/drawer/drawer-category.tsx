'use client';

import { Drawer } from '@/core/design-systems';
import Category from '@/shared/atom-components/common/category/category';
import { LayoutDrawerCategoryContainer } from '@/shared/atom-components/layout/drawer/drawer-category.style';
import { LayoutDrawerCategoryProps } from '@/shared/atom-components/layout/layout.type';

const LayoutDrawerCategory = (props: LayoutDrawerCategoryProps) => {
  const { isOpen, category, className = '', render, toggleDrawer, ...restProps } = props;

  return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(false)} {...restProps}>
      {render(
        <Category
          component={LayoutDrawerCategoryContainer}
          category={category}
          isSingle={false}
          isDrawer={true}
          headlineStyle={{ display: { desktop: 'none', tablet: 'none', mobile: 'none' } }}
          toggleDrawer={toggleDrawer}
        />,
      )}
    </Drawer>
  );
};

export default LayoutDrawerCategory;
