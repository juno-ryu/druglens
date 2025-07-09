'use client';

import React from 'react';
import dayjs from 'dayjs';
import { Stack } from '@mui/material';
import { DesignIcon, Typography } from '@/core/design-systems';
import Picture from '@/core/shared/components/general/picture/picture';
import ProductCardBrand from '@/shared/atom-components/common/product-card/brand/brand';
import ProductCardExtensions from '@/shared/atom-components/common/product-card/extensions/extensions';
import { INITIAL_PRODUCT_IMAGE_SIZE } from '@/shared/atom-components/common/product-card/product-card.const';
import {
  ProductCardBadgeWrapper,
  ProductCardContainer,
  ProductCardImageAbsolute,
  ProductCardImageLink,
  ProductCardImageWrapper,
  ProductCardInnerBorder,
  ProductCardPriceWrapper,
  ProductCardTitleTextWrapper,
} from '@/shared/atom-components/common/product-card/product-card.styles';
import { ProductCardProps } from '@/shared/atom-components/common/product-card/product-card.type';

const ProductCard = <C extends React.ElementType>(props: ProductCardProps<C>) => {
  const { product, productCardImageSizes, render, className } = props;
  const isNewProduct = dayjs(product.publishedAt || '').isAfter(dayjs().subtract(30, 'days'));
  const imageSizes = productCardImageSizes || INITIAL_PRODUCT_IMAGE_SIZE;
  // const productDiscountRate = discountAmount(product.priceInfo.price, product.priceInfo.salePrice);

  const handleScrapClick = () => {};

  return (
    <ProductCardContainer className={className}>
      <ProductCardImageLink href={`/product/${product.id}`} prefetch={false}>
        <ProductCardImageWrapper onClick={() => {}}>
          <ProductCardBadgeWrapper>{isNewProduct && <DesignIcon variant="ProdCardNew" width="41px" height="22px" color="gray/800" />}</ProductCardBadgeWrapper>

          {/** image */}
          {(product.images || []).map((image) => {
            const { id, isMain, url } = image;
            return (
              <ProductCardImageAbsolute className={isMain ? 'main' : 'sub'} key={id}>
                <Picture src={url.toString()} alt={product.title} quality={60} style={{ objectFit: 'cover' }} priority={false} sizes={imageSizes} />
              </ProductCardImageAbsolute>
            );
          })}

          <ProductCardInnerBorder />
        </ProductCardImageWrapper>
      </ProductCardImageLink>

      {/** brand */}
      {product.brand && <ProductCardBrand brand={product.brand} onClickScrap={handleScrapClick} />}

      {/** 상품 제목 */}
      <ProductCardTitleTextWrapper href={`/product/${product.id}`} onClick={() => {}} prefetch={false}>
        <Typography variant="body/body5" color="gray/800" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" display="block">
          {product.title}
        </Typography>
      </ProductCardTitleTextWrapper>

      <ProductCardPriceWrapper>
        {product.price > 0 ? (
          <Stack direction="row" alignItems="center">
            <Typography variant="body/body1" color="gray/900" fontWeight={700}>
              {product.price}
            </Typography>
            <Typography variant="body/body4" color="gray/900" fontWeight={800}>
              원
            </Typography>
          </Stack>
        ) : (
          <Typography variant="body/body1" color="gray/900" fontWeight={700}>
            FREE
          </Typography>
        )}
      </ProductCardPriceWrapper>
      <ProductCardExtensions productId={product.id} extensions={product.extensions} />
      {/* <ProductCardTags isDraggable tags={product.tags.map((tag: any) => tag.name)} tagIds={product.tags.map((tag: any) => tag.id)} /> */}
    </ProductCardContainer>
  );
};

export default ProductCard;
