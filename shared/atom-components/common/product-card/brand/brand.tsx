import React from 'react';
import { DesignIcon, Typography } from '@/core/design-systems';
import { PartnershipVVIP } from '@/core/design-systems/components/design-icon';
import { ProductCardBrandAndScrapWrapper, ProductCardBrandLink, ProductCardBrandWrapper } from '@/shared/atom-components/common/product-card/brand/brand.styles';
import { ProductCardBrandProps } from '@/shared/atom-components/common/product-card/product-card.type';

function ProductCardBrand(props: ProductCardBrandProps) {
  const { brand, onClickScrap } = props;
  const { name, id, brandCode, isVip, isVisibleReview, introduce, logo } = brand;

  return (
    <ProductCardBrandAndScrapWrapper>
      <ProductCardBrandWrapper>
        <ProductCardBrandLink href={`/brand/${id}`} prefetch={false}>
          <Typography variant="label/label1" color="gray/500">
            {name}
          </Typography>
        </ProductCardBrandLink>
        <DesignIcon variant="ProdCardAconOnly" width="56px" color="primary/600" />
        {isVip && (
          <DesignIcon variant="ProdCardVip" width="20px" slotProps={{ svgIcon: { fill: `url(#gradient-ProdCardVip-PartnershipVVIP-${id})` } }}>
            <PartnershipVVIP id={`gradient-ProdCardVip-PartnershipVVIP-${id}`} />
          </DesignIcon>
        )}
      </ProductCardBrandWrapper>
      {/* <ProductCardScrap productId={id} onClickScrap={onClickScrap} /> */}
    </ProductCardBrandAndScrapWrapper>
  );
}

export default ProductCardBrand;
