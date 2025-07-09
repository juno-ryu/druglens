'use client';

import ProductCardSkeleton from '@/shared/atom-components/common/product-card/skeleton/skeleton';
import { ProductCardsWrapper, ProductCardWrapper, ProductListWrapper } from '@/shared/atom-components/common/product-list/product-list.style';

const ProductListSkeleton = () => {
  return (
    <ProductListWrapper>
      <ProductCardsWrapper>
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <ProductCardWrapper key={`ProductListSkeleton_${i}`}>
              <ProductCardSkeleton />
            </ProductCardWrapper>
          ))}
      </ProductCardsWrapper>
    </ProductListWrapper>
  );
};

export default ProductListSkeleton;
