import styled from '@emotion/styled';

export const ProductListWrapper = styled.div`
  margin-top: 2px;
  height: 100%;
  display: flex;
  flex-direction: column;

  div.category-banner {
    max-width: 1444px;
    margin: 0 auto;
    padding: 0;
  }

  div.show-subcategory {
    height: 135px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 20px;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    margin-top: 0;
  }
`;

export const ProductCardWrapper = styled.div`
  width: calc(25% - 15px);
  min-width: calc(25% - 15px);

  ${(props) => props.theme.breakpoints.down('desktop')} {
    width: calc(50% - 10px);
    min-width: calc(50% - 10px);
  }

  ${(props) => props.theme.breakpoints.down('tablet')} {
    width: calc(100% - 8px);
    min-width: calc(100% - 8px);
  }
`;

export const ProductCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 20px;

  ${(props) => props.theme.breakpoints.down('desktop')} {
    gap: 18px 16px;
  }
`;
