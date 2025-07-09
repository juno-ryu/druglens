import React, { useState } from 'react';
import { DesignIcon } from '@/core/design-systems';
import { ProductCardScrapProps } from '@/shared/atom-components/common/product-card/product-card.type';
import { ScrapWrapper } from '@/shared/atom-components/common/product-card/scrap/scrap.styles';

export default function ProductCardScrap(props: ProductCardScrapProps) {
  const { productId, onClickScrap, className = '', onClick, ...restProps } = props;
  const [isActive, setIsActive] = useState(false);
  // const { isClip, handleClip: onClip } = useClip(productId);

  // 스크랩 클릭 시 상태 변경
  // const handleScrapWrapperClick = throttleWrapper(async (e) => {
  //   e.preventDefault();
  //   await onClip();

  //   onClickScrap && onClickScrap();
  // });

  return (
    <ScrapWrapper
      type="button"
      onClick={(event) => {
        setIsActive(!isActive);
        onClick?.(event);
      }}
      className={`${className}`}
      {...restProps}
    >
      {isActive ? <DesignIcon variant="ProdCardScrapFill" color="state/sale" /> : <DesignIcon variant="ProdCardScrapOutline" color="gray/300" />}
    </ScrapWrapper>
  );
}
