import Link from 'next/link';
import styled from '@emotion/styled';
import ProductCardScrap from '@/shared/atom-components/common/product-card/scrap/scrap';

export const ProductCardBrandAndScrapWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  padding: 4px 0;
  margin-top: 8px;
`;

export const ProductCardBrandWrapper = styled.div`
  display: flex;
  gap: 3px;
  max-width: calc(100% - 35px);
`;

export const ProductCardBrandLink = styled(Link)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  display: block;
`;

export const ProductCardBrandText = styled.div`
  color: #a2a2a4;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const ResponsiveScrap = styled(ProductCardScrap)`
  ${(props) => props.theme.breakpoints.down('tablet')} {
    height: 28px;
    overflow: hidden;
    margin-top: -3px;
  }
`;
