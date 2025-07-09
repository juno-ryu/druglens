import Link from 'next/link';
import styled from '@emotion/styled';

export const ProductCardContainer = styled.div`
  padding-bottom: 14px;
  min-width: 279.5px;

  ${(props) => props.theme.breakpoints.down('tablet')} {
    padding-bottom: 12px;
  }
`;

export const ProductCardImageAbsolute = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: 0.4s;
`;

export const ProductCardImageLink = styled(Link)`
  display: block;
`;

export const ProductCardImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 350/215;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  & ${ProductCardImageAbsolute}.sub {
    opacity: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover ${ProductCardImageAbsolute}.sub {
      opacity: 1;
    }

    &:hover ${ProductCardImageAbsolute}.main {
      opacity: 0;
    }
  }
`;

export const ProductCardInnerBorder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 6px;
`;

export const ProductCardTitleTextWrapper = styled(Link)`
  display: flex;
  width: 100%;
  height: 20px;
  margin-top: 2px;
`;

export const ProductCardPriceWrapper = styled.div`
  display: flex;
  gap: 6px;
  height: 26px;
  margin-top: 1px;
`;

export const ProductCardBadgeWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 2;
  display: flex;
  gap: 6px;
`;

export const ProductCardNewBadge = styled.div``;

export const ProductCardRemainingTimer = styled.div`
  padding: 3px 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  height: 22px;
`;
