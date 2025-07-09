import React from 'react';
import { Typography } from '@/core/design-systems';
import { ExtensionsContainer, ExtensionsSpacer } from '@/shared/atom-components/common/product-card/extensions/extensions.styles';
import { ProductCardExtensionsProps } from '@/shared/atom-components/common/product-card/product-card.type';

export default function ProductCardExtensions(props: ProductCardExtensionsProps) {
  const { productId, extensions, cardCount = 5, showRemainderUnit = true } = props;

  const renderExtensions = [];
  for (let i = 0; i < extensions.length; i += 1) {
    const extension = extensions[i];
    if (i < cardCount) {
      const extensionToDisplay = extension.name.slice(1);
      renderExtensions.push(
        <React.Fragment key={`${productId}_${extensionToDisplay}`}>
          <Typography variant="label/label1" color="gray/500" padding="2px">
            {extensionToDisplay}
          </Typography>
          {i !== extensions.length - 1 && i !== cardCount - 1 && <ExtensionsSpacer>{'·'}</ExtensionsSpacer>}
        </React.Fragment>,
      );
    } else {
      renderExtensions.push(<Typography key={`${productId}_remainder`} variant="label/label1" color="gray/500" padding="2px">{`+${extensions.length - i + 1}개`}</Typography>);
      break;
    }
  }

  return <ExtensionsContainer>{renderExtensions}</ExtensionsContainer>;
}
