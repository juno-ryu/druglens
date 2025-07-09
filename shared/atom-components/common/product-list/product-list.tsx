'use client';

import React from 'react';
import { ProductCardsWrapper, ProductListWrapper } from '@/shared/atom-components/common/product-list/product-list.style';
import { ProductListMainProps } from '@/shared/atom-components/common/product-list/product-list.type';

const ProductListMain = (props: ProductListMainProps) => {
  const { products } = props;

  const handleProductCardClick = (idx: number) => {
    return (actionName: any, title: string, productId: number) => {};
  };

  return (
    <ProductListWrapper>
      <ProductCardsWrapper>
        {/* {products.map((product: any, idx: any) => {
          return (
            <ProductCardWrapper key={idx}>
              <ProductCard product={product} onClickProductCard={handleProductCardClick(idx)} />
            </ProductCardWrapper>
          );
        })} */}
      </ProductCardsWrapper>
    </ProductListWrapper>
  );
};

export default ProductListMain;
